# NewCo Website — Standard Design System

> Design standard v1.0 · 2026-09-21
> Source: `WEBSITE-DESIGN-v1.md`, `COMPANY-TECH-IDENTITY.md`
> Direction: Editorial Operating Partner

## 1. Design Intent

### Design thesis

NewCo is the calm, accountable engineering partner behind technology a client can eventually operate. The design must feel like an executive operating document brought to life: precise, spacious, evidence-led, and human without becoming casual.

The visual language should communicate:

- **Ownership:** systems, decisions, and operations are visible.
- **Transfer:** the page shows movement from NewCo-led work toward client ownership.
- **Evidence:** diagrams, measures, and concrete outputs replace decorative claims.
- **Restraint:** no AI spectacle, generic agency tropes, or unsupported proof.

### Primary message

> **Engineering capability you keep.**

Supporting message:

> We build with your team, operate the system with you, and measure progress toward your independence.

### Experience goal

Within the first viewport, an executive should understand:

1. NewCo is an embedded engineering capability partner, not a project shop or staff-augmentation vendor.
2. The outcome is technology the business can own and operate.
3. The first step is a paid Technical Diagnostic.

## 2. Art Direction

### Chosen direction

**Editorial operating partner** — typographic, diagram-led, high-trust, and deliberately unhurried. The systems capability map is used as the supporting visual language for diagrams and the Approach page, not as a dominant technical aesthetic.

### Avoid

- Generic SaaS layouts and feature bento grids
- Neon gradients, glowing brains, robots, or circuit-board decoration
- Stock photographs of teams, server rooms, or executives at screens
- Fake testimonials, invented client logos, or vague trust badges
- Excessive glass, blur, parallax, or animation without a narrative role
- Technology-first hero copy

### Visual metaphor

A **capability transfer map**: a measured line moves through Diagnose, Build With, Run With, Hand Over, and Advisory. NewCo's line recedes as the client's line becomes stronger. This becomes the site's authored visual signature.

## 3. Layout System

### Grid

- Maximum content width: `1200px`
- Desktop grid: 12 columns, `24px` gutter
- Tablet grid: 8 columns, `20px` gutter
- Mobile grid: 4 columns, `16px` gutter
- Outer padding: `clamp(20px, 5vw, 80px)`
- Reading measure: `62ch` maximum for long-form copy
- Diagram measure: full content width, never wider than the text hierarchy can explain

### Spacing scale

Use a 4px base with a restrained editorial rhythm:

| Token | Value | Use |
|---|---:|---|
| `space-1` | 4px | Inline and icon spacing |
| `space-2` | 8px | Compact control spacing |
| `space-3` | 12px | Labels and metadata |
| `space-4` | 16px | Card internals, mobile gaps |
| `space-6` | 24px | Paragraph and grid gaps |
| `space-8` | 32px | Small section spacing |
| `space-12` | 48px | Card and content groups |
| `space-16` | 64px | Mobile section spacing |
| `space-24` | 96px | Desktop section spacing |
| `space-32` | 128px | Major editorial transitions |

Sections should alternate between dense evidence and generous breathing room. Do not make every section a full-screen panel.

## 4. Colour System

Final values require contrast testing before implementation. The starting palette is intentionally warm and non-neon.

| Token | Value | Role |
|---|---|---|
| `canvas` | `#F3F0E9` | Warm stone page background |
| `surface` | `#FAF9F5` | Cards, form fields, light overlays |
| `ink` | `#171918` | Primary text and navigation |
| `graphite` | `#4E5550` | Secondary text |
| `line` | `#D7D4CC` | Rules, diagram tracks, card borders |
| `signal` | `#B14D32` | CTA, links, active phase, key markers |
| `signal-dark` | `#843A28` | Hover and high-contrast signal state |
| `success` | `#42664C` | Positive form and evidence state only |
| `error` | `#A33F36` | Form errors and validation only |

Rules:

