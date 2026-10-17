# NewCo Website — Production Design & Architecture Specification

> Version 2.0 · 2026-10-17  
> Supersedes: Draft v0.1 (2026-09-21)  
> Aligned with codebase: `src/pages/*`, `src/components/*`, `src/styles/global.css`

---

## 1. Executive Summary & Positioning

NewCo is an independent engineering partner that builds with client teams, operates systems together, and systematically transfers complete ownership of the technology, architecture, runbooks, and capability to the business.

### Core Brand Claims

- **Primary Headline:** *Technology built for independence.*
- **Action Principle:** *We build · We teach · You own.*
- **Core Narrative:** *We engineer systems to a high standard, then transfer full ownership to the business: the code, the documentation and the know-how. No vendor lock-in. No hidden dependencies.*

### Market Distinction

The website explicitly distinguishes NewCo from common industry defaults:

| Market Default | What NewCo Delivers |
|---|---|
| **The disappearing agency:** builds, bills, and leaves an unmaintainable codebase. | **We stay until it runs smoothly:** shared monitoring, rapid incident response, and baseline recovery metrics. |
| **Short-term contractors:** temporary hands whose knowledge leaves when the contract ends. | **Knowledge that stays with the business:** exhaustive documentation, code walkthroughs, and repository-owned runbooks. |
| **Tech for the sake of it:** trendy, costly tools added before basics are in place. | **The right tools, not the trendy ones:** proven technology, clear cost/return justification, and AI only where it pays for itself. |
| **Handover in name only:** a final code drop with no operational explanation. | **A transfer that actually works:** contractual handover checklist, credential transfer, and live guided walkthroughs. |

---

## 2. Information Architecture & Navigation

The production site is a tightly focused 5-page static site with automated 301 redirects for historical routes:

```
/                     ── Home (Full thesis, 4 stages, principles, metrics, video intro)
/how-we-work          ── Methodology, 4-stage transfer curve, handover checklist, tech stack
/about                ── Leadership (Vanezza, CEO & Agung Denisa, CTO), client commitments
/contact              ── Direct founder review, qualification intake console
/privacy              ── Confidentiality, data protection, strict AI privacy governance
/approach             ── 301 Redirect to /how-we-work
/diagnostic           ── 301 Redirect to /how-we-work
```

### Global Header Navigation

- Persistent sticky header with transparent-to-border scroll transition.
- Brand wordmark: **NewCo** (links to `/`).
- Links: `How we work`, `About`, `Contact`.
- Mobile navigation: Accessible animated clip-path drawer with focus trapping and ESC dismissal.

### Global Footer

- Dark navy anchor surface (`bg-navy text-white`).
- Quick navigation links.
- Regulatory & corporate identity:
  - **PT NewCo Teknologi Indonesia**
  - One Pacific Place, Level 11, SCBD, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190, Indonesia
  - NIB / Company Registration: `0120202688192`
- Copyright statement and link to `/privacy`.

---

## 3. Page-by-Page Specifications

### 3.1 Homepage (`/`)

1. **Hero Section:**
   - Monospace eyebrow: `// INDEPENDENT SYSTEM ENGINEERING` + tagline `Engineering partner for growing businesses`.
   - Title: *Technology built for independence.*
   - Proof chip: `.corners` bracketed callout: `We build · We teach · You own.`
   - Body copy highlighting zero vendor lock-in and retained know-how.
   - Primary CTA: *Talk to us* (`/contact`).
   - Video modal trigger: *Watch the 45-second intro* opening the accessible native dialog player.

2. **The Problem Section:**
   - Headline: *Getting software built is easy. Keeping it running is the hard part.*
   - 4 architectural cards:
     1. The disappearing agency
     2. Short-term contractors
     3. Tech for the sake of it
     4. Handover in name only

3. **What the Business Gets Instead:**
   - Headline: *What the business gets instead.*
   - 4 evidence-backed cards with concrete proof chips:
     - *We stay until it runs smoothly* (Proof: service recovery time tracked from day one)
     - *Knowledge that stays with the business* (Proof: documentation reviewed and signed off at every stage)
     - *The right tools, not the trendy ones* (Proof: every recommendation comes with its cost and expected return)
     - *A transfer that actually works* (Proof: transfer checklist agreed in the contract)

4. **Process & Capability Curve:**
   - Headline: *How a project comes together.*
   - Explanatory copy on day-to-day control shifting stage-by-stage to the business.
   - Embeds `CapabilityCurve.astro` (FIG. 01 OWNERSHIP CURVE) across 4 stages.

