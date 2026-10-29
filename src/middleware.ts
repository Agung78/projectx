import { defineMiddleware } from "astro:middleware";
import { STRINGS } from "./i18n/dictionary";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const ID_PATH = /^\/id(\/|$)/;

function setAttr(tag: string, name: string, value: string): string {
  const v = `${name}="${esc(value).replace(/"/g, "&quot;")}"`;
  const re = new RegExp(`\\s${name}="[^"]*"`);
  return re.test(tag) ? tag.replace(re, ` ${v}`) : tag.replace(/\s*\/?>$/, (end) => ` ${v}${end}`);
}

// Build-time render: every internal link gets a trailing slash (matches the
// canonical + Vercel trailingSlash, no redirect hop). For /id/*: the /id/* pages reuse the English page
// components, then every data-i18n node is swapped from the dictionary and
// internal links get the /id prefix.
// ponytail: regex over rendered HTML; assumes data-i18n elements hold plain
// text only (same assumption the old client-side textContent swap made).
export const onRequest = defineMiddleware(async ({ url }, next) => {
  const res = await next();
  if (!res.headers.get("content-type")?.includes("text/html")) return res;

  const isId = ID_PATH.test(url.pathname);
  let html = await res.text();
  if (isId) html = html.replace(
    /<([a-z0-9]+)\b([^>]*?\sdata-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag, attrs, key) => (STRINGS[key] ? `<${tag}${attrs}>${esc(STRINGS[key].id)}</${tag}>` : m),
  );
  if (isId) html = html.replace(/<[a-z0-9]+\b[^>]*\sdata-i18n-attr="([^"]+)"[^>]*>/g, (tag, spec: string) => {
    for (const pair of spec.split(";")) {
      const sep = pair.indexOf(":");
      const entry = sep < 0 ? undefined : STRINGS[pair.slice(sep + 1).trim()];
      if (entry) tag = setAttr(tag, pair.slice(0, sep).trim(), entry.id);
    }
    return tag;
  });
  html = html.replace(/(\shref=")(\/[^"#?.]*)((?:[#?][^"]*)?)"/g, (m, pre, path, rest) =>
    path.startsWith("//") || (isId && ID_PATH.test(path))
      ? m
      : `${pre}${isId ? "/id" : ""}${path.replace(/\/?$/, "/")}${rest}"`,
  );
  return new Response(html, res);
});
