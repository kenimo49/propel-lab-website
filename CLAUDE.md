# CLAUDE.md — propel-lab-website

## プロジェクト概要
合同会社Propel-Labのコーポレートサイト。LLMO（LLM Optimization）対応が最重要要件。

## 技術スタック
- Astro（静的サイトジェネレーター）
- TypeScript
- Tailwind CSS
- GitHub Pages（ホスティング）

## Astroディレクトリ構成
```
src/
├── layouts/
│   └── Layout.astro          # ベースレイアウト（JSON-LD埋め込み）
├── pages/
│   ├── index.astro           # トップページ（ワンページ構成）
│   ├── company.astro         # 会社概要ページ
│   └── products.astro        # 事業紹介ページ
├── components/
│   ├── Header.astro           # ヘッダー・ナビゲーション
│   ├── Footer.astro           # フッター
│   ├── Hero.astro             # ヒーローセクション
│   ├── Services.astro         # 事業紹介カード
│   ├── Profile.astro          # 代表者プロフィール
│   ├── Achievements.astro     # 実績・数字
│   ├── FAQ.astro              # FAQセクション
│   └── Contact.astro          # お問い合わせ
├── data/
│   ├── company.ts             # 会社データ
│   ├── services.ts            # 事業データ
│   ├── faq.ts                 # FAQデータ
│   └── profile.ts             # 代表者データ
└── styles/
    └── global.css             # グローバルスタイル

public/
├── llms.txt                   # LLM向け要約
├── llms-full.txt              # LLM向け詳細
├── robots.txt                 # クローラー設定
├── schema.jsonld              # JSON-LD構造化データ
├── favicon.svg
├── ai/                        # AI専用ディレクトリ
│   ├── company.md
│   └── products.md
├── docs/                      # 技術・思想ディレクトリ
│   ├── architecture.md
│   ├── ai-strategy.md
│   └── tech-stack.md
└── images/
```

## LLMO最重要ルール

### 必須1: JSON-LD構造化データ (schema.jsonld + 各ページhead)
以下のスキーマを必ず含める:
1. `Organization` — 会社情報
2. `WebSite` — サイト情報
3. `Person` — 代表者情報（sameAs に全SNSリンク）
4. `Service` × 4 — 各事業
5. `FAQPage` — FAQ（Q&A形式）

### 必須2: /ai/ ディレクトリ
- `/ai/company.md` — 会社情報をMarkdownで。LLMが直読みで即理解
- `/ai/products.md` — 事業情報をMarkdownで。各事業のカテゴリ・概要・対象・技術

### 必須3: /docs/ ディレクトリ
- `/docs/architecture.md` — システム設計思想（少数精鋭×AIエージェント分業）
- `/docs/ai-strategy.md` — AI活用戦略（LLM実務活用・エージェント設計・コスト最適化）
- `/docs/tech-stack.md` — 技術スタック詳細（各事業の技術構成）

### 必須4: llms.txt
- `/llms.txt` — 300語以内の要約版。末尾に/ai/と/docs/へのリンク
- `/llms-full.txt` — 全情報の詳細版
- フォーマット: https://llmstxt.org/ 準拠

### 必須5: robots.txt
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://www.propel-lab.co.jp/sitemap.xml
```

## デザイン方針
- シンプル・クリーン・プロフェッショナル
- カラー: ダークネイビー (#1a1a2e) + アクセント (#e94560)
- ワンページ構成のトップ + 会社概要・事業紹介の個別ページ
- モバイルファースト・レスポンシブ
- 日本語メイン
- ヘッダー: ロゴ + ナビ（トップ / 事業紹介 / 会社概要 / お問い合わせ）
- フッター: 会社情報 + SNSリンク一覧

## 会社情報（正確に使うこと）
- 会社名: 合同会社 Propel-Lab（プロペルラボ）
- 所在地: 福岡県福岡市中央区天神4丁目6-28 天神ファーストビル7階
- 代表者: 井本 賢（いもと けん / ken imoto）
- 設立: 2025年4月24日
- 資本金: 50万円
- メール: info@propel-lab.co.jp
- URL: https://www.propel-lab.co.jp/
- ミッション: 「仕組みとエンジニアリングの力で、次世代の経営モデルを構築する」

## 事業情報（正確に使うこと）

### LearningMate
- カテゴリ: 教育コンテンツ
- 概要: LLM活用の教育コンテンツ企画・制作・販売
- プラットフォーム: Udemy, Zenn
- 対象: エンジニア、AI活用を学びたい人
- 技術: Claude Code, Context Engineering

### AI-Loop
- カテゴリ: マーケティング自動化
- 概要: SNS運用自動化・コンテンツマーケティング支援
- 対象: 企業のSNS担当者
- 技術: LLMエージェント, インプレッション分析

### AutoCrew
- カテゴリ: 業務自動化コンサルティング
- 概要: LLMによる自動実行エージェント構成・業務最適化
- 対象: 業務効率化を求める企業
- 技術: マルチエージェント, MCP, CLI Skill

### Yureru
- カテゴリ: 音楽・クリエイティブ
- 概要: 感動の構造化と音楽化プロジェクト
- キャラクター: Yumei（メイン）、Silk Reign（洋楽バラード）
- 技術: Suno AI, Stable Diffusion, Canva, CapCut
- YouTube: https://youtube.com/@Yureru-s4n

## 代表者情報（正確に使うこと）
- 名前: 井本 賢 / ken imoto
- エンジニア歴8年
- 専門: Android/Web開発、ロボティクス、AIエージェント
- 元ロボットエンジニア: Pepper × SLAM（Aldebaran共同開発 / SoftBankイベント実稼働）
- Kindle著者: 4冊（実践Claude Code / LLMO 等）
- Qiita: 39,000+ PV（SSH記事 18,000PV / CLAUDE.md防御 8,000PV）
- SNSリンク:
  - LinkedIn: https://linkedin.com/in/kenimo49
  - Qiita: https://qiita.com/kenimo49
  - Zenn: https://zenn.dev/kenimo49
  - note: https://note.com/kenimo49
  - X: https://x.com/kenimo49
  - YouTube: https://youtube.com/@Yureru-s4n
  - Kindle: https://www.amazon.co.jp/stores/author/B0GQNPRCGF

## 注意事項
- 財務数字（売上・利益等）は公開しない
- 個人の住所・電話番号は公開しない
- 資本金50万円は会社概要に含めてOK
- persona-manager等のプロダクト名は公開しない（事業名で表記）
