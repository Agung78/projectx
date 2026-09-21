import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

/**
 * Curves are the CSS motion tokens, not GSAP's power* approximations, so JS
 * and CSS motion share one feel. Keep in sync with src/styles/global.css.
 */
CustomEase.create("site-out", "0.23, 1, 0.32, 1");
CustomEase.create("site-in-out", "0.77, 0, 0.175, 1");
CustomEase.create("reel-out", "0.16, 1, 0.3, 1");

const EASE_OUT = "site-out";

/** Reveal timings, in seconds. Editorial reveals sit above the 300ms UI ceiling by design. */
const DURATION = {
  word: 0.7,
  reveal: 0.6,
  reducedFade: 0.25,
} as const;

const STAGGER = {
  word: 0.045,
  item: 0.08,
} as const;

const REEL = {
  duration: 1.4,
  stagger: 0.09,
  cell: 30,
  spinBlur: 3,
  ease: "reel-out",
} as const;

let reelFilterId = 0;

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function prefersReducedMotion() {
  return reduceMotionQuery.matches;
}

/** Hint the compositor only for the life of the tween, never permanently. */
function withWillChange(targets: gsap.TweenTarget, vars: gsap.TweenVars): gsap.TweenVars {
  return {
    ...vars,
    onStart: () => gsap.set(targets, { willChange: "transform, opacity" }),
    onComplete: () => gsap.set(targets, { willChange: "auto" }),
  };
}

/**
 * Splits headings into word spans for a restrained stagger reveal while
 * keeping a single, unsplit, always-in-DOM accessible name for AT and
 * no-JS visitors (Section 9, "Split-heading animation must preserve one
 * unsplit accessible name").
 *
 * Reduced motion keeps the heading as authored — no split, no movement.
 */
function initSplitHeadings() {
  if (prefersReducedMotion()) return;

  const sources = document.querySelectorAll<HTMLElement>("[data-split-source]");

  sources.forEach((source) => {
    const text = source.textContent?.trim() ?? "";
    if (!text) return;

    const decorative = document.createElement("span");
    decorative.setAttribute("aria-hidden", "true");
    decorative.className = "split-decorative";

    text.split(/\s+/).forEach((word, i, arr) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "js-split-word overflow-hidden inline-block align-top";
      const inner = document.createElement("span");
      inner.className = "inline-block";
      inner.textContent = word;
      wordSpan.appendChild(inner);
      decorative.appendChild(wordSpan);
      // The separator is a text node between the wrappers, not inside one: a
      // trailing space inside an overflow-hidden inline-block collapses away,
      // which runs the words together.
      if (i < arr.length - 1) decorative.appendChild(document.createTextNode(" "));
      gsap.set(inner, { yPercent: 110, opacity: 0 });
    });

    source.insertAdjacentElement("afterend", decorative);
    source.classList.add("sr-only");

    const words = decorative.querySelectorAll<HTMLElement>(".js-split-word > span");
    const inView = decorative.getBoundingClientRect().top < window.innerHeight;

    gsap.to(
      words,
      withWillChange(words, {
        yPercent: 0,
        opacity: 1,
        duration: DURATION.word,
        ease: EASE_OUT,
        stagger: STAGGER.word,
        // Below-the-fold headings wait for the reader instead of playing unseen.
        ...(inView
          ? { delay: 0.1 }
          : { scrollTrigger: { trigger: decorative, start: "top 85%", once: true } }),
      }),
    );
  });
}

/** Restrained hero entrance: eyebrow, headline, supporting copy, CTAs, proof line. */
function initHeroIntro() {
  const hero = document.querySelector<HTMLElement>("[data-hero-intro]");
  if (!hero) return;

  const items = hero.querySelectorAll<HTMLElement>("[data-hero-item]");
  if (items.length === 0) return;

  if (prefersReducedMotion()) {
    // Gentler, not zero: opacity only, no movement.
    gsap.from(items, { opacity: 0, duration: DURATION.reducedFade, ease: EASE_OUT, stagger: 0.04 });
    return;
  }

  gsap.from(
    items,
    withWillChange(items, {
      opacity: 0,
      y: 12,
      duration: DURATION.reveal,
      ease: EASE_OUT,
      stagger: 0.12,
      delay: 0.15,
    }),
  );
}

/**
 * Evidence rows and sections reveal in reading order as they enter the
 * viewport. Batched so a group entering together staggers instead of all
 * landing on the same frame.
 */
function initScrollReveals() {
  const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
  if (targets.length === 0) return;

  const reduced = prefersReducedMotion();

  gsap.set(targets, { opacity: 0, ...(reduced ? {} : { y: 16 }) });

  ScrollTrigger.batch(targets, {
    start: "top 85%",
    once: true,
    onEnter: (batch) =>
      gsap.to(
        batch,
        withWillChange(batch, {
          opacity: 1,
          y: 0,
          duration: reduced ? DURATION.reducedFade : DURATION.reveal,
          ease: EASE_OUT,
          stagger: reduced ? 0 : STAGGER.item,
          overwrite: true,
        }),
      ),
  });
}

interface ReelColumn {
  strip: HTMLElement;
  blur: SVGFEGaussianBlurElement;
  landingCell: number;
  delay: number;
}

