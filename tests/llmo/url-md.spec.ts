import { url } from '../helpers';
import { test, expect } from '@playwright/test';

test.describe('URL.md パターン', () => {
  test('/company.md がMarkdownで返る', async ({ request }) => {
    const res = await request.get(url('/company.md'));
    expect(res.status()).toBe(200);
    const contentType = res.headers()['content-type'];
    expect(contentType).toContain('text/markdown');
    const text = await res.text();
    expect(text).toContain('Propel-Lab');
  });

  test('/products.md がMarkdownで返る', async ({ request }) => {
    const res = await request.get(url('/products.md'));
    expect(res.status()).toBe(200);
    const contentType = res.headers()['content-type'];
    expect(contentType).toContain('text/markdown');
    const text = await res.text();
    expect(text).toContain('LearningMate');
  });

  test('/faq.md がMarkdownで返る', async ({ request }) => {
    const res = await request.get(url('/faq.md'));
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain('FAQ');
  });
});
