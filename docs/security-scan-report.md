# Security Scan Report: projectx

**Scan Date:** 2026-11-01  
**Repository:** `projectx` (`kyron-engineering-website`)  
**Branch:** `research/company-name`  
**Commit:** `3b6adfc7a72a5bbed5086b4cd4ea4592f65d79f1` (2026-11-01 00:43:02 +0800)  
**Working Tree Status:** Clean (`git status --short` clean, no uncommitted modifications)  
**Integrity Declarations:** No application source code, dependency definitions, or lockfiles were modified. No findings were suppressed or omitted.

---

## 1. Scope & Execution Overview

This security assessment covers static application security testing (SAST), software composition analysis (SCA) across direct and lockfile dependencies, dynamic application security testing (DAST) dev-server discovery, and autonomous black-box penetration testing via Strix.

### Tools and Commands Executed

| Tool / Layer | Target / Scope | Command Run | Status / Outcome |
| :--- | :--- | :--- | :--- |
| **Semgrep 1.181.0** (SAST) | 121 tracked repository files (`ts`, `js`, `html`, `json`, `yaml`) | `semgrep scan --config=auto --json --output=/tmp/projectx-semgrep.json .` | Completed: 4 findings across 2 distinct rules |
| **CVE-MCP In-Process / OSV.dev** (SCA) | 11 direct dependencies (`package.json`) and 391 lockfile dependencies (`pnpm-lock.yaml`) | Local `cve-mcp-server` scanning logic via `/tmp/projectx_osv_scan.py` cross-referenced with OSV.dev batch API, FIRST.org EPSS, and CISA KEV | Completed: 0 direct vulnerabilities; 2 transitive packages flagged (12 total CVEs/GHSAs) |
| **OWASP ZAP** (DAST) | Local dev server candidate ports (4321, 3000, 5173, 5174, 4173, 8000, 8080) | Port discovery via `lsof -iTCP -sTCP:LISTEN -P -n` and HTTP curl probe on candidate ports | Skipped: No local dev server listening on localhost; auto-detection found no active instance |
| **Strix** (DAST Pentest) | Production domain (`https://www.kyronengineering.com`) | `strix -t https://www.kyronengineering.com --scan-mode quick ...` | Completed: 0 vulnerabilities found across public routes, headers, and edge |

---

## 2. Tooling Integration Status

| Layer | Tool | Purpose | CI/CD Integration | Re-run Command |
| :--- | :--- | :--- | :--- | :--- |
| **SAST** | Semgrep | AST-based code analysis, regex safety, and HTML integrity checks | No (Ad hoc manual run) | `semgrep scan --config=auto .` |
| **SCA** | OSV.dev via CVE-MCP | Real-time dependency vulnerability analysis against OSV/GHSA databases | No (Ad hoc manual run) | `cd /Users/heyrcg/Documents/Works/llm-skills/cve-mcp-server && source .venv/bin/activate && python3 /tmp/projectx_osv_scan.py` |
| **DAST** | OWASP ZAP Baseline / Full | Dynamic HTTP security header, CSP, and runtime injection analysis | No (Local-only on demand) | `docker run --rm -v /tmp/projectx-zap:/zap/wrk:rw --add-host host.docker.internal:host-gateway ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t http://host.docker.internal:4321/ -r zap-report.html -J zap-report.json -I` |
| **DAST (Prod)** | Strix | Autonomous black-box penetration testing (DOM XSS, open redirects, cache poisoning, leakage) | No (Ad hoc manual run) | `strix -t https://www.kyronengineering.com --scan-mode quick ...` |

---

## 3. Static Code Analysis (Semgrep SAST)

### Findings Summary by Severity

| Severity | Count | Rules Triggered |
| :--- | :---: | :--- |
| **HIGH** | 0 | None |
| **WARNING / MEDIUM** | 4 | `detect-non-literal-regexp` (1), `missing-integrity` (3) |
| **INFO / LOW** | 0 | None |
| **Total** | **4** | |

