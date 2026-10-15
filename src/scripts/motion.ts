import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

/**
 * Curves are the CSS motion tokens, not GSAP's power* approximations, so JS
 * and CSS motion share one feel. Keep in sync with src/styles/global.css.
 *
 * Motion follows WEBSITE-DESIGN-STANDARD §9.2: hero entrance, capability
 * curve draw, evidence reveal, tagline reveal. Everything else renders as authored.
 */
CustomEase.create("site-out", "0.23, 1, 0.32, 1");

const EASE_OUT = "site-out";

const DURATION = {
  reveal: 0.6,
} as const;

const STAGGER = {
  hero: 0.06,
  item: 0.08,
  word: 0.05,
} as const;

const REVEAL_OFFSET = 16;

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function prefersReducedMotion() {
  return reduceMotionQuery.matches;
}

/** Every GSAP tween and ScrollTrigger lives in this context, so one revert()
 * kills them and restores inline styles before a swap or a motion-preference change.
 */
let ctx: gsap.Context | undefined;

/** Step 1: hero items enter in reading order. The static HTML is already
 * legible; gsap.from only sets the start state once JS runs.
 */
function initHeroEntrance() {
  const items = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
  if (items.length === 0) return;
  gsap.from(items, {
    y: REVEAL_OFFSET,
    autoAlpha: 0,
    duration: DURATION.reveal,
    ease: EASE_OUT,
    stagger: STAGGER.hero,
    clearProps: "transform,opacity,visibility",
  });
}

/** Step 2: the capability transfer explains itself as it enters view: desktop
 * lines draw across the phases and their nodes settle, while narrow-layout
 * ownership bars fill left to right.
 */
function initCapabilityCurve() {
  // A page may render more than one curve (hero and section), so every
  // instance is wired, not just the first match.
  gsap.utils.toArray<HTMLElement>("[data-capability-curve]").forEach((curve) => {
    const paths = gsap.utils.toArray<SVGPathElement>("path[data-curve-line]", curve);
    const nodes = gsap.utils.toArray<SVGCircleElement>("[data-curve-node]", curve);
    const bars = gsap.utils.toArray<HTMLElement>("[data-ownership-bar]", curve);

    // The SVG is display:none below md, where getTotalLength is unreliable
    // and the drawn line is never seen; leave it as authored.
    const drawable = paths.filter((path) => path.getBoundingClientRect().width > 0);
    if (drawable.length > 0) {
      const tl = gsap.timeline({
        defaults: { ease: "none" }, // scrubbed motion follows the scroll position, not a curve
        scrollTrigger: { trigger: curve, start: "top 75%", end: "bottom 60%", scrub: 0.6 },
      });
      drawable.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length });
        tl.fromTo(path, { strokeDashoffset: length }, { strokeDashoffset: 0, duration: 1 }, 0);
      });
      if (nodes.length > 0) {
        tl.from(
          nodes,
          { scale: 0, autoAlpha: 0, transformOrigin: "50% 50%", duration: 0.2, stagger: { amount: 0.6 } },
          0.2,
        );
      }
    }

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

/** Step 3: evidence rows reveal once, in DOM (reading) order. */
function initEvidenceReveal() {
  const items = gsap.utils.toArray<HTMLElement>("[data-evidence-item]");
  if (items.length === 0) return;
  gsap.from(items, {
    y: REVEAL_OFFSET,
    autoAlpha: 0,
    duration: DURATION.reveal,
    ease: EASE_OUT,
    stagger: STAGGER.item,
    clearProps: "transform,opacity,visibility",
    scrollTrigger: { trigger: items[0].parentElement, start: "top 85%", once: true },
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

function teardown() {
  taglineObserver?.disconnect();
  ctx?.revert();
  ctx = undefined;
}

function init() {
  teardown();
  // Reduced motion: no tweens are created, so the authored final state stays.
  if (!prefersReducedMotion()) {
    ctx = gsap.context(() => {
      initHeroEntrance();
      initCapabilityCurve();
      initEvidenceReveal();
    });
  }
  initTaglineReveal();
}

// astro:page-load fires once on the initial load and again after every
// ClientRouter swap, so this is the only entry point init() needs.
document.addEventListener("astro:page-load", init);

reduceMotionQuery.addEventListener("change", init);

document.addEventListener("astro:before-swap", teardown);