function buildSpinningCounters(curve: HTMLElement) {
  const columns: ReelColumn[] = [];
  const filterDefs = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  filterDefs.setAttribute("data-reel-filters", "");
  filterDefs.setAttribute("aria-hidden", "true");
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  filterDefs.appendChild(defs);

  curve.querySelectorAll<HTMLElement>("[data-reel-value]").forEach((counter) => {
    const value = counter.dataset.reelValue;
    if (!value || counter.dataset.reelReady === "true") return;

    counter.textContent = "";
    counter.classList.add("t-reel");
    counter.dataset.reelReady = "true";

    Array.from(value).forEach((digit, columnIndex) => {
      const numericDigit = Number(digit);
      const landingCell = (2 + columnIndex) * 10 + numericDigit;
      const column = document.createElement("span");
      column.className = "t-reel-col";
      const strip = document.createElement("span");
      strip.className = "t-reel-strip";

      for (let cell = 0; cell <= landingCell; cell += 1) {
        const digitCell = document.createElement("span");
        digitCell.className = "t-reel-digit";
        digitCell.textContent = String(cell % 10);
        strip.appendChild(digitCell);
      }

      const filterId = `reel-blur-${reelFilterId++}`;
      const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
      filter.setAttribute("id", filterId);
      filter.setAttribute("x", "-20%");
      filter.setAttribute("y", "-50%");
      filter.setAttribute("width", "140%");
      filter.setAttribute("height", "200%");
      const blur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
      blur.setAttribute("in", "SourceGraphic");
      blur.setAttribute("stdDeviation", "0 0");
      filter.appendChild(blur);
      defs.appendChild(filter);

      strip.style.filter = `url(#${filterId})`;
      column.appendChild(strip);
      counter.appendChild(column);
      columns.push({ strip, blur, landingCell, delay: columnIndex * REEL.stagger });
    });

    const suffix = document.createElement("span");
    suffix.textContent = "%";
    counter.appendChild(suffix);
  });

  if (columns.length > 0) curve.appendChild(filterDefs);
  return columns;
}

function restoreStaticCounters(curve: HTMLElement) {
  curve.querySelector("[data-reel-filters]")?.remove();
  curve.querySelectorAll<HTMLElement>("[data-reel-value]").forEach((counter) => {
    counter.textContent = `${counter.dataset.reelValue}%`;
    counter.classList.remove("t-reel");
    delete counter.dataset.reelReady;
  });
}

function spinCounters(columns: ReelColumn[]) {
  columns.forEach(({ strip, blur, landingCell, delay }) => {
    blur.setAttribute("stdDeviation", `0 ${REEL.spinBlur}`);
    gsap.to(strip, {
      transform: `translateY(${-landingCell * REEL.cell}px)`,
      duration: REEL.duration,
      delay,
      ease: REEL.ease,
      onComplete: () => {
        strip.style.willChange = "auto";
      },
    });
    gsap.to(blur, {
      attr: { stdDeviation: "0 0" },
      duration: REEL.duration,
      delay,
      ease: REEL.ease,
    });
  });
}

/** The capability transfer explains itself as it enters view: desktop lines
 * draw across the phases, while narrow-layout ownership bars fill left to right.
 */
function initCapabilityCurve() {
  // A page may render more than one curve (hero and section), so every
  // instance is wired, not just the first match.
  document.querySelectorAll<HTMLElement>("[data-capability-curve]").forEach((curve) => {
    const paths = curve.querySelectorAll<SVGPathElement>("path[data-curve-line]");
    const bars = curve.querySelectorAll<HTMLElement>("[data-ownership-bar]");
    const reelColumns = prefersReducedMotion() ? [] : buildSpinningCounters(curve);

    if (prefersReducedMotion()) {
      paths.forEach((path) => {
        path.style.removeProperty("stroke-dasharray");
        path.style.removeProperty("stroke-dashoffset");
      });
      restoreStaticCounters(curve);
      if (bars.length > 0) {
        gsap.from(bars, { opacity: 0, duration: DURATION.reducedFade, ease: EASE_OUT, stagger: 0.04 });
      }
      return;
    }

    paths.forEach((path) => {
      // The SVG is display:none below md, where getTotalLength is unreliable
      // and the drawn line is never seen; leave it as authored.
      if (path.getBoundingClientRect().width === 0) return;

      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none", // scrubbed motion follows the scroll position, not a curve
        scrollTrigger: {
          trigger: curve,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      });
    });

    if (bars.length > 0) {
      gsap.from(bars, {
        scaleX: 0,
        duration: DURATION.reveal,
        ease: EASE_OUT,
        stagger: STAGGER.item,
        transformOrigin: "left center",
        scrollTrigger: { trigger: curve, start: "top 80%", once: true },
      });
    }

    if (reelColumns.length > 0) {
      ScrollTrigger.create({
        trigger: curve,
        start: "top 80%",
        once: true,
        onEnter: () => spinCounters(reelColumns),
      });
    }
  });
}

function init() {
  initSplitHeadings();
  initHeroIntro();
  initScrollReveals();
  initCapabilityCurve();
}

// astro:page-load fires once on the initial load and again after every
// ClientRouter swap, so this is the only entry point init() needs.
document.addEventListener("astro:page-load", init);

reduceMotionQuery.addEventListener("change", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.set("[data-reveal], [data-hero-item], [data-ownership-bar]", {
    clearProps: "opacity,transform,transformOrigin,willChange",
  });
  document.querySelectorAll<HTMLElement>("[data-capability-curve]").forEach(restoreStaticCounters);
  init();
});

document.addEventListener("astro:before-swap", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
