# NewCo — Embedded Engineering Capability Partner

> Working draft v0.2 · 2026-09-21 · Authors: Agung (CTO) + Partner (CEO / Client & Commercial)

---

## 1. Executive Position

NewCo helps operationally complex businesses build and internalise the engineering capability required to own their technology.

> **We build with your team, operate the system with you, and measure progress toward your independence.**

We are not a staff-augmentation vendor, a generic software agency, or an AI-demo shop. We deliver three durable outcomes:

- **Capacity:** the client can ship, operate, and improve the system.
- **Longevity:** the system has an accountable operating model, not only an initial release.
- **Leverage:** reusable engineering assets, data foundations, and measured automation compound over time.

AI is a delivery advantage and a product option—not a reason to force AI into every engagement.

---

## 2. Founding Structure

| | Role | Owns |
|---|---|---|
| **Partner** | CEO / Managing Director | Client relationships, introductions, commercial terms, account governance, client-facing delivery accountability |
| **Agung** | CTO | Technical strategy, architecture, delivery engineering, hiring and mentoring, platform IP, security and technical risk |

**Operating rule:** the CEO owns *who we work with and what we promise*. The CTO owns *how it is built and whether we can promise it*. No proposal leaves without CTO feasibility sign-off; no architecture or support commitment is approved without CEO commercial sign-off. Each founder has one documented veto within their area of ownership.

The founders jointly approve: new markets, material pricing exceptions, debt or financing, senior hires, changes to the house stack, client work that creates unusual legal or security exposure, and any assignment of company IP.

A decision log records the decision, owner, rationale, assumptions, and review date. Founder vesting, deadlock resolution, IP assignment, client ownership, continuity, and exit terms belong in a signed founders' agreement—not in an informal understanding.

---

## 3. The Market Gap

We position against these common defaults:

| Market default | Client consequence |
|---|---|
| **Project shop** — build, invoice, disappear | An unmaintainable system and no accountable operator |
| **Body shopping** | Temporary capacity without retained capability |
| **Fixed-scope waterfall on ambiguity** | Change requests become adversarial; quality is cut to protect margin |
| **AI wrapper without foundations** | A demo with no trustworthy data, evaluation, or owner |
| **Security as a late report** | Audit surprises, unmanaged vulnerabilities, and unclear accountability |
| **Handover as a ZIP file** | Vendor dependency disguised as delivery |
| **Lowest-price competition** | Junior teams, rework, and poor total cost of ownership |

The gap is not cheaper delivery. It is a credible route for companies that want to own their technology but do not yet have the internal engineering leadership, operating practice, or data foundation to do so.

---

## 4. Positioning and Principles

### 4.1 The three pillars

**Capacity is a deliverable.** Each engagement has a named client-side counterpart. They participate in planning, review, implementation, operations, and architecture decisions. Progress is measured against a capability scorecard, not only against our output.

**Operations are part of engineering.** We operate what we build with the client: reliability, cost, security, incident response, and change management. Production feedback informs the next design decision.

**AI earns its place.** We use AI in delivery where it improves quality or speed under the client's privacy and security constraints. We build AI into products only when data, evaluation, economics, governance, and failure handling are ready.

### 4.2 Non-negotiable engineering principles

- Prefer the smallest architecture that meets the requirement; split services only when a measured boundary justifies the operational cost.
- Automate repeatable checks; retain human ownership of consequential decisions.
- Treat security, observability, backups, and recovery as part of the product.
- Make client systems replaceable: exportable data, documented interfaces, reproducible environments, and transferable operations.
- Record important technical decisions in ADRs.
- Measure claims before marketing them.

---

## 5. What AI-First Means at NewCo

### 5.1 AI-enabled delivery

Every suitable repository receives a machine-readable context layer: agent instructions, architecture and ownership metadata, repository-scoped workflows, and a queryable code knowledge graph where it creates real value.

Our delivery system may include:

- AI-assisted implementation, review, security triage, and dependency analysis
- Code graphs for symbols, callers, service relationships, data flow, and blast radius
- Documentation generated from source and system metadata, with human review for decisions and procedures
- Automated CI checks for quality, security, dependencies, and policy
- Delivery metrics: lead time, deployment frequency, change-failure rate, MTTR, rework, and onboarding-to-first-PR

AI tooling is subject to client data rules. Client code, prompts, logs, and data are not sent to a model provider unless the permitted use, retention, residency, and access terms are understood and approved.

### 5.2 AI products

The maturity ladder is a capability map, not a mandatory sequence. The diagnostic selects the lowest rung that can create measurable value and identifies prerequisites for the next one.

