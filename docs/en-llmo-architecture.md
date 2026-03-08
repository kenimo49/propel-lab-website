# English LLMO Architecture — Design Decision Document

## Overview

This document explains the architectural decisions behind Propel-Lab's English-language LLMO (LLM Optimization) implementation.

## Decision: /en LP + /ai/ Markdown (not full i18n)

We chose a **single-page English landing page (`/en`) combined with English Markdown files in `/ai/`**, rather than a full internationalization (i18n) framework with translated versions of every page.

### Why Not Full i18n?

| Factor | Full i18n | /en LP + /ai/ Markdown |
|--------|-----------|----------------------|
| Maintenance cost | High — every page change requires translation updates | Low — 1 LP + Markdown files |
| Time to implement | Days–weeks | Hours |
| LLMO effectiveness | Same HTML structure, no Markdown advantage | AI crawlers get clean Markdown directly |
| Human UX | Full translated site | Single page covers all key info |
| Content drift risk | High — translations can fall out of sync | Low — fewer files to maintain |

### Two Audiences, Two Formats

The architecture recognizes two distinct audiences:

1. **Humans** → Japanese-language main site + `/en` English LP
   - Humans browse visually, expect polished UI
   - Japanese audience is primary; English is supplementary
   - A single-page LP provides all essential information efficiently

2. **AI Systems** → `/ai/` English Markdown files + `llms.txt`
   - AI crawlers (ChatGPT, Claude, Gemini, Perplexity) parse Markdown more efficiently than HTML
   - Structured, clean Markdown reduces token consumption and improves accuracy
   - The `/ai/` directory serves as a dedicated AI information hub

### LLMO Optimization Rationale

AI crawlers benefit from:
- **Markdown over HTML**: No parsing overhead, no noise from CSS/JS/navigation elements
- **Flat file structure**: `/ai/about.md`, `/ai/founder.md`, etc. — each file is a self-contained knowledge unit
- **llms.txt as entry point**: Provides a structured index for AI systems to discover all available content
- **English as AI lingua franca**: Most LLM training data is English-heavy; English Markdown maximizes AI comprehension

### Cost-Effectiveness Analysis

**Full translation (5+ pages):**
- Initial translation: ~5 hours
- Ongoing maintenance: Every content change needs dual updates
- Risk: Translated pages fall out of sync with Japanese originals
- Tooling: Requires i18n framework (astro-i18n, etc.)

**1 LP + Markdown approach:**
- Initial creation: ~2 hours
- Ongoing maintenance: Markdown files are independent, update as needed
- Risk: Minimal — Markdown files are self-contained
- Tooling: None — just static files

### Comparison: promptingguide.ai's Multilingual Pattern

[promptingguide.ai](https://www.promptingguide.ai/) uses full i18n with translated versions of every page across 10+ languages. This makes sense for their use case (educational content where every page has equal value in every language).

For a **corporate site** like Propel-Lab:
- Primary audience is Japanese
- English serves as supplementary info for international AI systems and potential partners
- The ROI of full translation doesn't justify the maintenance cost
- The `/ai/` Markdown approach provides better AI discoverability at lower cost

## File Structure

```
propel-lab-website/
├── src/pages/
│   ├── index.astro          # Japanese main page
│   └── en.astro             # English single-page LP
├── public/
│   ├── llms.txt             # English (AI primary language)
│   ├── llms-ja.txt          # Japanese version (preserved)
│   ├── llms-full.txt        # Full information (Japanese)
│   └── ai/
│       ├── about.md         # Company overview (English)
│       ├── founder.md       # Founder profile (English)
│       ├── llmo.md          # LLMO framework (English)
│       ├── company.md       # Company details (Japanese)
│       ├── products.md      # Products (Japanese)
│       ├── services.md      # Services (Japanese)
│       └── projects.md      # Projects (Japanese)
└── docs/
    └── en-llmo-architecture.md  # This document
```

## hreflang Implementation

```html
<link rel="alternate" hreflang="en" href="/en" />
<link rel="alternate" hreflang="ja" href="/" />
```

This tells search engines (and AI systems) that `/en` is the English version and `/` is the Japanese version, enabling proper language targeting without full i18n infrastructure.

## Conclusion

The /en LP + /ai/ Markdown architecture optimizes for:
1. **AI discoverability** — Clean Markdown is the most efficient format for LLM consumption
2. **Maintenance simplicity** — Fewer files, independent updates, no translation sync issues
3. **Cost effectiveness** — Maximum LLMO impact with minimal ongoing effort
4. **Practical prioritization** — Japanese humans get a full site; English humans get a comprehensive LP; AI systems get structured Markdown
