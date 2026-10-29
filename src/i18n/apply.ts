// Language is the URL (/id/* = Indonesian); the toggle just navigates.
const ID_PREFIX = /^\/id(?=\/|$)/;

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

document.addEventListener("click", (event) => {
  const btn = (event.target as HTMLElement).closest<HTMLElement>("[data-lang-toggle]");
  if (!btn || btn.dataset.lang === document.documentElement.lang) return;
  const { pathname, search, hash } = window.location;
  const base = pathname.replace(ID_PREFIX, "") || "/";
  const target = btn.dataset.lang === "id" ? `/id${base === "/" ? "/" : base}` : base;
  window.location.assign(target + search + hash);
});
document.addEventListener("astro:page-load", syncToggles);
syncToggles();
