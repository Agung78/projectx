import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

/**
 * Curves are the CSS motion tokens, not GSAP's power* approximations, so JS
 * and CSS motion share one feel. Keep in sync with src/styles/global.css.
 *
 * The capability curve is the site's single orchestrated motion moment;
 * headings and sections render as authored, with no entrance effects.
 */
CustomEase.create("site-out", "0.23, 1, 0.32, 1");

const EASE_OUT = "site-out";

const DURATION = {
  reveal: 0.6,
  reducedFade: 0.25,
} as const;

const STAGGER = {
  item: 0.08,
} as const;

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function prefersReducedMotion() {
  return reduceMotionQuery.matches;
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

    if (prefersReducedMotion()) {
      paths.forEach((path) => {
        path.style.removeProperty("stroke-dasharray");
        path.style.removeProperty("stroke-dashoffset");
      });
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
  });
}

function init() {
  initCapabilityCurve();
}

// astro:page-load fires once on the initial load and again after every
// ClientRouter swap, so this is the only entry point init() needs.
document.addEventListener("astro:page-load", init);

reduceMotionQuery.addEventListener("change", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.set("[data-ownership-bar]", { clearProps: "opacity,transform,transformOrigin" });
  init();
});

document.addEventListener("astro:before-swap", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
