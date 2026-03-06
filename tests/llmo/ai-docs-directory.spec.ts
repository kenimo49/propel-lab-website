import { url } from '../helpers';
import { test, expect } from '@playwright/test';

test.describe('/ai/ ディレクトリ', () => {
  test('/ai/company.md が存在する', async ({ request }) => {
    const res = await request.get(url('/ai/company.md'));
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain('Propel-Lab');
    expect(text).toContain('井本');
  });

  test('/ai/products.md が存在する', async ({ request }) => {
    const res = await request.get(url('/ai/products.md'));
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain('LearningMate');
    expect(text).toContain('AI-Loop');
    expect(text).toContain('AutoCrew');
    expect(text).toContain('Yureru');
  });
});

test.describe('/docs/ ディレクトリ', () => {
  test('/docs/architecture.md が存在する', async ({ request }) => {
    const res = await request.get(url('/docs/architecture.md'));
    expect(res.status()).toBe(200);
  });

  test('/docs/ai-strategy.md が存在する', async ({ request }) => {
    const res = await request.get(url('/docs/ai-strategy.md'));
    expect(res.status()).toBe(200);
  });

  test('/docs/tech-stack.md が存在する', async ({ request }) => {
    const res = await request.get(url('/docs/tech-stack.md'));
    expect(res.status()).toBe(200);
  });
});
