# SEO Goal Simulation — projectx (live-domain scenario)

> Date: 2026-10-29 · Tool: SEOmator (`seo-audit-skill`) · Target audited: https://projectx-gold.vercel.app/

## Goal assumed
Lead generation. Per `docs/COMPANY-OVERVIEW-PLACEMENT.md`, the primary conversion is **Talk to us**. No explicit goal was given.

## Audit (crawl 5 pages, mobile on)
- Score: **98 / A** — 1 critical, 87 warnings, 155 not measured.
- Critical: low text-to-HTML ratio on `/how-we-work` (7.4%).
- Warnings: image formats/sizes/responsive, hreflang return links, sitemap orphans/lastmod, E-E-A-T (no author byline, no citations), social profiles, font loading, LCP hints, HTTP/2, reading level.
- Nothing blocks indexing.
- `seomator.toml` has `domains = [ ]`; set the real domain before the real run.

## Simulation (Monte Carlo, 20k runs, 365 days)

| Goal | P10 | P50 | P90 |
|---|---|---|---|
| All URLs indexed | 7 d | **14 d** | 23 d |
| 100 organic sessions/month | not reached in 365 d | — | — |
| First organic "Talk to us" lead | 244 d | **308 d** | 353 d |
| 3 organic leads/month | not reached in 365 d | — | — |

- First lead occurs within 365 days in only **21%** of runs.
- Bottleneck is traffic, not technical health: ~10 URLs (5 EN + 5 ID), no blog, no backlinks, narrow B2B niche (Indonesian multi-location hospitality/retail), generic brand name "NewCo".

## Assumptions (not measured)
- Indexing delay: triangular 3–30 d (mode 10).
- Trust/sandbox ramp start: 45–120 d (mode 75); 120 d linear ramp.
- Backlinks within 60 d: 60% probability (1.5× traffic if yes, 0.7× if no).
- Reachable keyword pool: 20–150 searches/month (mode 50).
- Organic CTR: 2–12% (mode 5%).
- Conversion on "Talk to us": 0.5–3% (mode 1.2%).
- Paid, LinkedIn, referral and outbound leads are **not** counted.

## Caveats
- Traffic inputs are assumptions; only the audit is real data. Validate with keyword-volume data to tighten dates.
- A monthly content/backlink push would pull the 100-sessions and first-lead dates earlier (not simulated).

## Reproduce
Script: `/private/tmp/claude-501/-Users-heyrcg/Documents/Works/55e16704-2876-46bc-9fe6-d8f8b62ddfca/scratchpad/sim.py`

## Audit detail — 2026-10-29 live run (staging proxy)

Commands:

```bash
seomator audit https://projectx-gold.vercel.app --crawl -m 20 --format llm --no-cwv
seomator audit https://projectx-gold.vercel.app --format llm   # single-page + CWV render
```

Results:
- Crawl (5 pages): **98/100 (A)** — `1621 passed / 88 warnings / 1 fail / 155 not measured`.
- Single-page + CWV (home): **98/100 (A)** — `293 passed / 11 warnings / 0 fail / 69 not measured`.
- Weakest categories: `eeat 92`, `i18n 92`, `perf 94`, `social 94`, `content 95`, `geo 95`.
- Only critical: `content-text-html-ratio` on `/how-we-work` — `7.4%` text (4826 B text / 64835 B HTML); sitewide `11.5%`.
- Top warnings: `crawl-sitemap-orphan-urls` (5/10 URLs, all `/id/*`), `crawl-canonical-form-drift`, `i18n-hreflang-return-links` (no self-ref on 4/4 subpages), `geo-schema-drift` (`description`), `crawl-sitemap-lastmod` (0/10), `links-chrome-inbound` (`/` + `/about` nav/footer only), `eeat-author-byline`, `eeat-citations`, `social-profiles`, `perf-font-loading`, `perf-lcp-hints` (video poster), `perf-http2` (info only).
- CWV/full-render adds no new failures; `cwv-*`, `js-*`, `mobile-parity-*` mostly unmeasured under `--no-cwv` (weight 0, not scoring).
- Source notes: `astro.config.mjs:8-12` site follows `VERCEL_PROJECT_PRODUCTION_URL`; `public/robots.txt:4` + `public/llms.txt:7-11` hardcode `projectx-gold.vercel.app` (must change on real domain); canonical + hreflang emitted in `src/layouts/Layout.astro:109-110` but audit shows self-ref/trailing-slash drift; `/id/*` are ~55B stubs reusing EN components via `src/middleware.ts:37-41`.

