# NewCo Website — Standard Design System

> Design standard v2.0 · 2026-10-17  
> Source: Codebase implementation (`src/styles/global.css`, `src/pages/*`, `src/components/*`)  
> Direction: Operations-Log & Technical Blueprint

---

## 1. Design Intent

### Design thesis

NewCo is the calm, accountable engineering partner behind technology a client can eventually operate autonomously. The design is built as an **operations-log and technical blueprint**: precise, architectural, evidence-led, and human without becoming casual.

The visual language communicates:

- **Ownership:** systems, decisions, runbooks, and repositories belong to the client from day one.
- **Transfer:** the interface visibly tracks the staged shift from NewCo-led engineering toward independent client operation.
- **Evidence:** concrete metrics, handover checklists, and clear milestone readouts replace decorative agency claims.
- **Restraint:** cool paper surfaces, deep slate ink, structured mono markers, and a single cobalt blue signal meaning *client ownership*.

### Primary message

> **Technology built for independence.**

Supporting tagline and proof points:

> **We build · We teach · You own.**  
> *We engineer systems to a high standard, then transfer full ownership to the business: the code, the documentation and the know-how. No vendor lock-in. No hidden dependencies.*

### Experience goal

Within the first viewport, an executive or business owner understands:

1. NewCo designs, builds, operates, and transfers business systems with zero vendor lock-in.
2. Handover is an authored success metric planned from the first week, not an exit afterthought.
3. The entry point is a direct conversation with the founders (24-hour response SLA).

---

## 2. Art Direction

### Chosen direction: Operations-Log & Technical Blueprint

A disciplined technical identity built on cool paper surfaces, navy and slate ink, and architectural marks.

- **Backgrounds:** Clean white (`#FFFFFF`) with cool slate-tinted mist (`#F4F6FA`) for section pacing and technical panels.
- **Ink:** Deep navy (`#0F2A4A`) for display and headings; slate (`#1F2933`) for long-form body readability; neutral grey (`#5B6878`) for secondary captions and indices.
- **Signal:** Single cobalt blue (`#1D5FD1`) reserved strictly for action triggers, active milestones, and client ownership indicators.
- **Architectural Utility Markers:**
  - `.mono`: Bracketed uppercase monospace markers (`// INDEPENDENT SYSTEM ENGINEERING`, `// FIG. 01`, `// STEP 01`) indicating technical structure.
  - `.corners`: Hairline L-bracket corner marks (`::before` / `::after`) framing key diagrams and callouts.
  - `.grid-lines`: Subtle 32px hairline background grid for technical consoles.

### What was dropped

- The warm cream (`#F3F0E9`) and terracotta signal (`#B14D32`) from early drafts was dropped as a generic templated agency aesthetic.
- Feature bento grids and neon gradients.
- Generic stock photos of servers, handshakes, or robot visuals.
- Vague trust badges or unverified client logos.

---

## 3. Layout System

### Grid & Breakpoints

- Maximum content width: `1200px` (`--container-content`)
- Reading measure: `68ch` maximum for long-form prose (`--container-measure`)
- Desktop padding: `clamp(1rem, 5vw, 1.5rem)` (`px-4 md:px-6`)
- Breakpoints:
  - `sm`: `480px`
  - `md`: `768px`
  - `lg`: `1024px`

### Spacing scale

Built on a 4px base with clear architectural section rhythm:

| Token | Value | Use |
|---|---:|---|
| `--spacing-1` | 4px | Micro-spacing, inline gaps |
| `--spacing-2` | 8px | Compact badge and control spacing |
| `--spacing-3` | 12px | Label paddings, form gutters |
| `--spacing-4` | 16px | Card internals, mobile padding |
| `--spacing-6` | 24px | Grid gaps, paragraph margins |
| `--spacing-8` | 32px | Component clusters, small section gaps |
| `--spacing-12` | 48px | Card groups, medium section padding |
| `--spacing-16` | 64px | Standard section top/bottom padding |
| `--spacing-24` | 96px | Major desktop editorial transitions |
| `--spacing-32` | 128px | Hero and page-level major transitions |

---

## 4. Colour System

Defined as design tokens in `@theme` within `src/styles/global.css`:

| Token | Value | Role |
|---|---|---|
| `--color-white` | `#FFFFFF` | Primary canvas, cards, inverted text |
| `--color-mist` | `#F4F6FA` | Cool paper alternating section surface |
| `--color-navy` | `#0F2A4A` | Display headings, dark section background, borders |
| `--color-slate` | `#1F2933` | Primary body text and readable copy |
| `--color-grey` | `#5B6878` | Secondary labels, captions, metadata markers |
| `--color-blue` | `#1D5FD1` | Primary action button, active phase, client ownership line |
| `--color-blue-dark` | `#1548A6` | Button hover and high-contrast interaction state |
| `--color-line` | `#E2E8F0` | Structural borders, hairline rules, card frames |
| `--color-field` | `#8795A8` | Form field borders and input frames |
| `--color-green` | `#0E9F6E` | Positive status and validation success |
| `--color-red` | `#C2410C` | Form validation alerts and error states |

