import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';

export const GET: APIRoute = async () => {
  const entry = await getEntry('faq', 'index');
  return new Response(entry?.body ?? '', {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
