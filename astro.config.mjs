// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://propel-lab.co.jp',
  base: '/',
  compressHTML: false,
  integrations: [
    sitemap({
      // AI/LLM-facing resources live in public/ (not Astro pages), so the
      // sitemap generator can't discover them. List them explicitly so the
      // LLMO "machine-readable URL" claim is actually crawlable/declared.
      customPages: [
        'https://propel-lab.co.jp/ai/',
        'https://propel-lab.co.jp/ai/about.md',
        'https://propel-lab.co.jp/ai/company.md',
        'https://propel-lab.co.jp/ai/products.md',
        'https://propel-lab.co.jp/ai/services.md',
        'https://propel-lab.co.jp/ai/projects.md',
        'https://propel-lab.co.jp/ai/founder.md',
        'https://propel-lab.co.jp/ai/learningmate.md',
        'https://propel-lab.co.jp/ai/llmo.md',
        'https://propel-lab.co.jp/docs/architecture.md',
        'https://propel-lab.co.jp/docs/ai-strategy.md',
        'https://propel-lab.co.jp/docs/tech-stack.md',
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