| Rung | Capability | Required evidence or precondition |
|---|---|---|
| 0 | **Data foundation** — instrumentation, governed sources, warehouse, honest dashboard | None; establish the baseline |
| 1 | **Decision support** — segmentation, attribution, forecasting | Reliable data and a defined decision |
| 2 | **Assistive AI** — retrieval, summarisation, internal copilots | Permissioned corpus, evaluation set, owner |
| 3 | **Embedded intelligence** — ranking, routing, pricing, personalisation | Evaluation, feedback loop, rollback path |
| 4 | **Controlled automation** — multi-step agents with human checkpoints | Measured accuracy, bounded permissions, audit trail |

Every AI feature must have an owner, evaluation suite, quality threshold, cost budget, documented failure modes, fallback behaviour, and a way to disable it safely. We do not ship an AI feature merely because it is technically possible.

---

## 6. Engagement Model — The Capability Curve

Engagements are capability-transfer contracts, not open-ended project phases.

### Phase 0 — Technical Diagnostic

**Typical duration:** 15 business days; fixed fee.

Inputs include architecture and repository access, infrastructure and data inventories, stakeholder interviews, security questionnaires, and current delivery or incident evidence.

Outputs:

1. Current-state architecture and dependency map
2. Data-flow and data-readiness assessment
3. Security and operational risk register
4. Delivery and capability baseline
5. AI-readiness scorecard
6. Prioritised 90-day backlog
7. Twelve-month investment roadmap and three-year direction
8. Target operating model, estimated run cost, and delivery options
9. Build-versus-buy recommendations
10. Capability-transfer plan and Phase 1 recommendation

The client owns the diagnostic outputs and can take them to any vendor. The diagnostic must be profitable as a standalone product; it is not a loss-leading estimate for later work.

### Phase 1 — Build With

**Typical duration:** 3–9 months; retainer plus outcome-based milestones.

We build the platform with the client's named counterpart(s) in the same planning, review, repository, and release process. The deliverable is the working system plus demonstrable client capability—not a codebase that only NewCo understands.

### Phase 2 — Run With

**Typical duration:** 12+ months; defined operations retainer.

We share production responsibility with the client. The agreement defines coverage hours, severity levels, response targets, maintenance windows, client responsibilities, cloud-account ownership, backup and recovery targets, security escalation, and third-party exclusions. The client shadows, then shares, the pager.

### Phase 3 — Hand Over

Handover is complete when the agreed client team independently performs the required delivery and operations activities for the defined observation period. At minimum, this normally includes production deployment, rollback, incident response, dependency remediation, data-pipeline validation, and an architecture change review.

NewCo moves to an advisory retainer. Handover is a success metric and a source of referrals, not a hidden failure condition.

### Phase 4 — Advisory / Standing CTO

Fractional CTO support: architecture review, hiring panels, technical due diligence, security posture review, roadmap governance, and periodic operating reviews.

> We do not promise that a client will never need us. We define and measure the capabilities required for the client to operate without us day to day.

---

## 7. Capability-Transfer Scorecard

Each counterpart is assessed at baseline, during Build With, before shared operations, and at handover.

| Capability | Handover evidence |
|---|---|
| Architecture | Explains major components, constraints, and trade-offs |
| Delivery | Ships a production change through the normal controls |
| Operations | Responds to an incident using logs, metrics, traces, and runbooks |
| Recovery | Executes rollback and recovery procedures |
| Data | Validates freshness, quality, lineage, and permissions |
| Security | Remediates a dependency or access-control issue |
| Decision-making | Authors and defends an ADR |
| Planning | Prioritises and delivers the next iteration without NewCo ownership |

The specific threshold, evidence, and observation period are written into the SOW or operating agreement. Certification is evidence-based; attendance at training is not certification.

---

## 8. Technical Identity — The House Stack

Opinionated, not mercenary. We choose fewer tools and go deep so engineers can move between engagements and the company can operate what it builds.

| Layer | Default | Rule |
|---|---|---|
| Frontend | Next.js; Vue 3 when client context or product constraints justify it | One primary path; deviation requires an ADR |
| Backend | NestJS for structured services; Python for data and ML | Express is used only where its simplicity is the explicit advantage |
| Data layer | Managed PostgreSQL + Prisma | Type-safe schema and migration discipline |
| Analytics | BigQuery on GCP | Warehouse-first; do not turn OLTP into the analytics platform |
| Infrastructure | Cloud Run, managed services, IaC | Serverless-first where operationally and financially appropriate |
| CI/CD | Reusable pipeline templates | Quality, security, dependency, and deployment controls are gates |
| AI | Provider-neutral interface; model selected by quality, privacy, latency, and cost | Current defaults are documented in an ADR, not hard-coded into company identity |
| Observability | One standard for logs, metrics, traces, alerts, and ownership | Every production service has a service owner and runbook |

