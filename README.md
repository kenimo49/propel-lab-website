# propel-lab-website

合同会社Propel-Lab コーポレートサイト（LLMO対応）

## 技術スタック
- **Astro** — 静的サイトジェネレーター
- **Tailwind CSS** — スタイリング
- **GitHub Pages** — ホスティング
- **JSON-LD** — 構造化データ

## サイト構成

```
propel-lab.co.jp/
├── index.html          # トップページ
├── company.html        # 会社概要
├── products.html       # 事業紹介
├── schema.jsonld       # JSON-LD構造化データ（一括）
├── llms.txt            # LLM向けサマリー
├── llms-full.txt       # LLM向け詳細
├── sitemap.xml         # サイトマップ（Astro自動生成）
├── robots.txt          # クローラー設定
│
├── ai/                 # 🤖 AI向け — 事実データ（Markdown）
│   ├── company.md      # 会社情報（基本情報・代表者・沿革）
│   └── products.md     # 事業情報（4事業の詳細）
│
└── docs/               # 📚 AI向け — 技術・思想（Markdown）
    ├── architecture.md # システム設計思想
    ├── ai-strategy.md  # AI活用戦略
    └── tech-stack.md   # 技術スタック詳細
```

## 5段階AI理解構造

| Level | ファイル | LLMの理解 |
|-------|---------|----------|
| 1 | llms.txt | この会社の概要 |
| 2 | /ai/company.md | 会社の詳細・代表者 |
| 3 | /ai/products.md | 何ができるか |
| 4 | /docs/tech-stack.md | どんな技術を使ってるか |
| 5 | /docs/ai-strategy.md | AIをどう活用してるか |

## ページ構成

### トップページ (index.html)
- ヒーロー: キャッチコピー + ミッション
- 事業紹介: 4事業のカード
- 代表者プロフィール: 権威性・実績・SNSリンク
- 実績セクション: 数字で見るPropel-Lab
- FAQ: LLMO用Q&A
- お問い合わせ: メール・SNS

### 会社概要 (company.html)
- 会社情報詳細
- 代表者経歴
- 沿革

### 事業紹介 (products.html)
- 4事業の詳細説明
- 各事業の対象・技術・プラットフォーム

## 開発
```bash
npm install
npm run dev      # 開発サーバー
npm run build    # 静的ビルド
```

## デプロイ
GitHub Actions → GitHub Pages（mainブランチpush時に自動デプロイ）
ドメイン: www.propel-lab.co.jp（お名前.com → GitHub Pages CNAME）