- Use `signal` as a controlled accent, not a background wash.
- Verify WCAG AA contrast for text, links, focus rings, disabled states, and diagram labels.
- Never communicate status through colour alone; pair it with text or shape.
- Dark sections may use `ink` as background with `canvas` text, but should be occasional anchors rather than the default.

## 5. Typography

### Selection

Use one highly legible variable sans-serif with a broad optical range. Recommended implementation approach: self-host a licensed variable family with optical sizing, or use a reliable system fallback stack. Do not introduce a decorative display face that weakens executive readability.

Suggested stack:

```css
--font-sans: "Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif;
```

The final font must support Indonesian diacritics and render consistently across modern browsers.

### Type scale

| Role | Desktop | Mobile | Weight / treatment |
|---|---:|---:|---|
| Display | `clamp(3.5rem, 8vw, 7.5rem)` | `3.25rem` | 600, tight leading |
| H1 | `clamp(2.75rem, 5vw, 5.25rem)` | `2.75rem` | 600 |
| H2 | `clamp(2rem, 3.5vw, 3.5rem)` | `2.1rem` | 600 |
| H3 | `1.5rem` | `1.35rem` | 600 |
| Body large | `1.25rem` | `1.125rem` | 450, relaxed leading |
| Body | `1rem` | `1rem` | 400, `1.55` line-height |
| Label | `0.72rem` | `0.72rem` | 650, uppercase, tracked |
| Metric | `clamp(2.5rem, 5vw, 5rem)` | `2.75rem` | 600, tabular numerals |

Typography must remain readable with browser zoom at 200%. Do not use all-caps for paragraphs or long headings.

## 6. Component Language

### Header

- Warm stone background, no oversized navigation block.
- Wordmark at left; links: Approach, Technical Diagnostic, About, Contact.
- Persistent outlined or signal-filled CTA: **Discuss your situation**.
- Sticky state may add a subtle bottom rule; no heavy shadow.
- Mobile navigation uses a keyboard-accessible disclosure with clear focus and Escape handling.

### Buttons

Primary:

- Signal background, warm off-white text.
- 12px vertical / 18px horizontal minimum padding.
- 2px visible focus ring offset from the control.
- Arrow icon is optional and should indicate movement, not decorate.

Secondary:

- Transparent or surface background with ink border.
- Same height and focus treatment as primary.

Button copy stays action-specific: **Discuss your situation**, **Explore the Technical Diagnostic**, **See the capability curve**.

### Cards

Cards are evidence containers, not decorative tiles.

- Surface background or canvas background with a 1px rule.
- No floating shadow by default.
- One clear heading, short explanation, and evidence cue.
- Equal-height cards only when comparison requires it; otherwise preserve natural content height.

### Diagrams

- Authored diagrams are allowed for capability curves, system maps, and metrics.
- Prefer semantic HTML and CSS for simple diagrams; use SVG only for data graphics and brand marks.
- Every diagram needs a text equivalent or adjacent explanatory copy.
- Diagram labels must remain legible on mobile; never rely on hover to reveal essential information.

### Icons

Use Solar icons through Iconify for interface symbols only. Keep icons small, single-colour, and subordinate to text. Do not use icon walls or invented logos.

## 7. Homepage Composition

### 7.1 Hero — The owned outcome

Layout: 7/5 split on desktop; stacked on mobile.

Content:

- Eyebrow: `EMBEDDED ENGINEERING CAPABILITY PARTNER`
- H1: **Build the technology your business can own.**
- Supporting copy from the approved brief.
- Primary CTA: **Discuss your situation**
- Secondary CTA: **See how the capability transfer works**
- Compact proof line: `Build with your team / Operate the system together / Measure the path to independence`

Hero visual: a static capability-transfer diagram with two labelled tracks. The initial frame must be complete without JavaScript. No generic image or decorative 3D scene.

### 7.2 Problem — Dependency has a cost

Heading: **Most technology problems are operating-model problems.**

Use an editorial two-column comparison. On mobile, each default becomes a short row with its consequence directly below. Keep the language respectful and category-defining.