Every project starts from the house path. Deviation requires a written ADR covering rationale, lifecycle cost, operational owner, exit path, and client approval where relevant. Variety is a cost we charge for, not a default we absorb.

### 8.1 Internal platform

Reusable company-owned assets include:

- Smallest-appropriate service skeleton, with API, dashboard, scheduling, and queue patterns when required
- Auth/RBAC with tenant and operator scoping
- Analytics ingest → warehouse → dashboard template
- CI/CD, security scanning, dependency and CVE tracking harness
- Agent context and code-knowledge tooling
- AI evaluation and regression harness
- Observability, runbook, backup, and recovery templates
- Diagnostic scorecards and capability-transfer tooling

The platform is company IP. Client-specific code and data remain governed by the engagement agreement. Generalised improvements may return to the platform only when they contain no client confidential information and the contract permits it.

Each engagement should improve reuse, reliability, or delivery speed. Platform work is prioritised by measured reuse and client value, not by novelty.

---

## 9. Security, Privacy, and Operational Baseline

NewCo applies a baseline to its own systems and adapts it to each client:

- MFA, password management, least privilege, and separate client credentials
- No shared production accounts; quarterly access review; immediate offboarding
- Secrets manager; no secrets in repositories or issue trackers
- Encrypted managed devices, backups, and controlled recovery access
- Dependency, vulnerability, and license tracking
- Centralised audit logs for privileged activity
- Tested backup restoration and documented incident response
- Client data classification, retention, deletion, and export procedures
- Approved AI-tool list and rules for source code, PII, prompts, logs, and model providers
- Security responsibilities and breach-notification paths defined in the contract

SAST, DAST, dependency scanning, and AI review are controls—not proof of complete security. Formal compliance certification, legal advice, and independent penetration testing are separate services or third-party responsibilities.

---

## 10. Intellectual Property and Client Independence

Every contract distinguishes:

1. **NewCo background IP:** platform code, templates, methods, tooling, and pre-existing assets.
2. **Client background IP:** client data, brands, existing code, processes, and proprietary content.
3. **Engagement deliverables:** client-specific code, configuration, documentation, schemas, dashboards, and models.
4. **Third-party materials:** open-source and provider assets subject to their licenses.

NewCo retains reusable background IP. The client receives ownership or a perpetual, transferable, operationally sufficient licence to the client-specific deliverables, as agreed in the MSA. The client must be able to operate, maintain, export, replace, or extend its system without being trapped by NewCo.

The agreement covers open-source notices, model prompts and evaluation sets, embeddings and fine-tuning artifacts, confidentiality, data deletion, subcontractors, termination assistance, and rights after termination. The exact allocation is reviewed by qualified counsel in the relevant jurisdiction.

---

## 11. What We Say No To

- Pure staff augmentation with no architectural responsibility or capability-transfer path
- Fixed-scope waterfall on ambiguous requirements
- AI features without a data foundation, evaluation, owner, and safe fallback
- Inheriting a codebase without a paid diagnostic
- Lowest-bidder races or unpaid speculative estimates on unseen systems
- Engagements without a named client-side counterpart and executive sponsor
- Production responsibility without defined access, authority, SLOs, and client responsibilities
- Use of client data in AI tools without approved governance
- Work where the incumbent vendor relationship cannot be addressed honestly
- Clients who refuse the access, security, or decision rights required for accountable delivery

An opportunity scorecard records fit, sponsor quality, budget, data readiness, counterpart availability, risk, reference value, and expected conversion. The disposition is pursue, pursue only after diagnostic, refer, or decline.

---

## 12. Ideal Client Profile

### Initial beachhead

Indonesian multi-location hospitality or retail operators with fragmented operational systems, real transaction or operational data, an executive sponsor, and no internal engineering leadership. They need a long-term partner, not the cheapest implementer, and can name a person who will become the technical counterpart.

### Secondary market

Australian and Singaporean businesses seeking Indonesian delivery economics with senior technical governance, English-language communication, and a credible route to internal capability. Existing founder delivery experience is a credential; every proposal must still state evidence and references.

### Qualification minimums

