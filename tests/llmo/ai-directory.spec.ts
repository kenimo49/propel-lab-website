import { url } from '../helpers';
import { test, expect } from '@playwright/test';

test.describe('/ai/ ディレクトリ検証', () => {
  test('/ai/company.md が200で返る', async ({ request }) => {
    const res = await request.get(url('/ai/company.md'));
    expect(res.status()).toBe(200);
  });

  test('/ai/company.md に会社情報が含まれる', async ({ request }) => {
    const res = await request.get(url('/ai/company.md'));
    const text = await res.text();
    expect(text).toContain('Propel-Lab');
    expect(text).toContain('福岡');
  });

  test('/ai/products.md が200で返る', async ({ request }) => {
    const res = await request.get(url('/ai/products.md'));
    expect(res.status()).toBe(200);
  });

  test('/ai/products.md に事業情報が含まれる', async ({ request }) => {
    const res = await request.get(url('/ai/products.md'));
    const text = await res.text();
    expect(text).toContain('LearningMate');
    expect(text).toContain('AI-Loop');
    expect(text).toContain('AutoCrew');
    expect(text).toContain('Yureru');
  });
});