### 7.3 Outcomes — Capacity, Longevity, Leverage

Three equal columns. Each includes:

- Outcome name
- One-sentence explanation
- Concrete evidence cue

Do not use abstract icons as the primary content.

### 7.4 Capability curve

Heading: **A route from external support to internal ownership.**

Show five phases in one connected horizontal path on desktop and a vertical sequence on mobile:

1. Diagnose
2. Build With
3. Run With
4. Hand Over
5. Advise

The diagram must visibly show decreasing NewCo day-to-day ownership and increasing client ownership. Caption: **Handover is a success metric—not a hidden failure condition.**

### 7.5 Technical Diagnostic

Give the diagnostic a visually distinct surface, but not a sales-price treatment.

- 15 business days
- Fixed-fee, standalone product
- Evidence map, risk register, capability baseline, roadmap, operating model, and transfer plan
- Trust statement: **You own the output and can take it to any vendor.**
- CTA: **Explore the Technical Diagnostic**

Do not publish price until approved.

### 7.6 Principles

Use five concise principle rows rather than five ornamental cards. Each row has a number, title, and one-sentence explanation. Link to `/approach` for detail.

### 7.7 AI — Disciplined, not performative

Use a restrained maturity ladder with labels only on the homepage: Data foundation, Decision support, Assistive AI, Embedded intelligence, Controlled automation.

Supporting copy must establish prerequisites: data, decision, evaluation, owner, economics, failure handling, and safe disable path. Do not imply that every engagement needs AI.

### 7.8 Qualification

Use two lists: **Good fit** and **Probably not a fit**. Keep list items short and respectful. This is a conversion-quality control, not a defensive disclaimer.

### 7.9 Evidence framework

Until approved case studies exist, show measured categories only: lead time, deployment frequency, change-failure rate, recovery time, rework, onboarding-to-first-PR, platform reuse, and capability scorecard progress.

Approved note:

> We publish measured outcomes when the work gives us evidence to publish.

Never add logos, testimonials, or quantified outcomes without permission and source evidence.

### 7.10 Final CTA

Heading: **Own the next stage of your technology.**

CTA: **Start a conversation**

Reassurance: **No speculative estimate. No obligation to continue with NewCo after the diagnostic.**

## 8. Supporting Pages

### `/diagnostic`

Sequence: promise → who it is for → what we examine → ten outputs → how the work runs → choices afterward → commercial principle → CTA.

The page must make the diagnostic tangible without publishing unapproved pricing. Repeat ownership statement: **You own the diagnostic outputs and can take them to any vendor.**

### `/approach`

Sequence: capability curve → scorecard → evidence required for handover → shared responsibilities and decision rights → ADRs and deviations → handover planned from the beginning.

Avoid contract-level SLOs, response targets, or legal allocations.

### `/about`

Sequence: belief → founder roles → operating rule → shared approval areas → documented decisions and explicit ownership.

Communicate governance without exposing private founder-agreement details.

### `/contact`

Short qualification form:

- Name
- Company
- Role
- Email
- Country / operating region
- Current constraint
- Approximate locations or operating units
- Preferred way to continue

Optional qualification fields may cover technical counterpart, executive sponsor, and primary situation. Never request credentials, repository access, production details, or sensitive data in the public form.

After submit: confirm receipt, explain review against fit criteria, and expose scheduling only when the operational workflow is ready.

## 9. Motion System

### Stack decision

- GSAP is the primary animation system.
- Use exactly one smooth-scroll engine. **Recommendation: Lenis**, only if the implementation needs smooth-scroll continuity; otherwise use native scrolling and avoid unnecessary runtime weight.
- Connect Lenis to GSAP ScrollTrigger only when both are actually used.
- Three.js is not required. Do not add WebGL: the capability map is clearer, lighter, and more accessible as authored HTML/CSS/SVG/data graphics.

### Motion narrative

1. Hero labels and word groups enter in a short, restrained sequence.
2. The capability line draws as the user reaches the curve, then settles.
3. Evidence rows reveal in reading order.
4. CTA states use simple CSS transitions.