### Rules

1. Cobalt blue (`--color-blue`) is used strictly as a purposeful signal (interactive CTA, active phase, client ownership), never as a decorative wash.
2. The site features exactly one dark section on the home page (the `#discovery` section) and the global footer, anchoring the technical identity without turning into a dark-mode theme.
3. Contrast ratios meet or exceed WCAG AA across all text and interactive controls.

---

## 5. Typography

### Font stack

- **Primary Sans:** `"Plus Jakarta Sans", system-ui, -apple-system, sans-serif`  
  Loaded via Google Fonts (`400`, `600`) in `Layout.astro`.
- **Technical Monospace:** `ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`  
  Applied via `.mono` utility class (uppercase, `letter-spacing: 0.08em`, size `0.75rem`).

### Type scale tokens

| Role | Token / Size | Weight | Line height | Use |
|---|---|---:|---:|---|
| Display | `clamp(3.5rem, 8vw, 7.5rem)` | 600 | `1.02` | Hero display highlights |
| H1 | `clamp(2.125rem, 2.5vw + 1.35rem, 3.5rem)` | 600 | `1.15` | Page hero titles |
| H2 | `clamp(1.625rem, 1.25vw + 1.25rem, 2.25rem)` | 600 | `1.20` | Section headings |
| H3 | `1.5rem` | 600 | `1.25` | Card headings, table keys |
| Body large | `1.25rem` | 400 | `1.50` | Lead paragraphs, section introductions |
| Body | `1.125rem` | 400 | `1.60` | General descriptive copy |
| Label | `0.875rem` | 600 | `1.40` | Table headers, form labels |
| Mono utility | `0.75rem` | 600 | `1.40` | Bracketed section tags, stage indicators |
| Metric | `clamp(2.5rem, 5vw, 5rem)` | 600 | `1.05` | Large telemetry numbers |

---

## 6. Component Language

### Header (`Header.astro`)

- Fixed sticky navigation (`sticky top-0 z-50 bg-white`).
- Stuck-state transition: transparent border transitions to `border-line` via intersection observer (`data-site-header` / `data-[stuck=true]`).
- Brand wordmark: "NewCo" (`text-h3 font-semibold text-navy`).
- Desktop navigation links:
  - `How we work` (`/how-we-work`)
  - `About` (`/about`)
  - `Contact` (`/contact`)
- Active link indicator: 1px underline sliding from left (`nav-link[aria-current="page"]`).
- Mobile menu: Hamburger toggle with keyboard support (Escape key to close, focus trapped to dialog, `clip-path` panel reveal).

### Footer (`Footer.astro`)

- Full-width dark navy surface (`bg-navy text-white border-t border-white/10`).
- Three-column grid (`1.4fr 1fr 1.4fr`):
  1. NewCo thesis statement + "Start a conversation" CTA button.
  2. Quick navigation links (`Home`, `How we work`, `About`, `Contact`).
  3. Registered entity address and regulatory identification:
     - **PT NewCo Teknologi Indonesia**
     - One Pacific Place, Level 11, SCBD, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190, Indonesia
     - NIB / Company Registration: `0120202688192`
- Bottom bar: Copyright year + Privacy link (`/privacy`).

### Button (`Button.astro`)

- Form factor: `rounded-[8px] min-h-[48px] px-[18px] py-3 text-body font-semibold`.
- Micro-interaction: Active press scale (`active:scale-[0.97]` via `--duration-press`).
- Variants:
  - `primary`: `bg-blue hover:bg-blue-dark text-white`
  - `secondary`: `bg-white text-navy border border-navy hover:bg-navy hover:text-white`
  - `inverse`: `bg-white text-navy hover:bg-mist` (used in dark sections)
- Polymorphic: renders either `<a>` (when `href` is passed) or `<button>` (for forms).

### Capability Curve (`CapabilityCurve.astro`)

A dual-rendering SVG and responsive component communicating capability transfer:
- **Desktop:** Interactive SVG coordinate line drawing animated via GSAP ScrollTrigger. NewCo curve recedes (`#5B6878` grey) while client ownership curve rises (`#1D5FD1` cobalt blue).
- **Mobile & Compact:** Dual horizontal ownership progress bars for each stage, avoiding unreadable squashed SVG charts.
- **Interactive Telemetry Panel:** Hovering, focusing, or clicking a stage updates the real-time readout of client ownership percentage, NewCo involvement, pager share, and milestone indicator.
- **Accessibility:** Complete no-JS semantic fallback table and descriptive `sr-only` aria text.

### Capability Scorecard (`CapabilityScorecard.astro`)

Standalone 8-capability transfer scorecard component measuring 4 milestones:
1. Baseline
2. Build With
3. Before Shared Operations
4. Handover
Capabilities measured: Architecture, Delivery, Operations, Recovery, Data, Security, Decision-making, Planning. Supports both `light` and `dark` themes.

### Technology Marquee (`how-we-work.astro`)