5. **Discovery Section (The Dark Accent Section):**
   - Navy surface (`bg-navy text-white`) with corner brackets.
   - Headline: *Every project starts with a clear picture.*
   - 3 structured steps with inline SVG technical iconography:
     - **Step 01 Understand:** Map current systems, data flows, and bottlenecks.
     - **Step 02 Prioritise:** Rank risks, single points of failure, and upgrade choices.
     - **Step 03 Plan:** Technical roadmap with architecture, milestones, and estimated costs.
   - CTA button: *Talk to us* (`variant="inverse"`).

6. **How We Build (Principles):**
   - Headline: *Simple, honest engineering.*
   - 5 numbered principles:
     1. *Keep it simple:* No extra complexity until there's a real reason for it.
     2. *Running it is part of the job:* Monitoring, backups, cloud costs, and recovery plans are included.
     3. *Clear communication:* Plain-language updates and zero jargon.
     4. *Standard, proven technology:* Widely used, well-supported tools that any qualified engineer can maintain.
     5. *Security from day one:* Access controls, encryption, and regular updates built in from the start.

7. **AI Adoption (Optional Service):**
   - Tag: `// Optional service`
   - Headline: *Want to bring AI into the business? We can help.*
   - Clear boundary statement: Systems are engineered by humans; AI is adopted only where reliable data exists and it pays for itself.
   - 3 sequential steps:
     1. Get the data ready
     2. Start with one clear use case
     3. Expand carefully, with safeguards

8. **The Numbers We Track (DORA + Operational Metrics):**
   - Headline: *Eight numbers that prove progress.*
   - Two-column table layout:
     - `01 Lead time` — How long a change takes to go live
     - `02 Release frequency` — How often updates go live
     - `03 Change failure rate` — How often an update causes a problem
     - `04 Recovery time` — How fast service is restored after an issue
     - `05 Rework rate` — How much work has to be redone
     - `06 Uptime` — How much of the time the system is available
     - `07 Response time` — How quickly support requests are answered
     - `08 Transfer readiness` — How complete the documentation and transfer checklist are

9. **Final CTA:**
   - Headline: *Own the technology your business runs on.*
   - Reassurance copy and primary *Talk to us* button.

10. **Intro Video Dialog Modal:**
    - Native HTML `<dialog>` with backdrop blur, custom close button, ESC key handler, and Lenis scroll prevention (`data-lenis-prevent`).
    - Hosts `/videos/intro.mp4`, poster `/images/intro-poster.webp`, and English VTT captions `/videos/intro.vtt`.

---

### 3.2 How We Work (`/how-we-work`)

1. **Hero:**
   - Eyebrow: `// METHODOLOGY & PROCESS`
   - Title: *One clear process, start to finish.*
   - Core premise: Collaborative delivery where the client always holds final decision rights.

2. **Four Stages Breakdown & Curve:**
   - Title: *Four stages, one direction.*
   - 4 stage cards detailing what NewCo does and what the business gets:
     - **Discovery:** Gets a technical roadmap with architecture, milestones, and estimated costs.
     - **Development:** Gets a working system, tested and ready for real use.
     - **Operations and Support:** Gets a stable system with agreed response times.
     - **Ownership Transfer:** Gets full autonomous ownership with zero vendor lock-in.
   - Full-width `CapabilityCurve.astro` (FIG. 01 OWNERSHIP CURVE).

3. **Handover Checklist Table:**
   - Title: *Everything handed over, nothing held back.*
   - 8 contractual handover deliverables:
     1. `Source code`: Stored directly in the client's own repository.
     2. `Documentation`: Plain-language explanation of system architecture.
     3. `Accounts and access`: Cloud, domains, and SaaS accounts in the client's name.
     4. `Running guides`: Step-by-step instructions for everyday operations.
     5. `Recovery plan`: Backup restoration and incident recovery instructions.
     6. `Security review`: Credentials rotated and access validated prior to sign-off.
     7. `Live walkthrough`: Guided walkthrough sessions for internal staff or incoming partners.
     8. `Ongoing support`: Optional advisory continuity, never a forced dependency.

4. **Technology Stack Marquee:**
   - Title: `// Built on proven, widely used technology.`
   - Dual-row opposing animated marquee featuring 30 vetted technologies:
     - Frontend: Astro, Next.js, Vue, Vite, Tailwind CSS, Bootstrap.
     - Backend & Runtime: Node.js, NestJS, Fastify, Express.js.
     - Databases & Storage: PostgreSQL, Supabase, Neon, Snowflake, BigQuery.
     - Cloud & Infrastructure: Google Cloud, Cloudflare, Render, Railway, Docker.
     - Security & Quality: Snyk, Semgrep, Veracode, Strix AI.
     - AI Models & Frameworks: Claude, Gemini, ChatGPT, DeepSeek, GLM, NVIDIA.

