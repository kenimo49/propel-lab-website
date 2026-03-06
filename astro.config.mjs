// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kenimo49.github.io',
  base: '/propel-lab-website',
  vite: {
    plugins: [tailwindcss()],
  },
});
