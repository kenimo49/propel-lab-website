import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# ご依頼いただけるサービス — Propel-Lab

Propel-Lab のサービスはすべて、範囲と価格を先に明示した「プロダクト化サービス」です。見積もりのための商談はありません。

- ページ: https://propel-lab.co.jp/services/
- 問い合わせ: info@propel-lab.co.jp

## サービス一覧（3段階）

### Tier 0: llmo-checker — 無料（OSS・MIT License）

サイトのAI検索対応度を LLMO Score（0-100）でセルフチェックできるオープンソースCLI。llms.txt・robots.txt・JSON-LD・canonical/hreflang・メタ情報の5項目をスキャン。

- GitHub: https://github.com/open-llmo/llmo-checker

### Tier 1: LLMO診断レポート — ¥98,000（税別・1ドメイン・納期2週間）【主力サービス】

構造監査 + Perplexity / Claude / Gemini / ChatGPT 4エンジンへの実クエリ投入による「AI引用実測」+ 競合 Share of Voice 比較 + P0/P1/P2 優先度付き改善ロードマップ。PDFレポートと改善チェックリストを納品。範囲固定・フォーム申込・商談なし。

- 詳細・申込: https://propel-lab.co.jp/llmo-audit/
- サンプルレポート（PDF・14ページ・全数値実測）: https://propel-lab.co.jp/files/llmo-audit-sample-legacydram.pdf

### Tier 2: 実装伴走 — ¥300,000（税別・月額）

月次再診断 + 改善実装の支援 + 非同期の質問対応。診断レポート購入者からの指名のみ受付（営業活動は行わない）。

## 実績・信頼性

- LLMO実践書5冊を継続出版（LLMOクイックスタート / AI検索最適化 / 店舗MEO×LLMO 等、Kindle/Zenn）
- LLMOフレームワーク（llmoframework.com）の策定・運営
- 全数値実測主義 — 診断レポートの数値はすべて実測値。propel-lab.co.jp 自体が JSON-LD・llms.txt・URL.md を実装した LLMO 実装リファレンス
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
