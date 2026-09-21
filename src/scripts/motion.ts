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

/** The capability-transfer line draws as the curve enters view, then settles. */
function initCapabilityCurve() {
  // A page may render more than one curve (hero and section), so every
  // instance is wired, not just the first match.
  document.querySelectorAll<HTMLElement>("[data-capability-curve]").forEach((curve) => {
    const paths = curve.querySelectorAll<SVGPathElement>("path[data-curve-line]");
    if (paths.length === 0) return;

    if (prefersReducedMotion()) {
      paths.forEach((path) => {
        path.style.removeProperty("stroke-dasharray");
        path.style.removeProperty("stroke-dashoffset");
      });
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
  });
}

function init() {
  initSplitHeadings();
  initHeroIntro();
  initScrollReveals();
  initCapabilityCurve();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

reduceMotionQuery.addEventListener("change", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.set("[data-reveal], [data-hero-item]", { clearProps: "opacity,transform,willChange" });
  init();
});

document.addEventListener("astro:before-swap", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