- At least two meaningful operational data sources
- A named client-side counterpart
- An executive sponsor with decision authority
- Willingness to provide appropriate repository, infrastructure, and data access
- Budget for a paid diagnostic and a multi-month delivery relationship
- Ability to make the required product, security, and architecture decisions

### Anti-profile

Pre-revenue startups seeking a cheap MVP; clients unwilling to change an incumbent relationship; clients who want day-rate comparison as the primary decision criterion; clients unwilling to own their responsibilities; and any opportunity whose legal, security, or operational risk cannot be priced and governed.

---

## 13. Commercial Shape and Unit Economics

| Line | Model | Purpose |
|---|---|---|
| Technical Diagnostic | Fixed fee, profitable standalone | Trust, qualification, and roadmap |
| Build With | Retainer plus capability milestones | Core delivery revenue |
| Run With | Retainer with explicit SLO tiers | Recurring operations revenue |
| Advisory / Fractional CTO | Monthly retainer | High-value governance and continuity |
| Platform licence | Later; only for genuinely productised assets | Reusable long-term revenue |

We price on the capability and risk managed, not on hours spent. Delivery efficiency improves NewCo's margin and the client's speed; it does not automatically reduce the price.

Before accepting work, we model delivery effort, support load, cloud and third-party cost, gross margin, payment terms, founder capacity, client concentration, and termination risk. On-call, emergency work, third-party costs, travel, and material scope changes are explicit commercial items.

Operating guardrails:

- Do not let one client become the company's structural dependency.
- Hire before the CTO becomes the only person who can ship.
- Fund shared platform and operational capacity from an explicit reserve.
- Review actual diagnostic margin and support load after every engagement.
- Treat a handover as a planned revenue transition to advisory, not as unpriced free support.

---

## 14. Name and Brand Direction — Open

Naming criteria:

- Pronounceable in Bahasa Indonesia and English without explanation
- Connotes capability transfer and partnership, not agency or generic solutions
- Domain and trademark availability checked in Indonesia, Singapore, and Australia
- Avoid saturated terms such as “Digital”, “Solutions”, “Nusantara”, “Tech”, and “Labs”

Possible taglines:

1. *Engineering capacity you keep.*
2. *Build it with your team. Own it for the long term.*
3. *Engineering capability, built to stay.*

---

## 15. Open Decisions — Both Founders

1. **Legal structure and jurisdiction:** PT PMA, Singapore Pte Ltd with Indonesian delivery entity, or another structure; obtain tax and legal advice.
2. **Founder agreement:** equity, vesting, network contribution, IP assignment, deadlock, continuity, and exit.
3. **Initial vertical:** choose one beachhead before the first proposal.
4. **First hire:** delivery engineer versus delivery/PM; use the capacity trigger in §13.
5. **Bench and risk reserve:** define minimum cash reserve and support-capacity funding.
6. **First three logos:** score against the qualification criteria; do not bend the model silently.
7. **Contract pack:** MSA, diagnostic SOW, Build With SOW, Run With/SLO schedule, IP schedule, data-processing terms, and security appendix.
8. **AI governance:** approved tools, client-data rules, retention, model-provider review, and incident process.
9. **House-stack ADRs:** select the primary frontend, queue, observability, IaC, and deployment paths.
10. **Evidence baseline:** decide which claims NewCo can publish only after measurement.

---

## 16. First 90 Days

| Period | CEO | CTO | Shared evidence |
|---|---|---|---|
| Weeks 1–2 | Entity and founder-agreement process; select beachhead; shortlist first three logos | House-stack ADRs; security and AI-use baseline; platform repository skeleton | Qualification scorecard and decision log |
| Weeks 3–4 | MSA, diagnostic SOW, IP and data terms with counsel | Diagnostic method, evidence checklist, scoring rubric, capability scorecard | Productised diagnostic with price and delivery budget |
| Weeks 5–8 | Sell first paid diagnostic; establish sponsor and counterpart | Deliver diagnostic; produce architecture, risk, roadmap, and capability baseline | Actual diagnostic margin and client decision |
| Weeks 9–12 | Convert only if fit and economics are proven; begin first-hire process | Start Phase 1; extract one reusable component; establish delivery metrics | One production reuse case and first capability-transfer review |

### 90-day success

- One paid diagnostic delivered profitably
- One diagnostic converted to a retainer on acceptable terms
- One reusable platform component used in production
- One client counterpart with a recorded baseline and next capability target
- Baseline metrics for lead time, change failure, MTTR, rework, and platform reuse
- Contract, security, IP, and AI-governance foundations ready for the next engagement

Success is proof that the model is repeatable, measurable, and economically sound—not merely first revenue.