## If-live day estimates (new domain, zero history, GSC submitted Day 0)

| Goal | Days |
|---|---|
| Technical health ≥90 on real domain | `1` (re-audit after domain swap) |
| All 10 URLs indexed | `3–7` with GSC; `7–14` without |
| Brand query (NewCo + Indonesia) ranks | `7–21` (bare "NewCo" unownable short-term) |
| ID long-tail ranks | `30–60` |
| EN long-tail ranks | `60–90` |
| First qualified organic `/contact` lead | `60–120` |
| Competitive head terms / steady pipeline | `180+`, likely never on current 5-page IA |
## Live Audit Detail — 2026-10-29 (appended)

**Target:** `https://projectx-gold.vercel.app/` (5 pages crawled, `--crawl -m 20 --no-cwv`)

### Scorecard
- **Overall:** 98/100 (Grade A)
- **Passed:** 1,622 rules
- **Warnings:** 87 rules
- **Critical Failures:** 1 rule
- **Not Measured:** 155 rules (CWV, JS rendering, mobile parity — skipped via `--no-cwv`)

### Category Breakdown
| Category | Score | Passed | Warnings | Failures | Not Measured |
|----------|-------|--------|----------|----------|--------------|
| core | 100 | 119 | 1 | 0 | 0 |
| technical | 100 | 90 | 0 | 0 | 0 |
| perf | 94 | 89 | 11 | 0 | 40 |
| links | 98 | 128 | 7 | 0 | 0 |
| images | 97 | 66 | 4 | 0 | 0 |
| security | 99 | 125 | 5 | 0 | 0 |
| crawl | 97 | 175 | 15 | 0 | 0 |
| schema | 100 | 95 | 0 | 0 | 0 |
| a11y | 99 | 173 | 2 | 0 | 5 |
| content | 95 | 121 | 13 | 1 | 0 |
| social | 94 | 40 | 5 | 0 | 0 |
| eeat | 92 | 65 | 10 | 0 | 5 |
| url | 98 | 68 | 2 | 0 | 0 |
| mobile | 100 | 35 | 0 | 0 | 25 |
| i18n | 92 | 57 | 8 | 0 | 0 |
| legal | 100 | 5 | 0 | 0 | 0 |
| js | 100 | 15 | 0 | 0 | 65 |
| redirect | 100 | 40 | 0 | 0 | 15 |
| htmlval | 100 | 55 | 0 | 0 | 0 |
| geo | 95 | 61 | 4 | 0 | 0 |

### Critical Issue (1)
| Rule | Page | Detail | Fix |
|------|------|--------|-----|
| `content-text-html-ratio` | `/how-we-work` | 7.4% text-to-HTML (4,826 text / 64,835 HTML bytes) | Reduce markup/scripts; extract to components |

