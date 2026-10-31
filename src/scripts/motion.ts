import { gsap } from "gsap";
import { STRINGS } from "../i18n/dictionary";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// iOS Safari and Brave-on-iOS resize the visual viewport as the toolbar shows
// and hides mid-scroll; a refresh per resize restarts in-flight reveals and
// snaps the drag. Ignore pure-height resizes on touch devices, keep
// real ones (orientation, width change) refreshing.
ScrollTrigger.config({ ignoreMobileResize: true });

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
  reveal: 0.45,
} as const;

const STAGGER = {
  hero: 0.06,
  item: 0.07,
} as const;

const REVEAL_OFFSET = 8;

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
  // The h1 is the LCP element: it is never hidden or faded, only secondary items enter.
  const items = gsap.utils.toArray<HTMLElement>("[data-hero-item]").filter((el) => !el.matches("h1"));
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
      scrollTrigger: { trigger: group, start: "top 85%", once: true, invalidateOnRefresh: true, fastScrollEnd: true },
    });
  });
}

/** Step 4: the tagline block fades in once. The authored HTML is full ink,
 * so reduced motion and no-JS need nothing.
 */
function initTaglineReveal() {
  const block = document.querySelector<HTMLElement>("[data-tagline-reveal]");
  if (!block) return;
  gsap.from(block, {
    autoAlpha: 0,
    y: REVEAL_OFFSET,
    duration: DURATION.reveal,
    ease: EASE_OUT,
    clearProps: "transform,opacity,visibility",
    scrollTrigger: { trigger: block, start: "top 80%", once: true },
  });
}
interface PhaseTelemetry {
  label: string;
  client: number;
  pager: number;
  milestone: string;
  labelKey?: string;
  milestoneKey?: string;
  liveKey?: string;
}

type Lang = "en" | "id";
function telemetryLang(): Lang {
  return (document.documentElement.lang === "id" ? "id" : "en");
}
function telemetryT(key: string | undefined, fallback: string): string {
  if (!key) return fallback;
  const lang = telemetryLang();
  return STRINGS[key]?.[lang] ?? STRINGS[key]?.en ?? fallback;
}

/** Step 5: the capability curve becomes a readout. Hovering, focusing or
 * clicking a phase updates the telemetry meters and numbers to that phase;
 * leaving returns to the clicked phase. The static markup has the panel
 * hidden and the triggers disabled, so this only enhances. Returns cleanup.
 */
