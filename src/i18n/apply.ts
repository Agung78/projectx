import { LANG_KEY, STRINGS, type Lang } from "./dictionary";

export function getLang(): Lang {
  try {
    return localStorage.getItem(LANG_KEY) === "id" ? "id" : "en";
  } catch {
    return "en";
  }
}

/** Swap every [data-i18n] / [data-i18n-attr] node, <title>, and meta description. */
export function applyLang(lang: Lang): void {
  const dict = STRINGS;
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const entry = dict[el.dataset.i18n ?? ""];
    if (entry) el.textContent = entry[lang];
  });
  document.querySelectorAll<HTMLElement>("[data-i18n-attr]").forEach((el) => {
    for (const pair of (el.dataset.i18nAttr ?? "").split(";")) {
      const sep = pair.indexOf(":");
      if (sep < 0) continue;
      const entry = dict[pair.slice(sep + 1).trim()];
      if (entry) el.setAttribute(pair.slice(0, sep).trim(), entry[lang]);
    }
  });
  const titleKey = document.querySelector("title")?.dataset.titleKey;
  const titleEntry = titleKey ? dict[titleKey] : undefined;
  if (titleEntry) document.title = titleEntry[lang];
  const descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  const descEntry = descEl?.dataset.descKey ? dict[descEl.dataset.descKey] : undefined;
  if (descEl && descEntry) descEl.content = descEntry[lang];

  document.documentElement.lang = lang === "id" ? "id" : "en";
  document.querySelectorAll<HTMLElement>("[data-lang-indicator]").forEach((el) => {
    el.style.transform = lang === "id" ? "translateX(100%)" : "translateX(0%)";
  });
  document.querySelectorAll<HTMLButtonElement>("[data-lang-toggle]").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.setAttribute("aria-pressed", String(active));
    btn.classList.toggle("text-navy", active);
    btn.classList.toggle("text-grey", !active);
  });
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* private mode: page still flips, just not persisted */
  }
  document.dispatchEvent(new CustomEvent("newco:lang-change", { detail: { lang } }));
}

function bindToggles(): void {
  if (document.documentElement.dataset.i18nBound === "true") return;
  document.documentElement.dataset.i18nBound = "true";
  document.addEventListener("click", (event) => {
    const btn = (event.target as HTMLElement).closest<HTMLElement>("[data-lang-toggle]");
    if (!btn) return;
    applyLang(btn.dataset.lang === "id" ? "id" : "en");
  });
  document.addEventListener("astro:page-load", () => applyLang(getLang()));
}

bindToggles();
applyLang(getLang());
