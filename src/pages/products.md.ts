import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const entries = await getCollection('services');
  const projects = entries.filter((e) => e.data.kind === 'project');
  const sorted = projects.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  const header = `# 自社プロジェクト・LLMO実証ラボ — Propel-Lab\n\nPropel-Lab が自社で運用しているプロジェクト群。LLMOフレームワーク・harness-ops の実証実験の場。\n\n- ページ: https://propel-lab.co.jp/products/\n- 診断・伴走サービスは https://propel-lab.co.jp/services/ を参照\n\n`;
  const markdown = header + sorted.map((entry) => entry.body).join('\n\n---\n\n');
  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