### Top Warnings by Impact
| Category | Rule | Pages Affected | Summary |
|----------|------|----------------|---------|
| crawl | `crawl-sitemap-orphan-urls` | 5/5 | 5/10 sitemap URLs (all `/id/*`) have no internal links |
| crawl | `crawl-canonical-form-drift` | 5/5 | Canonicals mix trailing-slash and non-trailing-slash forms |
| i18n | `i18n-hreflang-return-links` | 4/4 | No self-referencing hreflang on subpages |
| geo | `geo-schema-drift` | 4/4 | `description` in JSON-LD doesn't match visible content |
| crawl | `crawl-sitemap-lastmod` | 5/5 | 0/10 sitemap entries have `<lastmod>` |
| links | `links-chrome-inbound` | 2/2 | `/` and `/about` only linked from nav/header/footer |
| eeat | `eeat-author-byline` | 5/5 | No author bylines on any page |
| eeat | `eeat-citations` | 5/5 | 0/3 external links to authoritative sources |
| social | `social-profiles` | 4/4 | No social profile links in header/footer |
| perf | `perf-font-loading` | 5/5 | 2 Google Fonts URLs missing `display=swap` |
| perf | `perf-lcp-hints` | 1/1 | Homepage video poster lacks preload/fetchpriority |
| images | `images-lazy-loading` | 1/1 | 1 below-fold image missing `loading="lazy"` |
| images | `images-modern-format` | 1/1 | 2 PNGs not converted to WebP/AVIF |
| images | `images-responsive` | 1/1 | No `srcset`/responsive images on `/about` |
| images | `images-size` | 1/1 | 2 potentially oversized images (>200KB) |
| url | `url-stop-words` | 2/2 | `/how-we-work` (67% stop words), `/about` (100%) |
| security | `security-sri` | 5/5 | Google Fonts stylesheet missing integrity hash |
| content | `content-reading-level` | 4/4 | College-level reading difficulty (score 9.7–44.7) |
| content | `content-article-links` | 2/2 | Link density 0.18/100 words (min 0.5) |

### Time to "Zero Warnings" Goal
| Work Stream | Est. Days (1 dev) | Parallelizable? |
|-------------|-------------------|-----------------|
| Content/HTML ratio (`/how-we-work`) | 1–2 | No |
| Image optimization (lazy, WebP, srcset, compress) | 1 | Yes |
| Fonts + LCP preload | 0.5 | Yes |
| Canonical + sitemap + hreflang | 0.5 | Yes |
| E-E-A-T (authors, citations) | 0.5 | Yes |
| Security (SRI) | 0.25 | Yes |
| Social profiles | 0.25 | Yes |
| URL slugs + redirects | 0.25 | Yes |
| Reading level / headings / link density | 0.5 | No |
| Re-audit verification | 0.5 | — |
| **Total (sequential)** | **~5–6 days** | — |
| **Total (2 devs parallel)** | **~3 days** | — |

### Not Measured (Requires Browser Render)
Run **without `--no-cwv`** to measure 155 additional rules:
- Core Web Vitals: `cwv-lcp`, `cwv-cls`, `cwv-fcp`, `cwv-ttfb`, `cwv-inp`
- JS Rendering: `js-console-errors`, `js-failed-requests`, `js-canonical-mismatch`, `js-rendered-*`
- Mobile Parity: `mobile-parity-canonical`, `mobile-parity-content`, `mobile-parity-links`, `mobile-parity-structured-data`, `mobile-parity-title`

If CWV/mobile parity are required for "goal", add **~1 day** for full re-audit + potential fixes.

### Config Notes
- `seomator.toml` has `domains = [ ]` — must set real domain before production run
- `astro.config.mjs` uses `VERCEL_PROJECT_PRODUCTION_URL` for site URL
- `public/robots.txt` and `public/llms.txt` hardcode `projectx-gold.vercel.app`
- Canonical + hreflang emitted in `src/layouts/Layout.astro:109-110`
- `/id/*` pages are ~55B stubs reusing EN components via `src/middleware.ts:37-41`
- Header language switcher (`Header.astro:37-46`) is client-side only — no server-rendered hreflang for ID

Bottleneck is demand coverage, not technical health: 5 routes, `551–849` words/page, link density `0.18/100w` on `/how-we-work`, no blog/resources, no backlinks, generic brand.

## Launch blockers (1–2 dev days, before DNS)
- [ ] Update `robots.txt` Sitemap host + `llms.txt` URLs; verify `Astro.site` = real domain; re-run `seomator audit --crawl -m 20 --format llm`.
- [ ] Fix hreflang self-ref + single trailing-slash canonical form (`Layout.astro:26,109-110` + `middleware.ts:37-41`).
- [ ] Link `/id/*` server-side (header `Header.astro:37-46` switcher is client-side); add sitemap `lastmod`; align `Organization.description` with visible copy.
- [ ] Add body-copy internal links to `/` + `/about`; fix `about` duplicate `linkedin` anchors; add real social profiles + `sameAs`.
- [ ] 301 `projectx-gold.vercel.app` → real domain; submit GSC + sitemap Day 0.
