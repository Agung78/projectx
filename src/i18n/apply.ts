// Language is the URL (/id/* = Indonesian); the toggle just navigates.
const ID_PREFIX = /^\/id(?=\/|$)/;
// Same page, different language — stash scrollY so the reader keeps
// their place instead of landing back at the top after the reload.
const SCROLL_KEY = "lang-scroll-y";

function syncToggles(): void {
  const lang = document.documentElement.lang === "id" ? "id" : "en";
  document.querySelectorAll<HTMLElement>("[data-lang-indicator]").forEach((el) => {
    el.style.transform = lang === "id" ? "translateX(100%)" : "translateX(0%)";
  });
  document.querySelectorAll<HTMLButtonElement>("[data-lang-toggle]").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.setAttribute("aria-pressed", String(active));
    btn.classList.toggle("text-navy", active);
    btn.classList.toggle("text-grey", !active);
  });
}

function restoreScroll(): void {
  let raw: string | null = null;
  try {
    raw = sessionStorage.getItem(SCROLL_KEY);
    sessionStorage.removeItem(SCROLL_KEY);
  } catch {
    return;
  }
  // Anchor links: the browser already scrolls to the target, don't fight it.
  if (window.location.hash) return;
  const y = Number(raw);
  if (!Number.isFinite(y) || y <= 0) return;
  // Deferred past parse so the full page height is laid out.
  requestAnimationFrame(() => window.scrollTo(0, y));
}

document.addEventListener("click", (event) => {
  const btn = (event.target as HTMLElement).closest<HTMLElement>("[data-lang-toggle]");
  if (!btn || btn.dataset.lang === document.documentElement.lang) return;
  const { pathname, search, hash } = window.location;
  const base = pathname.replace(ID_PREFIX, "") || "/";
  const target = btn.dataset.lang === "id" ? `/id${base === "/" ? "/" : base}` : base;
  try {
    sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
  } catch {
    /* private mode: navigate without restoring */
  }
  window.location.assign(target + search + hash);
});
document.addEventListener("astro:page-load", () => {
  syncToggles();
  restoreScroll();
});
syncToggles();
restoreScroll();