---

### 3.3 About (`/about`)

1. **Hero:**
   - Eyebrow: `// LEADERSHIP & COMMITMENTS`
   - Title: *Built on trust, delivered with care.*

2. **Founders Section:**
   - Dual-founder structure and governance rule: proposals are jointly evaluated on commercial viability and technical feasibility.
   - **Vanezza** — Chief Executive Officer (commercial governance, account accountability).
   - **Agung Denisa** — Chief Technology Officer (technical strategy, architecture, platform IP).
   - High-resolution portraits with dimensional attributes, eager loading, and high fetchpriority.

3. **Client Commitments:**
   - 4 core commitments paired with Solar line icons:
     1. *Plain-language updates:* No jargon, no surprises.
     2. *Clear pricing:* Agreed upfront, before work begins.
     3. *A real person to talk to:* A named contact and agreed response times.
     4. *Honest advice:* What is right for the business, not what costs the most.

4. **Leadership Collaboration Model:**
   - Concrete explanation of how NewCo engineers embed with existing client teams, join sprints, review pull requests, document architecture in client repos, and conclude with autonomous ownership.

---

### 3.4 Contact (`/contact`)

1. **Briefing Header:**
   - Eyebrow: `// ENGAGEMENT BRIEF`
   - Title: *Tell us what the business needs.*
   - Direct Founder Review guarantee: 24-hour response SLA directly from Vanezza and Agung Denisa.
   - 3-point expectation list: 30-minute scoping call, technical recommendations, honest fit evaluation.

2. **Intake Console Form:**
   - Monospace header: `// INTAKE CONSOLE`
   - Required fields with instant validation: Name, Company, Role, Email, Country/Region, Number of locations/branches, Help requested.
   - Follow-up preference radio options: Email, Phone, Video call.
   - Collapsible `<details>` accordion (`A bit more (optional)`) for deeper qualification:
     - Project type: New system / Improve existing / Not sure yet.
     - Main decision-maker.
     - IT contact or provider details.
   - Accessible error alerts and live status banner.

---

### 3.5 Privacy Policy (`/privacy`)

1. **Scope:** Information submitted through web forms; strict confidentiality of client architecture data.
2. **AI Data Privacy Governance:**
   - Client source code and data stay completely private.
   - Zero model training: client code or documents are never used to train public or proprietary models.
   - Approved tooling only with contractual confidentiality protections.
   - Scoped access without secrets or production credentials.
   - Client right to prohibit AI tooling on their assets.
3. **Data Retention & Indonesian Regulatory Compliance:**
   - 12-month retention for unpursued inquiries; immediate return/deletion upon engagement handover.
   - Full compliance with Indonesian data protection regulations.

---

## 4. Visual Design Tokens & Styling

```css
/* Color Palette */
--color-white: #FFFFFF;      /* Clean canvas */
--color-mist: #F4F6FA;       /* Slate-tinted paper */
--color-navy: #0F2A4A;       /* Display text & dark accents */
--color-slate: #1F2933;      /* Body typography */
--color-grey: #5B6878;       /* Metadata, captions, NewCo line */
--color-blue: #1D5FD1;       /* Client ownership line & primary CTA */
--color-blue-dark: #1548A6;  /* CTA hover */
--color-line: #E2E8F0;       /* Hairline borders & rules */
--color-field: #8795A8;      /* Form input borders */
--color-green: #0E9F6E;      /* Success status */
--color-red: #C2410C;        /* Error alert */

/* Architectural Utility Classes */
.mono {
  font-family: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.corners {
  position: relative;
}
.corners::before { /* Top-left L-bracket */ }
.corners::after { /* Bottom-right L-bracket */ }

.grid-lines {
  background-image: linear-gradient(to right, var(--color-line) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--color-line) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

---

## 5. Technology Stack & Runtime

- **Framework:** Astro 7.3 (`output: "static"`)
- **Styling:** Tailwind CSS 4 via `@tailwindcss/vite`
- **Animation & Scroll:** GSAP 3.15, ScrollTrigger, CustomEase, Lenis 1.3
- **Iconography:** `astro-icon` with `@iconify-json/solar`
- **Typography:** Plus Jakarta Sans (Google Fonts)
- **Deployment:** Vercel Static Hosting with automated 301 redirects and strict security headers
