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
  word: 0.05,
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

let taglineObserver: IntersectionObserver | undefined;

/**
 * Tagline words move from muted to full ink one at a time as they cross a
 * trigger line near the lower third of the viewport. IntersectionObserver
 * keeps this off the scroll event; reduced motion and no-JS leave the
 * authored final state untouched.
 */
function initTaglineReveal() {
  taglineObserver?.disconnect();
  const block = document.querySelector<HTMLElement>("[data-tagline-reveal]");
  if (!block || prefersReducedMotion()) {
    block?.removeAttribute("data-reveal-ready");
    return;
  }

  const words = Array.from(block.querySelectorAll<HTMLElement>("[data-tagline-word]"));
  block.setAttribute("data-reveal-ready", "true");

  taglineObserver = new IntersectionObserver(
    (entries, observer) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => words.indexOf(a.target as HTMLElement) - words.indexOf(b.target as HTMLElement))
        .forEach((entry, i) => {
          const word = entry.target as HTMLElement;
          word.style.transitionDelay = `${i * STAGGER.word}s`;
          word.setAttribute("data-active", "true");
          observer.unobserve(word);
        });
    },
    { rootMargin: "0px 0px -35% 0px" },
  );
  words.forEach((word) => taglineObserver?.observe(word));
}

function init() {
  initCapabilityCurve();
  initTaglineReveal();
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
  taglineObserver?.disconnect();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
