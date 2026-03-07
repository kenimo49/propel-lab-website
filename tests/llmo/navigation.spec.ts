import { url } from '../helpers';
import { test, expect } from '@playwright/test';

test.describe('ナビゲーション・内部リンク', () => {
  test('全ページの内部リンクが404にならない', async ({ page, request }) => {
    const pagesToCheck = ['/', '/products', '/company', '/yureru'];
    const checked = new Set<string>();
    const errors: string[] = [];

    for (const pageUrl of pagesToCheck) {
      await page.goto(pageUrl);
      const links = await page.locator('a[href]').all();

      for (const link of links) {
        const href = await link.getAttribute('href');
        if (
          href &&
          !href.startsWith('http') &&
          !href.startsWith('mailto:') &&
          !href.startsWith('#') &&
          !checked.has(href)
        ) {
          checked.add(href);
          const res = await request.get(href);
          if (res.status() === 404) {
            errors.push(`${href} → 404 (found on ${pageUrl})`);
          }
        }
      }
    }

    expect(errors, `404リンク検出:\n${errors.join('\n')}`).toHaveLength(0);
  });

  test('ナビゲーションリンクが正しいパスを持つ', async ({ page }) => {
    await page.goto(url('/'));
    const navLinks = await page.locator('header a[href]').all();
    
    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        expect(href, `ナビリンク ${href} がbase pathを含んでいない`).toMatch(/^\//);
      }
    }
  });

  test('外部リンク（SNS等）にtarget="_blank"がある', async ({ page }) => {
    await page.goto(url('/'));
    const externalLinks = await page.locator('a[href^="http"]').all();
    
    for (const link of externalLinks) {
      const href = await link.getAttribute('href');
      const target = await link.getAttribute('target');
      // 外部リンクは新しいタブで開くべき
      if (href && !href.includes('propel-lab.co.jp') && !href.includes('astro.build') && !href.includes('withastro')) {
        expect(target, `${href} にtarget="_blank"がない`).toBe('_blank');
      }
    }
  });
});
