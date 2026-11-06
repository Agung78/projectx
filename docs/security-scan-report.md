# Security scan report — projectx

## 1. Header

| Field | Value |
|---|---|
| Scan date | 2026-11-06 |
| Repo | projectx (`/Users/heyrcg/Documents/Works/projectx`) |
| Branch | main |
| Commit | `079a6bb2e37e6d05c1fc48bfdf7efa27045067bc` (2026-11-06 10:07:34 +0800) |
| Working tree | One untracked path not in the commit: `videos/product-launch/`. Scan reflects working-tree state, not just the pinned commit. |

**Tools and commands run**

- SAST — Semgrep (v1.181.0), config `auto`:
  `semgrep scan --config=auto --json --output=/tmp/projectx-semgrep.json .`
  run from the repo root. Raw JSON preserved at `/tmp/projectx-semgrep.json`.
- SCA — OSV.dev via the local `cve-mcp-server` repo's own scanning code, run in-process (MCP transport not connected this session):
  `cd ~/Documents/Works/llm-skills/cve-mcp-server && source .venv/bin/activate && python3 /tmp/projectx-osv-scan.py`
  which calls `cve_mcp.api.dependency_scan.scan_dependencies_bulk` against the OSV.dev batch API. Raw output preserved at `/tmp/projectx-cve-mcp.json`.
- DAST — OWASP ZAP: **not run** (see §5); no local dev server was detected.

**Scope**

- Semgrep: 156 git-tracked files, 515 rules (~100% parsed lines; 12 files >1 MB and 6 .semgrepignore-matched files skipped).
- SCA: root `package.json` + `pnpm-lock.yaml` (pnpm v10.30.3). 13 npm packages; versions resolved from the actually-installed tree (`node_modules/<pkg>/package.json` via pnpm symlinks into `.pnpm`), not declared semver ranges. The `videos/*/package.json` files declare no dependencies (npx hyperframes only, no `node_modules`) and are out of scope.
- DAST: candidate ports from `package.json` dev script (`astro dev`, default 3000) plus common defaults 5173–5174, 4173, 8000, 8080, 4321.

**Statement**: no application source code, dependencies, lockfiles, or config were modified to fix or hide any finding. No findings were suppressed or omitted.

## 2. Tooling integration

| Layer | Tool | What it checks | Wired into this repo's CI/CD? | Command to re-run |
|---|---|---|---|---|
| SAST | Semgrep (`semgrep scan --config=auto`) | Semgrep Pro + community rules across 11 languages | No — ad hoc local run only | `semgrep scan --config=auto --json --output=/tmp/projectx-semgrep.json .` |
| SCA | OSV.dev via `cve-mcp-server` `scan_dependencies_bulk` (in-process, MCP not connected) | Installed package versions vs OSV.dev advisory database | No — ad hoc local run only | `cd <cve-mcp-server-repo> && source .venv/bin/activate && python3 <scratchpad>.py` |
| DAST | OWASP ZAP baseline / full | Running dev server (passive baseline or active injection) | No — local-only by design, never automated, never wired into CI/CD | `docker run --rm -v /tmp/<repo>-zap:/zap/wrk:rw --add-host host.docker.internal:host-gateway ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t <url> ...` |

## 3. Semgrep static analysis

**Summary by severity**: 0 findings across all severities (error / warning / info / unspecified).

- Rules run: 515
- Targets scanned: 156 files
- Findings: 0 (0 blocking)

No rule fired, so there are no per-rule subsections, no file:line hits, and no true/false-positive assessments to make. The three `javascript.vulnerable-components.mise-brotli.mise-brotli` include-pattern warnings in the scan output are Semgrep rule-format deprecation notices, not findings.

## 4. Dependency CVE scan (OSV.dev via cve-mcp-server)

cve-mcp MCP server is **not** connected this session; the local `cve-mcp-server` repo (`~/Documents/Works/llm-skills/cve-mcp-server`) was used directly in-process per the skill fallback. OSV.dev API reachability confirmed with a spot query (`astro@7.3.8` → `{}`).

Table: root `package.json` / `pnpm-lock.yaml` (ecosystem: npm). "Vulnerable" = advisory returned by OSV.dev for the installed version.

| Package | Declared | Installed | Advisory id | CVE | CVSS | EPSS | KEV | Vulnerable? |
|---|---|---|---|---|---|---|---|---|
| @astrojs/sitemap | ^3.7.4 | 3.7.4 | — | — | — | — | — | n |
| @astrojs/vercel | ^11.0.17 | 11.0.17 | — | — | — | — | — | n |
| @iconify-json/solar | ^1.2.12 | 1.2.13 | — | — | — | — | — | n |
| @vercel/analytics | ^2.0.1 | 2.0.1 | — | — | — | — | — | n |
| astro | ^7.3.3 | 7.3.8 | — | — | — | — | — | n |
| astro-icon | ^1.2.0 | 1.2.0 | — | — | — | — | — | n |
| gsap | ^3.15.0 | 3.15.0 | — | — | — | — | — | n |
| lenis | ^1.3.26 | 1.3.26 | — | — | — | — | — | n |
| posthog-js | ^1.446.0 | 1.446.0 | — | — | — | — | — | n |
| @astrojs/check | ^0.9.10 | 0.9.10 | — | — | — | — | — | n |
| @tailwindcss/vite | ^4.3.3 | 4.3.3 | — | — | — | — | — | n |
| tailwindcss | ^4.3.3 | 4.3.3 | — | — | — | — | — | n |
| typescript | ^6.0.3 | 6.0.3 | — | — | — | — | — | n |

**Details**: no advisory IDs were returned for any installed package, so there are no details blocks, no CVSS/EPSS/KEV cross-references, and no ambiguous root-cause attributions to verify against the dependency tree. OSV.dev reported zero advisories for this package set.

## 5. DAST (OWASP ZAP)

**Skipped.** No `--dast`/`--dast-full`/`--no-dast` flag was passed, so auto-detection ran: candidate ports 3000, 5173, 5174, 4173, 8000, 8080, 4321 were checked with `curl` (HTTP status) and `lsof -i :<port> -P -n` (listening socket). None responded — every `curl` returned `000` (connection refused) and `lsof` showed no listener. With no projectx dev server actually running on localhost, there is nothing to scan; this is distinct from an explicit `--no-dast` opt-out. If you start `pnpm dev` (Astro on :3000 by default) and re-run `/security-scan projectx`, the detected server will receive a baseline (passive) ZAP scan by default.

Docker is available (`docker --version`: 29.7.2) and the repo has no `scripts/zap-baseline.sh` / `scripts/zap-full.sh` / `docker-compose.zap.yml` integration, so an ad hoc `zap-baseline.py`/`zap-full-scan.py` Docker run would be used once a target is running.

## 6. Prioritized remediation summary

No real findings were reported by Semgrep, OSV.dev/SCA, or DAST (not run). The remediation table is empty: nothing to prioritize across the three tools.

## 7. Overall risk assessment

Aggregate posture is clean for what was scanned: Semgrep found no rule violations across 156 tracked files, and OSV.dev has no recorded advisories for the 13 installed npm packages at their locked versions. Residual risk is limited to what this scan does not cover: no DAST was performed because no local dev server was running, so runtime exposure of the Astro frontend (headers, CSP, route handling) was not assessed; the `videos/*` directories are untracked and out of scope. Re-run with `pnpm dev` running on localhost to enable the default baseline ZAP scan if runtime coverage is desired.
