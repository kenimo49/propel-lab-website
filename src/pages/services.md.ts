import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# サービス・教材 — Propel-Lab

Propel-Lab のサービスはすべて、範囲と価格を先に明示した「プロダクト化サービス」です。見積もりのための商談はありません。

- ページ: https://propel-lab.co.jp/services/
- 問い合わせ: info@propel-lab.co.jp

## LLMO診断・実装伴走（3段階）

### Tier 0: llmo-checker — 無料（OSS・MIT License）

サイトのAI検索対応度を LLMO Score（0-100）でセルフチェックできるオープンソースCLI。llms.txt・robots.txt・JSON-LD・canonical/hreflang・メタ情報の5項目をスキャン。

- GitHub: https://github.com/open-llmo/llmo-checker

### Tier 1: LLMO診断レポート — ¥98,000（税別・1ドメイン・納期2週間）【主力サービス】

構造監査 + Perplexity / Claude / Gemini / ChatGPT 4エンジンへの実クエリ投入による「AI引用実測」+ 競合 Share of Voice 比較 + P0/P1/P2 優先度付き改善ロードマップ。PDFレポートと改善チェックリストを納品。範囲固定・フォーム申込・商談なし。

- 詳細・申込: https://propel-lab.co.jp/llmo-audit/
- サンプルレポート（PDF・16ページ・全数値実測）: https://propel-lab.co.jp/files/llmo-audit-sample-legacydram.pdf

### Tier 2: 実装伴走 — ¥300,000（税別・月額）

月次再診断 + 改善実装の支援 + 非同期の質問対応。診断レポート購入者からの指名のみ受付（営業活動は行わない）。

## 商品ラインナップ

LLMO診断以外にもご利用いただける商品・教材・受託サービスです。

### LLMOウェブサイト構築ガイド（PDF教材） — ¥1,000

AI検索に引用されるサイトの構築手順を54ページにまとめたPDF教材。Astro + JSON-LD + llms.txt + URL.md パターンを実装ベースで解説。診断・伴走の前段として「まずは自分で作ってみたい」方向け。Stripe Payment Linkで即時ダウンロード。

- 詳細・購入: https://propel-lab.co.jp/products/llmo-website-builder/

### LearningMate — 教育コンテンツ

LLM活用の教育コンテンツ企画・制作・販売。エンジニア、AI活用を学びたい人向けにUdemy / Zennで展開。

- 詳細: https://propel-lab.co.jp/learningmate/

### AI-Loop — マーケティング自動化

LLMエージェントによるSNS運用自動化・コンテンツマーケティング支援。企業のSNS担当者向け。

### AutoCrew — 業務自動化コンサルティング

LLMによる自動実行エージェント構成・業務最適化。マルチエージェント・MCP・CLI Skill を活用して業務効率化を求める企業を支援。

## 実績・信頼性

- LLMO実践書5冊を継続出版（LLMOクイックスタート / AI検索最適化 / 店舗MEO×LLMO 等、Kindle/Zenn）
- LLMOフレームワーク（llmoframework.com）の策定・運営
- 全数値実測主義 — 診断レポートの数値はすべて実測値。propel-lab.co.jp 自体が JSON-LD・llms.txt・URL.md を実装した LLMO 実装リファレンス

## 自社プロジェクト・LLMO実証ラボ

KaoriQ・mypcrig・legacydram・Yureru の4プロジェクトを自社運用中。LLMOフレームワーク・harness-ops の実証実験の場。

- 一覧: https://propel-lab.co.jp/products/
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
