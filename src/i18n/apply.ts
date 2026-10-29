// Language is the URL (/id/* = Indonesian). The toggle swaps text in
// place from the dictionary and pushes the URL — no reload, no scroll
// jump, no white flash. Server HTML stays the SEO source of truth.
import { STRINGS } from "./dictionary";

type Lang = "en" | "id";

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

/** Plain-text nodes only — same assumption the middleware makes. */
function swapText(lang: Lang): void {
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const entry = el.dataset.i18n ? STRINGS[el.dataset.i18n] : undefined;
    if (entry) el.textContent = entry[lang];
  });
  document.querySelectorAll<HTMLElement>("[data-i18n-attr]").forEach((el) => {
    const spec = el.dataset.i18nAttr;
    if (!spec) return;
    for (const pair of spec.split(";")) {
      const sep = pair.indexOf(":");
      if (sep < 0) continue;
      const entry = STRINGS[pair.slice(sep + 1).trim()];
      if (entry) el.setAttribute(pair.slice(0, sep).trim(), entry[lang]);
    }
  });
}

function rewriteLinks(lang: Lang): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((a) => {
    if (a.dataset.i18nAttr?.includes("href:")) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("//")) return;
    const m = href.match(/^(\/[^?#]*)([?#].*)?$/);
    if (!m || /\.[a-z0-9]+$/i.test(m[1])) return;
    const base = m[1].replace(ID_PREFIX, "") || "/";
    a.setAttribute("href", (lang === "id" ? `/id${base === "/" ? "/" : base}` : base) + (m[2] ?? ""));
  });
}

function syncMeta(lang: Lang): void {
  const titleEl = document.querySelector<HTMLTitleElement>("title[data-title-key]");
  const titleKey = titleEl?.dataset.titleKey;
  if (titleEl && titleKey && STRINGS[titleKey]) {
    const t = STRINGS[titleKey][lang];
    titleEl.textContent = t.includes("NewCo") ? t : `${t} | NewCo`;
    document.title = titleEl.textContent ?? document.title;
  }
  const descKey = document.querySelector<HTMLMetaElement>("meta[data-desc-key]")?.dataset.descKey;
  const desc = descKey ? STRINGS[descKey]?.[lang] : undefined;
  if (desc) {
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute("content", desc);
  }
  document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute("content", document.title);
  document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute("content", document.title);
  document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute("content", lang === "id" ? "id_ID" : "en_US");
  const canonical = window.location.origin + window.location.pathname;
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonical);
  document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", canonical);
}

function syncActiveLinks(): void {
  const current = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll<HTMLAnchorElement>("nav a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const norm = href.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
    if (norm === current) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function setLang(lang: Lang, push: boolean): void {
  if (push) {
    const { pathname, search, hash } = window.location;
    const base = pathname.replace(ID_PREFIX, "") || "/";
    const target = (lang === "id" ? `/id${base === "/" ? "/" : base}` : base) + search + hash;
    if (target !== pathname + search + hash) history.pushState(null, "", target);
  }
  document.documentElement.lang = lang;
  swapText(lang);
  rewriteLinks(lang);
  syncMeta(lang);
  syncActiveLinks();
  syncToggles();
  // Telemetry readouts + form errors re-render off this (motion.ts, contact).
  document.dispatchEvent(new CustomEvent("newco:lang-change"));
}

document.addEventListener("click", (event) => {
  const btn = (event.target as HTMLElement).closest<HTMLElement>("[data-lang-toggle]");
  if (!btn || !btn.dataset.lang) return;
  const next: Lang = btn.dataset.lang === "id" ? "id" : "en";
  if (next === document.documentElement.lang) return;
  setLang(next, true);
});

// Back/forward across a language switch re-applies in place.
window.addEventListener("popstate", () => {
  setLang(ID_PREFIX.test(window.location.pathname) ? "id" : "en", false);
});

// SSR already rendered the right language; just sync the toggle chrome.
document.addEventListener("astro:page-load", syncToggles);
syncToggles();
