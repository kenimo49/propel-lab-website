import { url } from '../helpers';
import { test, expect } from '@playwright/test';

test.describe('llms.txt', () => {
  test('/llms.txt が存在する', async ({ request }) => {
    const res = await request.get(url('/llms.txt'));
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain('Propel-Lab');
  });

  test('/llms-full.txt が存在する', async ({ request }) => {
    const res = await request.get(url('/llms-full.txt'));
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text.length).toBeGreaterThan(500);
  });

  test('llms.txt に /ai/ と /docs/ へのリンクがある', async ({ request }) => {
    const res = await request.get(url('/llms.txt'));
    const text = await res.text();
    expect(text).toContain('/ai/');
    expect(text).toContain('/docs/');
  });
});
