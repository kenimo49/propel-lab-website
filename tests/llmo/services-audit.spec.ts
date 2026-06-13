import { url } from '../helpers';
import { test, expect } from '@playwright/test';

test.describe('/services サービスハブ', () => {
  test('ページが表示され、3 Tier の価格が明示されている', async ({ page }) => {
    await page.goto(url('/services/'));
    await expect(page.locator('h1')).toContainText('ご依頼いただけるサービス');
    const body = await page.locator('body').textContent();
    expect(body).toContain('無料');
    expect(body).toContain('¥98,000');
    expect(body).toContain('¥300,000');
  });

  test('診断LPへの1クリック導線がある', async ({ page }) => {
    await page.goto(url('/services/'));
    const link = page.locator('a[href$="/llmo-audit/"]').first();
    await expect(link).toBeVisible();
  });

  test('サンプルレポートPDFへの導線がある', async ({ page }) => {
    await page.goto(url('/services/'));
    const link = page.locator('a[href$="llmo-audit-sample-legacydram.pdf"]').first();
    await expect(link).toBeVisible();
  });

  test('/services.md がMarkdownで返る', async ({ request }) => {
    const res = await request.get(url('/services.md'));
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('text/markdown');
    const text = await res.text();
    expect(text).toContain('LLMO診断レポート');
    expect(text).toContain('¥98,000');
  });
});

test.describe('/llmo-audit 診断LP', () => {
  test('ページが表示され、価格・納期・範囲が明示されている', async ({ page }) => {
    await page.goto(url('/llmo-audit/'));
    const body = await page.locator('body').textContent();
    expect(body).toContain('¥98,000');
    expect(body).toContain('2週間');
    expect(body).toContain('1ドメイン');
    expect(body).toContain('診断に含まれないもの');
  });

  test('申込CTAに audit_apply 計測属性がある', async ({ page }) => {
    await page.goto(url('/llmo-audit/'));
    const cta = page.locator('a[data-audit-apply]').first();
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute('href');
    expect(href).toContain('mailto:info@propel-lab.co.jp');
  });

  test('JSON-LD に Service + Offer(98000 JPY) と FAQPage がある', async ({ page }) => {
    await page.goto(url('/llmo-audit/'));
    const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
    const entities = scripts.flatMap((s) => {
      const parsed = JSON.parse(s);
      return Array.isArray(parsed) ? parsed : [parsed];
    });

    const service = entities.find((e) => e['@type'] === 'Service' && e['@id']?.includes('service-llmo-audit'));
    expect(service, 'Service schema (llmo-audit) が見つからない').toBeTruthy();
    expect(service.offers?.price).toBe('98000');
    expect(service.offers?.priceCurrency).toBe('JPY');

    const faq = entities.find((e) => e['@type'] === 'FAQPage');
    expect(faq, 'FAQPage schema が見つからない').toBeTruthy();
    expect(faq.mainEntity.length).toBeGreaterThanOrEqual(5);
  });

  test('/llmo-audit.md がMarkdownで返る', async ({ request }) => {
    const res = await request.get(url('/llmo-audit.md'));
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('text/markdown');
    const text = await res.text();
    expect(text).toContain('AI引用実測');
  });

  test('サンプルレポートPDFが配信される', async ({ request }) => {
    const res = await request.get(url('/files/llmo-audit-sample-legacydram.pdf'));
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('pdf');
  });
});

test.describe('サービス導線', () => {
  test('ヘッダーに「ご依頼」ナビがある', async ({ page }) => {
    await page.goto(url('/'));
    const nav = page.locator('header a[href$="/services/"]').first();
    await expect(nav).toHaveText('ご依頼');
  });

  test('llms.txt にサービス導線が含まれる', async ({ request }) => {
    const res = await request.get(url('/llms.txt'));
    const text = await res.text();
    expect(text).toContain('/llmo-audit/');
    expect(text).toContain('/services/');
  });
});
