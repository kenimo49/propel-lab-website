import { url } from '../helpers';
import { test, expect } from '@playwright/test';

test.describe('JSON-LD 構造化データ', () => {
  test('トップページにJSON-LDが含まれる', async ({ page }) => {
    await page.goto(url('/'));
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    expect(scripts.length).toBeGreaterThan(0);
  });

  test('Organizationスキーマに会社情報が含まれる', async ({ page }) => {
    await page.goto(url('/'));
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    let found = false;
    for (const script of scripts) {
      const text = await script.textContent();
      if (text && text.includes('Organization')) {
        const data = JSON.parse(text);
        const org = Array.isArray(data) ? data.find((d: any) => d['@type'] === 'Organization') : data;
        if (org && org['@type'] === 'Organization') {
          expect(org.name).toContain('Propel-Lab');
          found = true;
        }
      }
    }
    expect(found).toBe(true);
  });

  test('schema.jsonldが有効なJSONである', async ({ request }) => {
    const res = await request.get(url('/schema.jsonld'));
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(() => JSON.parse(text)).not.toThrow();
  });
});
