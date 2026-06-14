# LLMO — LLM Optimization Framework

## What is LLMO?

LLMO (LLM Optimization) is the practice of optimizing web content so that Large Language Models — such as ChatGPT, Claude, Gemini, and Perplexity — can accurately understand, reference, and cite your information.

LLMO includes approaches such as AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization).

## Why LLMO Matters

As AI-powered search and conversational assistants become mainstream, traditional SEO alone is no longer sufficient. LLMO ensures your content is discoverable not just by search engines, but by AI systems that synthesize answers from web content.

## The Three Paths of LLMO

### 1. Structured Data (JSON-LD)
Embed machine-readable metadata using Schema.org vocabulary. This helps LLMs understand entities, relationships, and factual claims on your site.

- Organization, Person, Service, Product schemas
- FAQ schemas for direct Q&A extraction
- Book schemas for publications

### 2. llms.txt
A standardized file (similar to robots.txt) that provides LLMs with a structured overview of your site's content, key information, and links to detailed resources.

- Placed at the root: `/llms.txt`
- Human-readable Markdown format
- Links to detailed AI-focused Markdown files

### 3. Markdown Content Delivery (/ai/ directory)
Serve clean, well-structured Markdown files specifically for AI consumption. LLMs parse Markdown more efficiently than HTML.

- `/ai/about.md` — Company overview
- `/ai/founder.md` — Founder background
- `/ai/services.md` — Service details
- `/ai/products.md` — Product information
- `/ai/projects.md` — Project information
- `/ai/llmo.md` — This document

## Propel-Lab's LLMO Implementation

Propel-Lab practices what it teaches. This website implements all three LLMO paths:

1. **JSON-LD schemas scoped per page** — common entities on every page (Organization, WebSite, Person), and page-relevant entities only where they belong: Service ×8 + FAQPage on the home page, Book schemas on `/learningmate/`, MusicGroup on `/yureru/`, ItemList on `/products/`. The home page also exposes BookSeries metadata via `/llms-full.txt`.
2. **llms.txt** with English / Japanese / full variants, plus links to detailed Markdown resources.
3. **/ai/ directory** with Markdown files covering company, services, products, projects, founder, LLMO framework, and an English `about.md` overview.

## Learn More

- Book: "LLMO — Three Paths for AI to Discover Your Content" (Kindle / Zenn)
  - Kindle: https://www.amazon.co.jp/stores/author/B0GQNPRCGF
  - Zenn: https://zenn.dev/kenimo49/books/llmo-ai-search-optimization
- Company: https://propel-lab.co.jp/
- English Page: https://propel-lab.co.jp/en/
- AI Information Hub: https://propel-lab.co.jp/ai/
