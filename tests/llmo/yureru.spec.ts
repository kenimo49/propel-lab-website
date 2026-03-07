import { url } from '../helpers';
import { test, expect } from '@playwright/test';

test.describe('Yureru LLMO', () => {
  test('/yureru ページが存在する', async ({ page }) => {
    await page.goto(url('/yureru'));
    await expect(page.locator('h1')).toContainText('Yureru');
  });

  test('/yureru.md がMarkdownで返る', async ({ request }) => {
    const res = await request.get(url('/yureru.md'));
    expect(res.status()).toBe(200);
    const contentType = res.headers()['content-type'];
    expect(contentType).toContain('text/markdown');
    const text = await res.text();
    expect(text).toContain('Yumei');
    expect(text).toContain('Silk Reign');
    expect(text).toContain('Suno AI');
  });

  test('Yureruページにアーティスト情報がある', async ({ page }) => {
    await page.goto(url('/yureru'));
    const content = await page.textContent('body');
    expect(content).toContain('Yumei');
    expect(content).toContain('Silk Reign');
  });

  test('JSON-LDにMusicGroupスキーマがある', async ({ page }) => {
    await page.goto(url('/'));
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    let found = false;
    for (const script of scripts) {
      const text = await script.textContent();
      if (text && text.includes('MusicGroup')) {
        const data = JSON.parse(text);
        const mg = Array.isArray(data) ? data.find((d: any) => d['@type'] === 'MusicGroup') : data;
        if (mg) {
          expect(mg.name).toBe('Yureru');
          found = true;
        }
      }
    }
    expect(found).toBe(true);
  });

  test('llms.txt にYureru情報がある', async ({ request }) => {
    const res = await request.get(url('/llms.txt'));
    const text = await res.text();
    expect(text).toContain('Yumei');
    expect(text).toContain('yureru.md');
  });
});
