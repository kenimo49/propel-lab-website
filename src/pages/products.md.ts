import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const entries = await getCollection('services');
  const sorted = entries.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  const markdown = sorted.map((entry) => entry.body).join('\n\n---\n\n');
  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
