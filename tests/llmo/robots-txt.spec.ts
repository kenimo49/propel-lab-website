import { url } from '../helpers';
import { test, expect } from '@playwright/test';

test.describe('robots.txt', () => {
  test('robots.txt が存在する', async ({ request }) => {
    const res = await request.get(url('/robots.txt'));
    expect(res.status()).toBe(200);
  });

  test('GPTBot が許可されている', async ({ request }) => {
    const res = await request.get(url('/robots.txt'));
    const text = await res.text();
    expect(text).toContain('GPTBot');
    expect(text).toContain('Allow: /');
  });

  test('ClaudeBot が許可されている', async ({ request }) => {
    const res = await request.get(url('/robots.txt'));
    const text = await res.text();
    expect(text).toContain('ClaudeBot');
  });

  test('Sitemap URLが含まれている', async ({ request }) => {
    const res = await request.get(url('/robots.txt'));
    const text = await res.text();
    expect(text).toContain('Sitemap:');
  });
});
