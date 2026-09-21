import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function prefersReducedMotion() {
  return reduceMotionQuery.matches;
}

/**
 * Splits headings into word spans for a restrained stagger reveal while
 * keeping a single, unsplit, always-in-DOM accessible name for AT and
 * no-JS visitors (Section 9, "Split-heading animation must preserve one
 * unsplit accessible name").
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

    text.split(" ").forEach((word, i, arr) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "js-split-word overflow-hidden inline-block align-top";
      const inner = document.createElement("span");
      inner.className = "inline-block will-change-transform";
      inner.textContent = word + (i < arr.length - 1 ? " " : "");
      wordSpan.appendChild(inner);
      decorative.appendChild(wordSpan);
      gsap.set(inner, { yPercent: 110, opacity: 0 });
    });

    source.insertAdjacentElement("afterend", decorative);
    source.classList.add("sr-only");

    gsap.to(decorative.querySelectorAll(".js-split-word > span"), {
      yPercent: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.045,
      delay: 0.1,
    });
  });
}

/** Restrained hero entrance: eyebrow, headline, supporting copy, CTAs, proof line. */
function initHeroIntro() {
  const hero = document.querySelector<HTMLElement>("[data-hero-intro]");
  if (!hero) return;

  const items = hero.querySelectorAll<HTMLElement>("[data-hero-item]");
  if (prefersReducedMotion() || items.length === 0) return;

  gsap.from(items, {
    opacity: 0,
    y: 12,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.12,
    delay: 0.15,
  });
}

/** Evidence rows and sections reveal in reading order as they enter the viewport. */
function initScrollReveals() {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

  targets.forEach((el) => {
    if (prefersReducedMotion()) return;

    gsap.from(el, {
      opacity: 0,
      y: 16,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });
  });
}

/** The capability-transfer line draws as the curve enters view, then settles. */
function initCapabilityCurve() {
  const curve = document.querySelector<HTMLElement>("[data-capability-curve]");
  if (!curve) return;

  const paths = curve.querySelectorAll<SVGPathElement>("path[data-curve-line]");
  if (paths.length === 0) return;

  if (prefersReducedMotion()) {
    paths.forEach((path) => path.style.removeProperty("stroke-dashoffset"));
    return;
  }

  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: curve,
        start: "top 75%",
        end: "bottom 60%",
        scrub: 0.6,
      },
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
  gsap.set("[data-reveal], [data-hero-item]", { clearProps: "opacity,transform" });
  init();
});

document.addEventListener("astro:before-swap", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
