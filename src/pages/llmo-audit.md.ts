import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# LLMO診断レポート — Propel-Lab

AI検索における可視性・引用性の構造監査。1ドメイン・¥98,000（税別）・納期2週間の範囲固定診断サービス。

- 申込ページ: https://propel-lab.co.jp/llmo-audit/
- サンプルレポート（PDF・16ページ）: https://propel-lab.co.jp/files/llmo-audit-sample-legacydram.pdf
- 提供: 合同会社 Propel-Lab（info@propel-lab.co.jp）

## 診断内容（範囲固定）

1. **llmo-checker 全ページスキャン** — LLMO Score（0-100）とチェック項目別内訳をページ単位で算出
2. **構造監査** — llms.txt / robots.txt のAIクローラー姿勢 / JSON-LD / canonical / hreflang
3. **AI引用実測（中核診断）** — Perplexity / Claude / Gemini / ChatGPT の4エンジンに実クエリを投入し、クエリ×エンジン×5試行で引用率を算出。競合3社との Share of Voice 比較を含む
4. **外部実測データ** — CrUX API の Core Web Vitals 実ユーザーデータ、インデックス状況・順位の外部確認
5. **GA4 / Search Console 実データ分析（精密診断）** — 閲覧権限の提供時のみ。権限付与は任意で、付与すると追加費用なしでアップグレード
6. **P0 / P1 / P2 改善ロードマップ** — PDFレポート + 改善チェックリストとして納品

## 診断の二段構え

- **標準診断（権限不要）** — 構造監査・AI引用実測・競合比較・Core Web Vitals。どんなドメインにも即日着手可能
- **精密診断（GA4/GSC閲覧権限の提供時）** — 上記 + 実クエリ/CTR/順位 + 流入チャネル・行動分析

## 価格・納期

- 価格: ¥98,000（税別）、1ドメイン、範囲固定・追加費用なし
- 納期: 申込内容確定から2週間以内
- 支払い: 請求書発行・銀行振込
- 申込: メールフォーム（商談・打ち合わせなし）

## 範囲外（含まれないもの）

- 改善の実装代行（レポートは実装着手可能な粒度で納品）
- 継続的なモニタリング
- 複数ドメイン（1申込 = 1ドメイン）
- 順位・引用の成果保証

実装まで支援が必要な場合は、診断購入者向けの実装伴走（月額¥300,000）を診断納品時に案内。

## 関連リソース

- 無料セルフチェック: llmo-checker (OSS) — https://github.com/open-llmo/llmo-checker
- LLMOフレームワーク: https://llmoframework.com/
- サービス一覧: https://propel-lab.co.jp/services/
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