- Dual-row opposing CSS marquee (`marquee-track-left`, `marquee-track-right`) displaying 30 vetted technologies.
- Badges with 1px border (`border-line/90`), subtle shadow (`shadow-xs`), and brand SVG/PNG icons.
- Auto-pauses on hover (`animation-play-state: paused`).
- Reduced motion fallback: static flex wrap without infinite translation.

### Video Modal (`index.astro`)

- Accessible native `<dialog>` element hosting the 45-second intro video (`/videos/intro.mp4`, poster `/images/intro-poster.webp`, captions `/videos/intro.vtt`).
- Prevent Lenis scroll interference via `data-lenis-prevent`.
- Dismissible via ESC key, close button, or backdrop click.

### Contact Console (`contact.astro`)

- Architectural console frame (`// INTAKE CONSOLE`) with live client-side validation.
- Fields: Name, Company, Role, Email, Country/Region, Branch Count, Constraints/Needs.
- Follow-up preference radio group (`Email`, `Phone`, `Video call`).
- Collapsible `<details>` accordion for optional qualification fields (`project_type`, `decision_maker`, `it_contact`).
- Focus management and polite ARIA status announcement (`[data-form-status]`).

---

## 7. Site Architecture and Pages

The website consists of 5 focused static routes with automatic redirects for historical URLs:

| Route | Title | Key Function |
|---|---|---|
| `/` | Technology built for independence · NewCo | Full narrative: problem, outcomes, 4-stage curve, discovery deep dive, principles, optional AI adoption, DORA metrics, video modal |
| `/how-we-work` | How We Work · 4-Stage Engineering Transfer | Methodology breakdown, ownership curve, 8-item Handover Checklist table, 30-item dual-row technology stack marquee |
| `/about` | About NewCo · Engineering Leadership & Governance | Leadership (Vanezza, CEO & Agung Denisa, CTO), 4 client commitments, leadership collaboration principles |
| `/contact` | Contact NewCo · Discuss Systems & Engineering Handover | Direct founder review (24h response SLA), qualification intake console |
| `/privacy` | Privacy Policy · How NewCo Protects Client Data | Client architecture confidentiality, strict AI data privacy governance, data retention |
| `/approach` | *(Redirect 301)* | Redirects to `/how-we-work` |
| `/diagnostic` | *(Redirect 301)* | Redirects to `/how-we-work` |

---

## 8. Motion System

Motion is implemented in `src/scripts/motion.ts` using GSAP, ScrollTrigger, CustomEase, and Lenis.

### Principles

1. **Meaning, not spectacle:** Motion explains capability transfer and reading hierarchy.
2. **First-frame integrity:** Complete static HTML is rendered before JavaScript executes. No layout shifts or hidden content if scripts fail.
3. **Single source of truth:** CSS custom properties mirror GSAP easing and duration:
   - `--ease-out`: `cubic-bezier(0.23, 1, 0.32, 1)`
   - `--duration-press`: `140ms`
   - `--duration-hover`: `180ms`
   - `--duration-popover`: `200ms`
   - `--duration-panel`: `260ms`
   - `--duration-page`: `320ms`
4. **Lenis + GSAP synchronization:** Lenis controls the scroll position while GSAP's ticker advances Lenis in a single requestAnimationFrame loop.
5. **View transitions:** Astro's `ClientRouter` triggers directional page fades (`::view-transition-old(root)` and `::view-transition-new(root)`).
6. **Strict reduced motion:** `prefers-reduced-motion: reduce` cleanly disables smooth scrolling, scrubbing, and staggers, immediately rendering final states.

---

## 9. SEO, Structured Data, and Performance

- **Semantic HTML:** `<header>`, `<main id="main">`, `<nav>`, `<section>`, `<footer>`, `<address>`.
- **Skip Links:** Accessible `.skip-link` pointing to `#main`.
- **JSON-LD:** Schema.org `Organization`, `WebSite`, and `BreadcrumbList` on every page.
- **Social Metadata:** Complete Open Graph (`og:*`) and Twitter Card tags with pre-rendered `og-image.png`.
- **Machine Discovery:**
  - `llms.txt`: Structured plain-text site summary for AI agents.
  - `public/AGENTS.md`: Agent overview, services, principles, and routing notes.
  - `sitemap-index.xml` + `robots.txt`.
- **Security Headers (`vercel.json`):**
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Cross-Origin-Opener-Policy: same-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`

---

## 10. Audit and Verification Checklist

- [x] Production build passes cleanly (`astro build`).
- [x] Static typecheck and template diagnostics report 0 errors (`astro check`).
- [x] All 30 technology icons exist in `public/images/tech/` and load correctly.
- [x] Historical redirects (`/approach`, `/diagnostic`) return 301 to `/how-we-work`.
- [x] Video modal is fully accessible, trapped, dismissible, and accompanied by VTT captions.
- [x] Form submission provides accessible validation alerts and direct founder contact SLA.
- [x] Legal entity details, SCBD Jakarta office address, and NIB registration are consistent.
