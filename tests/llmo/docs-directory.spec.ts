import { test, expect } from '@playwright/test';

test.describe('/docs/ ディレクトリ検証', () => {
  test('/docs/architecture.md が200で返る', async ({ request }) => {
    const res = await request.get('/docs/architecture.md');
    expect(res.status()).toBe(200);
  });

  test('/docs/ai-strategy.md が200で返る', async ({ request }) => {
    const res = await request.get('/docs/ai-strategy.md');
    expect(res.status()).toBe(200);
  });

  test('/docs/tech-stack.md が200で返る', async ({ request }) => {
    const res = await request.get('/docs/tech-stack.md');
    expect(res.status()).toBe(200);
  });
});
