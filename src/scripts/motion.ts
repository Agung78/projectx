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
  item: 0.07,
  word: 0.05,
} as const;

const REVEAL_OFFSET = 16;
const TAGLINE_OFFSET = 8;

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

/** Step 3: grouped items reveal once, in DOM (reading) order. Each
 * [data-reveal-group] staggers its [data-reveal-item] children; ungrouped
 * [data-evidence-item] rows are grouped by their parent.
 */
function initRevealGroups() {
  const groups = new Map<Element, HTMLElement[]>();
  gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
    groups.set(group, gsap.utils.toArray<HTMLElement>("[data-reveal-item]", group));
  });
  gsap.utils.toArray<HTMLElement>("[data-evidence-item]").forEach((item) => {
    const parent = item.parentElement;
    if (!parent || parent.closest("[data-reveal-group]")) return;
    groups.set(parent, [...(groups.get(parent) ?? []), item]);
  });

  groups.forEach((items, group) => {
    if (items.length === 0) return;
    gsap.from(items, {
      y: REVEAL_OFFSET,
      autoAlpha: 0,
      duration: DURATION.reveal,
      ease: EASE_OUT,
      stagger: STAGGER.item,
      clearProps: "transform,opacity,visibility",
      scrollTrigger: { trigger: group, start: "top 85%", once: true },
    });
  });
}

/** Step 4: tagline words settle from muted to full ink as the block crosses
 * the viewport. The authored HTML is full ink, so reduced motion and no-JS
 * need nothing.
 */
function initTaglineReveal() {
  const block = document.querySelector<HTMLElement>("[data-tagline-reveal]");
  if (!block) return;
  const words = gsap.utils.toArray<HTMLElement>("[data-tagline-word]", block);
  if (words.length === 0) return;
  gsap.from(words, {
    opacity: 0.3,
    y: TAGLINE_OFFSET,
    duration: DURATION.reveal,
    ease: EASE_OUT,
    stagger: STAGGER.word,
    clearProps: "transform,opacity",
    scrollTrigger: { trigger: block, start: "top 75%", once: true },
  });
}

function teardown() {
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
      initRevealGroups();
      initTaglineReveal();
    });
  }
}

// astro:page-load fires once on the initial load and again after every
// ClientRouter swap, so this is the only entry point init() needs.
document.addEventListener("astro:page-load", init);

reduceMotionQuery.addEventListener("change", init);

document.addEventListener("astro:before-swap", teardown);