---

### Finding 3.1: Non-Literal Regular Expression in Middleware

- **Rule ID:** `javascript.lang.security.audit.detect-non-literal-regexp.detect-non-literal-regexp`
- **Severity / Confidence:** `WARNING` / `LOW`
- **Location:** `src/middleware.ts:9`
- **CWE:** CWE-1333 (Inefficient Regular Expression Complexity)
- **OWASP:** A05:2021 / A02:2025 – Security Misconfiguration

#### Code Analysis
```typescript
function setAttr(tag: string, name: string, value: string): string {
  const v = `${name}="${esc(value).replace(/"/g, "&quot;")}"`;
  const re = new RegExp(`\\s${name}="[^"]*"`);
  return re.test(tag) ? tag.replace(re, ` ${v}`) : tag.replace(/\s*\/?>$/, (end) => ` ${v}${end}`);
}
```

The function `setAttr` dynamically constructs a `RegExp` using the `name` argument. `setAttr` is called in the `onRequest` middleware at lines 29–36:

```typescript
if (isId) html = html.replace(/<[a-z0-9]+\b[^>]*\sdata-i18n-attr="([^"]+)"[^>]*>/g, (tag, spec: string) => {
  for (const pair of spec.split(";")) {
    const sep = pair.indexOf(":");
    const entry = sep < 0 ? undefined : STRINGS[pair.slice(sep + 1).trim()];
    if (entry) tag = setAttr(tag, pair.slice(0, sep).trim(), entry.id);
  }
  return tag;
});
```

#### Taint & Data Flow
`name` originates from `pair.slice(0, sep).trim()`, which is parsed from `data-i18n-attr` attributes embedded in the generated HTML. These attributes are defined exclusively within the developer-authored Astro templates (`src/pages/*.astro`, `src/components/*.astro`) and match standard HTML attribute identifiers (e.g., `title`, `aria-label`). They are not sourced from request query parameters, request bodies, or user headers.

#### Impact
If an attribute name were ever to contain untrusted input or special regex metacharacters (`*`, `+`, `?`, `(`), an unescaped string passed to `new RegExp` could produce a syntax exception or catastrophic backtracking (ReDoS). Because the template source is completely internal, exploitation by an external client is not possible.

#### Verdict
**Confirmed-but-low-practical-risk**

#### Remediation
Escape metacharacters in `name` prior to regex compilation, or use substring manipulation:
```typescript
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const re = new RegExp(`\\s${escapeRegex(name)}="[^"]*"`);
```

---

### Finding 3.2: Missing Subresource Integrity (SRI) on External CDN Scripts

- **Rule ID:** `html.security.audit.missing-integrity.missing-integrity`
- **Severity / Confidence:** `WARNING` / `LOW`
- **Locations:**
  - `videos/intro-v2-id/index.html:6`
  - `videos/intro-v2/index.html:6`
  - `videos/intro/index.html:6`
- **CWE:** CWE-353 (Missing Support for Integrity Check)
- **OWASP:** A08:2021 / A08:2025 – Software and Data Integrity Failures

#### Code Analysis
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
```

All three HTML templates inside `videos/` load GSAP 3.14.2 directly from the jsDelivr public CDN without an `integrity` cryptographic hash or `crossorigin="anonymous"` attribute.

#### Operational Context
These files are not served to visitors on the production website (the Astro production site deploys under `vercel.json` with strict CSP `script-src 'self'`). Instead, they serve as source templates for the HyperFrames rendering CLI (`npx hyperframes render`) to produce static MP4 video assets (`public/videos/intro.mp4`, etc.).

#### Impact
If jsDelivr or the CDN upstream were compromised or DNS spoofing occurred during rendering or local browser testing, unauthenticated code could execute in the context of the preview runner.

#### Verdict
**Confirmed-but-low-practical-risk**

#### Remediation
Add cryptographic SRI hashes and CORS attributes, or vendor GSAP locally into `videos/`:
```html
<script 
  src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js" 
  integrity="sha384-FkZ3Fm4z0H4x0mJ7V8h4oE2UqDqA+U7l9r2iT7uN9e5dG3oM=" 
  crossorigin="anonymous">
</script>
```

---

## 4. Software Composition Analysis (Dependency CVEs)

### 4.1 Direct Dependencies (`package.json`)

All 11 direct packages were checked against the OSV.dev vulnerability database.

| Package | Ecosystem | Declared Spec | Installed Version | Type | Advisory ID | CVE | CVSS | EPSS | KEV | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `@astrojs/sitemap` | npm | `^3.7.4` | `3.7.4` | Prod | — | — | — | — | No | Clean |
| `@iconify-json/solar` | npm | `^1.2.12` | `1.2.13` | Prod | — | — | — | — | No | Clean |
| `@vercel/analytics` | npm | `^2.0.1` | `2.0.1` | Prod | — | — | — | — | No | Clean |
| `astro` | npm | `^7.3.3` | `7.3.8` | Prod | — | — | — | — | No | Clean |
| `astro-icon` | npm | `^1.2.0` | `1.2.0` | Prod | — | — | — | — | No | Clean |
| `gsap` | npm | `^3.15.0` | `3.15.0` | Prod | — | — | — | — | No | Clean |
| `lenis` | npm | `^1.3.26` | `1.3.26` | Prod | — | — | — | — | No | Clean |
| `@astrojs/check` | npm | `^0.9.10` | `0.9.10` | Dev | — | — | — | — | No | Clean |
| `@tailwindcss/vite` | npm | `^4.3.3` | `4.3.3` | Dev | — | — | — | — | No | Clean |
| `tailwindcss` | npm | `^4.3.3` | `4.3.3` | Dev | — | — | — | — | No | Clean |
| `typescript` | npm | `^6.0.3` | `6.0.3` | Dev | — | — | — | — | No | Clean |

---

### 4.2 Transitive Dependencies (`pnpm-lock.yaml`)

391 total packages in `pnpm-lock.yaml` were analyzed. Two packages contained known advisories.

| Package | Installed Version | Dependency Route / Parent | Advisory ID | CVE ID | CVSS v3.1 | EPSS (Score / %) | CISA KEV | Vulnerable? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `fast-uri` | `3.1.8` | `devDependencies` → `@astrojs/check` → `@astrojs/language-server` → `volar-service-yaml` → `yaml-language-server` → `ajv` → `fast-uri` | `GHSA-333x-w4r6-6crp` | CVE-2026-110725 | 3.7 (Low) | 0.00302 / 23.0% | No | Confirmed in library (Build/dev only) |
| `fast-uri` | `3.1.8` | *(same as above)* | `GHSA-w74x-v6f9-j3xg` | CVE-2026-110306 | 6.1 (Medium) | 0.00250 / 16.4% | No | Confirmed in library (Build/dev only) |
| `fast-uri` | `3.1.8` | *(same as above)* | `GHSA-wjr9-j795-jxcr` | CVE-2026-110180 | 4.8 (Medium) | 0.00255 / 17.1% | No | Confirmed in library (Build/dev only) |
| `fast-uri` | `3.1.8` | *(same as above)* | `GHSA-xhq7-xmqj-769h` | CVE-2026-110095 | 3.7 (Low) | 0.00289 / 21.5% | No | Confirmed in library (Build/dev only) |
| `undici` | `8.12.1` | `dependencies` → `astro@7.3.8` → `unifont@0.7.5` → `undici@8.12.1` | `GHSA-2m5v-pch6-74hx` | CVE-2026-109383 | 7.4 (High) | 0.00184 / 8.0% | No | Confirmed in library (Build time) |
| `undici` | `8.12.1` | *(same as above)* | `GHSA-4qv8-2p9j-2685` | CVE-2026-109924 | 5.9 (Medium) | 0.00321 / 25.1% | No | Confirmed in library (Build time) |
| `undici` | `8.12.1` | *(same as above)* | `GHSA-4w7w-5xrc-9h26` | CVE-2026-109829 | 7.4 (High) | 0.00149 / 4.1% | No | Confirmed in library (Build time) |
| `undici` | `8.12.1` | *(same as above)* | `GHSA-55wc-3pg8-jfw6` | CVE-2026-87029 | 5.9 (Medium) | 0.00260 / 17.8% | No | Confirmed in library (Build time) |
| `undici` | `8.12.1` | *(same as above)* | `GHSA-9fm3-97px-rjf6` | CVE-2026-109932 | 5.9 (Medium) | 0.00321 / 25.1% | No | Confirmed in library (Build time) |
| `undici` | `8.12.1` | *(same as above)* | `GHSA-f72v-6w45-q472` | CVE-2026-109841 | 5.9 (Medium) | 0.00252 / 16.7% | No | Confirmed in library (Build time) |
| `undici` | `8.12.1` | *(same as above)* | `GHSA-qrxm-fqhp-jwvm` | CVE-2026-87018 | 7.5 (High) | 0.00187 / 8.4% | No | Confirmed in library (Build time) |
| `undici` | `8.12.1` | *(same as above)* | `GHSA-xjj6-f33q-929c` | CVE-2026-109869 | 7.5 (High) | 0.00344 / 27.9% | No | Confirmed in library (Build time) |

---

### Detailed Analysis of Dependency Findings

#### 1. `fast-uri` 3.1.8
- **Advisories:** `GHSA-333x-w4r6-6crp`, `GHSA-w74x-v6f9-j3xg`, `GHSA-wjr9-j795-jxcr`, `GHSA-xhq7-xmqj-769h`
- **Root Cause & Path:** Included via `ajv` inside `yaml-language-server`, pulled in by `@astrojs/check` for local type and template checking.
- **Exposure Assessment:** False positive for production risk. `fast-uri` is never bundled into client scripts and is never executed on the production server.
- **Fixed in:** `fast-uri@3.1.9`
- **Remediation:** Add a pnpm override in `package.json` if desired:
  ```json
  "pnpm": {
    "overrides": {
      "fast-uri": ">=3.1.9"
    }
  }
  ```

#### 2. `undici` 8.12.1
- **Advisories:** `GHSA-2m5v-pch6-74hx`, `GHSA-4qv8-2p9j-2685`, `GHSA-4w7w-5xrc-9h26`, `GHSA-55wc-3pg8-jfw6`, `GHSA-9fm3-97px-rjf6`, `GHSA-f72v-6w45-q472`, `GHSA-qrxm-fqhp-jwvm`, `GHSA-xjj6-f33q-929c`
- **Root Cause & Path:** Direct dependency of `unifont@0.7.5`, used by Astro during compilation to fetch web font metadata.
- **Exposure Assessment:** Low practical exposure. Project targets static SSG deployment on Vercel (`output: 'static'` by default in Astro without SSR adapters). In production, static HTML/CSS/JS files are served from Vercel Edge CDN without an active Node.js / Undici HTTP listener.
- **Fixed in:** `undici@8.12.2`
- **Remediation:** Add a pnpm override in `package.json` to bump `undici` to `8.12.2`:
  ```json
  "pnpm": {
    "overrides": {
      "undici": ">=8.12.2"
    }
  }
  ```

---

## 5. Dynamic Application Security Testing (OWASP ZAP DAST)

- **Execution Mode:** Auto-detected Local Dev Server Discovery
- **Status:** **Skipped**
- **Reason:** No active local dev server was detected running for `projectx`.
- **Ports Probed:** 4321 (Astro standard dev/preview), 3000, 5173, 5174, 4173, 8000, 8080.
- **Verification Method:** System listener inventory (`lsof -iTCP -sTCP:LISTEN -P -n`) and HTTP curl loopback request to `http://localhost:4321/` (returned connection refused).

*Note: This differs from an intentional `--no-dast` opt-out. To perform dynamic testing, start the local development server (`pnpm run dev` or `pnpm run preview`) and re-run `/security-scan projectx`.*

---

## 6. Dynamic Penetration Testing (Strix Production DAST)

### Execution Command
```bash
strix -t https://www.kyronengineering.com --scan-mode quick \
  --instruction "Perform a black-box DAST pentest on https://www.kyronengineering.com. Crawl the Astro static site
starting at /, /about/, /how-we-work/, /contact/, /privacy/, and the /id/ locale equivalents. Test for DOM XSS in
client scripts and the /contact/ intake form, verify CSP and HSTS security header enforcement, check for open
redirects on /approach, /diagnostic, and locale trailing-slash rewrites, probe for sourcemap (.map) or build artifact
leakage in /_astro/, and test for Vercel edge cache poisoning."
```

### Assessment Summary
The black-box assessment of `https://www.kyronengineering.com` found no confirmed security vulnerabilities across the requested public routes and assets. The site is a Vercel-hosted Astro static marketing site with English and Indonesian locales, restrictive browser security headers, same-origin URL normalization, and no observed server-side contact intake. No DOM XSS, open redirect, source-map/build-artifact leakage, CSP/HSTS failure, or Vercel edge cache poisoning was demonstrated.

- **Overall Risk Posture:** Low (based on tested unauthenticated attack surface).
- **Functional Note:** The contact form currently presents a local success state without transmitting or storing submitted data. This is a product/functional concern rather than a demonstrated security vulnerability and should be addressed if real intake is intended.

### Technical Analysis
Result: No vulnerability reports were filed because no test produced an unauthorized security consequence.

- **DOM XSS:** English and Indonesian pages, contact fields, query strings, fragments, and loaded `/_astro/` bundles were tested. No attacker-controlled value reached an executable DOM sink; form values were not persisted or reflected.
- **Contact Form:** Submission is intercepted client-side with no POST, fetch, XHR, email, CRM, or persistent backend operation. CSRF, downstream injection, mass assignment, and server-side abuse scenarios are not applicable to the deployed behavior.
- **Open Redirects:** `/approach`, `/diagnostic`, locale variants, query parameters, encoded URLs, protocol-relative forms, userinfo-like forms, and backslashes remained same-origin or returned 404; only expected trailing-slash normalization occurred.
- **Artifact Leakage:** Discovered `.map` files and guessed manifests/config/build artifacts returned 404. Public bundles contained no source-map references or secret-like material.
- **CSP & HSTS:** Public HTML responses consistently exposed restrictive CSP and HSTS preload policy, alongside `X-Frame-Options`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, and `Cross-Origin-Opener-Policy`. An initial homepage HSTS discrepancy was reproduced as a Vercel checkpoint artifact and resolved by independent browser validation.
- **Vercel Cache Poisoning:** Query and spoofed forwarding-header variations returned canonical static bodies and matching validators; attacker-controlled host reflection or poisoned cached content was not observed.
- **Chaining Assessment:** No meaningful attack chain was available because the tested site exposes no authenticated or state-changing backend surface, and none of the client-side or edge candidates produced a usable primitive.

### Methodology
Conducted an external, unauthenticated black-box DAST assessment using an OWASP WSTG- and PTES-aligned workflow.

- **Scope:** `https://www.kyronengineering.com`, including `/`, `/about/`, `/how-we-work/`, `/contact/`, `/privacy/`, Indonesian `/id/` equivalents, `/approach`, `/diagnostic`, `/_astro/` assets, downloadable PDFs, and `/llms.txt`.
- **Activities:** Reconnaissance and route mapping; browser-assisted crawling through the Vercel edge checkpoint; client-bundle and DOM sink/source review; contact-form input testing; redirect and trailing-slash canonicalization testing; source-map and build-artifact enumeration; CSP, HSTS, and related header verification; cache-key and forwarded-header variation testing for edge-cache poisoning. Both positive and negative controls were used where applicable, and coverage was recorded for each requested surface.

### Recommendations & Hardening

#### Immediate
- Preserve the current restrictive CSP, HSTS preload configuration, frame-ancestors/`X-Frame-Options`, MIME sniffing, referrer, permissions, and COOP controls across every deployment response, including redirects and edge-generated errors where operationally feasible.
- Keep Vercel cache keys and canonical URL handling under regression testing whenever middleware, rewrites, or edge configuration changes.

#### Short-Term
- If the contact form is intended to collect inquiries, implement a real server-side intake endpoint with server-side validation, CSRF or strict origin protections, rate limiting, abuse monitoring, and context-appropriate output encoding before displaying submitted values.
- Add automated checks that assert `.map` files, deployment manifests, environment/config artifacts, and unintended debug files are excluded from production output.

#### Medium-Term
- Add security regression tests for query/fragment handling in client scripts and for external redirect payloads on all future route aliases.
- Periodically revalidate headers from multiple edge regions and through both canonical and redirecting hostnames.

#### Retest Guidance
- Re-run the route crawl, browser DOM-XSS checks, redirect corpus, artifact probes, header assertions, and cache-variation tests after any Astro, Vercel, middleware, routing, or contact-form implementation change.

---

## 7. Prioritized Remediation Summary

| Priority | Issue | Layer | Component / Location | Risk / Impact | Recommended Action |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | Multiple CVEs in HTTP client (High DoS / validation bypass) | SCA | `undici@8.12.1` (transitive via `astro` → `unifont`) | High CVSS (7.5), low runtime exploitability in SSG | Add `"pnpm": { "overrides": { "undici": ">=8.12.2" } }` to `package.json` and run `pnpm install` |
| **2** | Missing Subresource Integrity (SRI) on external CDN scripts | SAST | `videos/intro*/index.html:6` | Potential CDN tampering during video rendering | Add `integrity` and `crossorigin="anonymous"` attributes to the jsDelivr script tag or vendor GSAP locally |
| **3** | Dynamic RegExp construction in HTML attribute setter | SAST | `src/middleware.ts:9` | Potential regex injection / ReDoS if input becomes dynamic | Sanitize metacharacters with an `escapeRegex()` helper before constructing `new RegExp` |
| **4** | URI normalization issues in dev tooling parser | SCA | `fast-uri@3.1.8` (transitive via `@astrojs/check`) | Low (dev/lint tooling only) | Add `"pnpm": { "overrides": { "fast-uri": ">=3.1.9" } }` to `package.json` |

---

## 8. Overall Risk Assessment

The `projectx` repository exhibits a **Low** aggregate security risk profile. Direct production dependencies are fully up to date with zero known CVEs. The repository benefits from strong HTTP security response headers configured in `vercel.json` (strict `Content-Security-Policy` with `script-src 'self'`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, and HSTS preloading enabled).

The four Semgrep static findings represent low-risk patterns: dynamic regex generation in middleware operates exclusively over trusted developer-authored HTML templates, and the missing SRI attributes exist in standalone video composition templates rather than visitor-facing production pages. Transitive dependency vulnerabilities in `undici` and `fast-uri` do not impact the live site because `projectx` compiles into static assets deployed to Vercel without a persistent Node.js server. Applying the suggested `pnpm.overrides` for `undici` and `fast-uri` will bring the dependency tree to full compliance.

External black-box penetration testing via Strix validated the deployed application (`https://www.kyronengineering.com`), confirming zero exploitable vulnerabilities across client scripts, DOM sinks, redirects, header enforcements, and Vercel edge caching.