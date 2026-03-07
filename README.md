# Propel-Lab Corporate Website

合同会社 Propel-Lab のコーポレートサイト。LLMO（LLM Optimization）に最適化された静的サイトです。

🌐 **https://propel-lab.co.jp**

## 特徴

- **LLMO最適化** — AIクローラーに最適化された構造設計
- **5段階AI理解構造** — llms.txt → /ai/ → /docs/ → llms-full.txt
- **JSON-LD 11スキーマ** — Organization, Person, Service, Book, MusicGroup, FAQPage, WebSite
- **URL.mdパターン** — 全主要ページにMarkdownエンドポイントを提供
- **Playwrightテスト** — 33テストでLLMO品質を自動検証
- **GitHub Actions CI/CD** — pushから約30秒で自動デプロイ

## 技術スタック

| 技術 | 用途 |
|------|------|
| [Astro](https://astro.build/) | 静的サイトジェネレーター |
| [Tailwind CSS](https://tailwindcss.com/) | スタイリング |
| [Playwright](https://playwright.dev/) | E2E / LLMOテスト |
| [GitHub Pages](https://pages.github.com/) | ホスティング（無料） |
| [Let's Encrypt](https://letsencrypt.org/) | SSL証明書（自動） |

## ページ構成

| ページ | URL | 内容 |
|--------|-----|------|
| トップ | `/` | Hero / 事業紹介 / プロフィール / FAQ / お問い合わせ |
| 会社概要 | `/company` | 会社情報 |
| 事業紹介 | `/products` | 4事業の詳細 |
| Yureru | `/yureru` | 音楽プロジェクト |
| LearningMate | `/learningmate` | 出版・教育コンテンツ |

## LLMO対応ファイル

```
public/
├── llms.txt              # AI向けサイトガイド
├── llms-full.txt         # 全情報統合版
├── robots.txt            # AIクローラー許可設定
├── .well-known/
│   └── security.txt      # セキュリティ連絡先
├── ai/                   # AI向け構造化Markdown
│   ├── company.md
│   ├── products.md
│   ├── services.md
│   └── projects.md
└── docs/                 # 技術詳細Markdown
    ├── architecture.md
    ├── ai-strategy.md
    └── tech-stack.md

src/pages/
├── company.md.ts         # URL.mdパターン
├── products.md.ts
├── learningmate.md.ts
└── yureru.md.ts
```

## 開発

```bash
# セットアップ
npm install

# 開発サーバー
npm run dev

# ビルド
npm run build

# テスト
npx playwright test
```

## テスト

LLMO対応を33のPlaywrightテストで自動検証しています。

```bash
# 全テスト実行
npx playwright test

# 特定カテゴリ
npx playwright test tests/llmo/json-ld.spec.ts
npx playwright test tests/llmo/llms-txt.spec.ts
npx playwright test tests/llmo/url-md.spec.ts
```

## 関連書籍

このサイト自体がLLMO最適化の実装例です。詳しくは以下の書籍をご覧ください。

- [LLMO — AIがあなたのコンテンツを見つける3つの経路](https://amzn.asia/d/02zAl1VB)（Kindle）
- [実践Claude Code](https://amzn.asia/d/03Qnb8QT)（Kindle）
- [LLMOに最適化されたホームページをゼロから作る](https://zenn.dev/kenimo49/books/llmo-website-builder)（Zenn Book）

## ライセンス

© 2025 合同会社 Propel-Lab