Motion supports comprehension; it must never delay content or conversion.

### Motion rules

- Static first frame is complete before JavaScript.
- `prefers-reduced-motion: reduce` disables smooth scrolling, scrubbing, and stagger; render final states immediately.
- Split-heading animation must preserve one unsplit accessible name.
- Pause or cleanly reset pointer effects on blur, visibility change, touch, and keyboard interaction.
- No continuously animated offscreen content.
- Keep transforms bounded; avoid large blur filters and layout-triggering animation.

## 10. Asset and Provenance Plan

### Asset strategy

- Primary hero asset: original capability-transfer diagram, no external media required.
- Supporting visuals: original system maps, abstract operational metric panels with fictional/non-sensitive data, and editorial diagrams.
- Founder portraits: real photographs only if approved and available; otherwise omit portraits rather than use avatars or generated people.
- Client proof: no logos or testimonials until permissions and evidence exist.
- Interface icons: Solar icons through Iconify.

Every shipped media asset must record source, licence/permission, alt text, crop intent, aspect ratio, and loading strategy in the implementation repository.

### Media defaults

- Above-fold media: responsive, dimensioned, eagerly loaded only when it is the LCP candidate.
- Below-fold media: lazy loaded with explicit dimensions.
- Provide a meaningful fallback when media fails.
- Decorative media uses empty alt text; informative diagrams include a text equivalent.

## 11. Accessibility and Performance Baseline

Required:

- Semantic landmarks, heading order, and link purpose.
- Visible keyboard focus and keyboard-complete navigation.
- Accessible mobile menu and form error association.
- Contrast tested to WCAG AA.
- No essential information conveyed only by colour, hover, animation, or imagery.
- Meaningful content available with JavaScript disabled.
- Reduced-motion mode tested.
- Responsive layouts tested at mobile, tablet, and desktop widths.
- Lightweight performance budget: avoid WebGL, large media, unnecessary libraries, and offscreen animation.
- Search and social metadata on every public page.
- Privacy notice and consent approach before analytics collection.

## 12. Claim Governance

Before publishing, classify every public statement as one of:

- **Principle** — what NewCo believes.
- **Method** — how NewCo works.
- **Evidence** — measured, client-approved result.
- **Capability** — currently deliverable asset or service.
- **Future intention** — clearly marked as planned.

Do not publish unsupported security, compliance, performance, AI accuracy, ROI, response-time, client, or partner claims.

## 13. Validation Checklist

### Content

- [ ] First viewport identifies NewCo and the durable outcome.
- [ ] Technical Diagnostic is clear as the first step.
- [ ] Project-shop, staff-augmentation, and AI-demo distinctions are understandable without naming competitors.
- [ ] Handover is framed as measured success, not abandonment.
- [ ] No unsupported outcomes, logos, testimonials, or pricing.

### Interaction

- [ ] Header CTA works from every page.
- [ ] Mobile navigation supports keyboard and Escape.
- [ ] Forms expose labels, errors, success, and loading states.
- [ ] Focus is visible everywhere.
- [ ] Reduced-motion mode renders complete final states.

### Visual and technical

- [ ] Desktop and mobile capability diagrams are legible.
- [ ] Contrast passes WCAG AA.
- [ ] JavaScript-disabled page remains meaningful.
- [ ] Only one smooth-scroll engine is installed and initialized, if any.
- [ ] Hero remains complete if animation or media fails.
- [ ] Below-fold media is lazy loaded and dimensioned.
- [ ] Production build passes without warnings that affect delivery.

## 14. Implementation Decisions Still Required

- Final company name and domain
- Approved signal colour and font licence
- Final beachhead wording: hospitality, retail, or broader operational complexity
- Founder photography and biographies
- Contact, CRM, scheduling, privacy, and analytics workflow
- Static versus CMS delivery
- Approved evidence and case-study permissions
- Legal review of privacy, IP, security, and service claims