function initPhaseTelemetry(): () => void {
  const cleanups: Array<() => void> = [];

  gsap.utils.toArray<HTMLElement>("[data-capability-curve]").forEach((curve) => {
    const panel = curve.querySelector<HTMLElement>("[data-telemetry]");
    const liveRegion = curve.querySelector<HTMLElement>("[data-telemetry-live]");
    if (!panel || !liveRegion || !curve.dataset.phases) return;
    const live = liveRegion;

    const phases: PhaseTelemetry[] = JSON.parse(curve.dataset.phases);
    const targets = gsap.utils.toArray<HTMLElement | SVGElement>("[data-phase-index]", curve);
    const triggers = gsap.utils.toArray<HTMLButtonElement>("[data-phase-trigger]", curve);
    const markers = gsap.utils.toArray<SVGGElement>("[data-phase-marker]", curve);
    const readout = (name: string) => panel.querySelector<HTMLElement>(`[data-readout="${name}"]`)!;
    const meter = (name: string) => panel.querySelector<HTMLElement>(`[data-meter="${name}"]`)!;
    const indexOf = (el: Element) => Number(el.closest("[data-phase-index]")?.getAttribute("data-phase-index"));

    const abort = new AbortController();
    const { signal } = abort;
    let selected = 0;
    let shown = -1;

    function show(i: number) {
      if (i === shown || !phases[i]) return;
      const first = shown < 0;
      shown = i;
      const phase = phases[i];
      const duration = first ? 0 : 0.45;

      readout("index").textContent = String(i + 1).padStart(2, "0");
      readout("label").textContent = telemetryT(phase.labelKey, phase.label);
      readout("milestone").textContent = telemetryT(phase.milestoneKey, phase.milestone);

      readout("client").textContent = `${phase.client}%`;
      readout("pager").textContent = `${phase.pager}%`;
      gsap.to(meter("client"), { scaleX: phase.client / 100, duration, ease: EASE_OUT, overwrite: true });
      gsap.to(meter("pager"), { scaleX: phase.pager / 100, duration, ease: EASE_OUT, overwrite: true });
      gsap.to(markers, {
        opacity: (idx: number) => (idx === i ? 1 : 0),
        duration: first ? 0 : 0.2,
        ease: EASE_OUT,
        overwrite: true,
      });

      targets.forEach((el) => {
        el.setAttribute("data-active", String(indexOf(el) === i));
      });
    }

    function select(i: number) {
      selected = i;
      triggers.forEach((button) => button.setAttribute("aria-pressed", String(indexOf(button) === i)));
      show(i);
      const phase = phases[i];
      live.textContent = telemetryT(phase.liveKey, `${phase.label}: client ownership ${phase.client} percent, Kyron Engineering pager share ${phase.pager} percent. ${phase.milestone}.`);
    }

    targets.forEach((el) => {
      const i = indexOf(el);
      el.addEventListener("pointerenter", () => show(i), { signal });
      el.addEventListener("focusin", () => show(i), { signal });
      el.addEventListener("click", () => select(i), { signal });
    });
    curve.addEventListener("pointerleave", () => show(selected), { signal });
    curve.addEventListener(
      "focusout",
      (event) => {
        if (!curve.contains(event.relatedTarget as Node | null)) show(selected);
      },
      { signal },
    );

    curve.dataset.interactive = "true";
    panel.hidden = false;
    triggers.forEach((button) => {
      button.disabled = false;
    });
    const rerender = () => {
      shown = -1;
      show(selected);
      select(selected);
      live.textContent = "";
    };
    document.addEventListener("astro:page-load", rerender, { signal });
    document.addEventListener("kyron:lang-change", rerender, { signal });
    select(0);
    live.textContent = "";

    cleanups.push(() => {
      abort.abort();
      delete curve.dataset.interactive;
      panel.hidden = true;
      live.textContent = "";
      targets.forEach((el) => el.removeAttribute("data-active"));
      triggers.forEach((button) => {
        button.disabled = true;
        button.setAttribute("aria-pressed", "false");
      });
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

let lenis: Lenis | undefined;
let lenisTick: ((time: number) => void) | undefined;
let cleanupTelemetry: (() => void) | undefined;

/** Lenis owns the scroll position, so ScrollTrigger is told about every
 * scroll event and Lenis is advanced from GSAP's ticker (one RAF loop).
 */
function initLenis() {
  lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  lenisTick = (time) => lenis?.raf(time * 1000);
  gsap.ticker.add(lenisTick);
  gsap.ticker.lagSmoothing(0);
  window.addEventListener("resize", onLayoutChange);
}

let refreshFrame = 0;
// iOS toolbar show/hide fires resize with width unchanged; refreshing there
// snaps the drag, so only refresh on real layout change.
let lastInnerWidth = 0;
function onLayoutChange() {
  if (lastInnerWidth === 0) lastInnerWidth = window.innerWidth;
  if (window.innerWidth === lastInnerWidth) return;
  lastInnerWidth = window.innerWidth;
  cancelAnimationFrame(refreshFrame);
  refreshFrame = requestAnimationFrame(() => {
    lenis?.resize();
    ScrollTrigger.refresh();
  });
}

function destroyLenis() {
  window.removeEventListener("resize", onLayoutChange);
  cancelAnimationFrame(refreshFrame);
  lastInnerWidth = 0;
  if (lenisTick) gsap.ticker.remove(lenisTick);
  lenisTick = undefined;
  lenis?.destroy();
  lenis = undefined;
  gsap.ticker.lagSmoothing(500, 33); // GSAP defaults
}

function teardown() {
  cleanupTelemetry?.();
  cleanupTelemetry = undefined;
  ctx?.revert();
  ctx = undefined;
  destroyLenis();
}

function init() {
  teardown();
  // Reduced motion: no smooth scroll and no tweens, so the authored final state stays.
  if (!prefersReducedMotion()) {
    initLenis();
    ctx = gsap.context(() => {
      initHeroEntrance();
      initCapabilityCurve();
      cleanupTelemetry = initPhaseTelemetry();
      initRevealGroups();
      initTaglineReveal();
    });
    ScrollTrigger.refresh();
    requestAnimationFrame(() => ScrollTrigger.refresh());
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
  }
}

// astro:page-load fires once on the initial load and again after every
// ClientRouter swap, so this is the only entry point init() needs.
document.addEventListener("astro:page-load", init);

reduceMotionQuery.addEventListener("change", init);

document.addEventListener("astro:before-swap", teardown);
