# Company Overview Deck — Placement Strategy

## Context
- The site is built for lead generation. Its pages are Home, How we work, About and Contact.
- The primary conversion is **Talk to us** (`index.astro:113`, `:242`, `:349`; `about.astro:125`).
- The deck is kept in Google Slides, with two versions: **EN** and **ID**.
- The site switches language on the client side. `src/i18n/apply.ts` swaps `[data-i18n]` text and `[data-i18n-attr]` attributes, including `href`.

## Decision
- Self-host **PDF exports** of both decks.
- Use **one link** whose `href` follows the visitor's selected language.
- Place it on the **About** page, plus a quiet text link on the **Homepage**.
- No landing page, no nav item, no PPTX download.

## Placement

| Location | Decision | Reason |
|---|---|---|
| Homepage hero | Avoid | Pulls attention from "Talk to us" |
| Main navigation | Not yet | Only one resource exists |
| About page | **Primary** | Visitors here are judging credibility and fit |
| Homepage final CTA | **Secondary text link** | Gives visitors who want to review first a route; must be visually weaker than the button |
| Contact page | Skip | Visitors here have already decided to engage |
| Footer only | Skip | Too hidden |
| `/company-overview` landing page | Defer | A page with only buttons is thin content and needs a new i18n page; a direct PDF URL is already shareable |

### About page
Insert a compact card between "How we work with your leadership" (`about.astro:103`) and "If this is how you want to work…" (`about.astro:118`).

Want a quick overview?
See how Kyron Engineering works, what we deliver, and how ownership transfers to your business.
[View company overview (PDF)]
```

### Homepage
Add a text link near the final CTA (`index.astro:349`):

```text
Prefer to review first? View our company overview (PDF).
```

## Files

public/downloads/kyron-engineering-company-overview-en.pdf
public/downloads/kyron-engineering-company-overview-id.pdf
```

- Export each deck from Google Slides with **File → Download → PDF document**.
- Keep each file under about 5MB so it loads well on mobile.
- Re-export after every deck edit.

## Implementation

<a href="/downloads/kyron-engineering-company-overview-en.pdf"
  data-i18n-attr="href:overview.href"
  target="_blank" rel="noopener">
  <span data-i18n="overview.link">View company overview (PDF)</span>
</a>
```

```ts
// src/i18n/dictionary.ts
"overview.href": {
  en: "/downloads/kyron-engineering-company-overview-en.pdf",
  id: "/downloads/kyron-engineering-company-overview-id.pdf",
},
// + overview.link, about.overview.title, about.overview.body, index.cta.overview (EN + ID)
```

## Why PDF instead of a Google Slides link
- A Slides link opens Google's interface, and on mobile it pushes visitors toward the Slides app.
- Viewers can usually **Make a copy** unless that is turned off.
- The deck must be shared as "anyone with the link", which makes the file ID public.
- A self-hosted PDF loads fast and keeps visitors on the site.

**Alternative, for decks that are edited often:** link the live export:
`https://docs.google.com/presentation/d/<ID>/export/pdf`
- It always reflects the current deck.
- It requires "anyone with the link" sharing.
- Turn off "Viewers can download, print and copy".

## Not doing (and when to revisit)
- **PPTX download:** prospects don't need an editable file, and it is easy to rebrand. Send it by hand when a client asks.
- **Landing page:** add one if you need an OG preview card, view analytics, or a second resource.
- **Resources nav item:** add one when there are two or more resources.
