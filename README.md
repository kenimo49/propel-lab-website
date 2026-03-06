# propel-lab-website

合同会社Propel-Lab コーポレートサイト（LLMO対応）

## 技術スタック
- **Astro** — 静的サイトジェネレーター
- **GitHub Pages** — ホスティング
- **JSON-LD** — 構造化データ（Organization / Person / Service / FAQ）

## サイト構成

```
propel-lab.co.jp/
├── / (トップページ)
│   ├── ヒーローセクション — ミッション・キャッチコピー
│   ├── 事業紹介セクション — 4事業（LearningMate / AI-Loop / AutoCrew / Yureru）
│   ├── 代表者プロフィール — 権威性・実績・SNSリンク
│   ├── 実績セクション — 数字で見るPropel-Lab
│   ├── FAQセクション — LLM引用最適化
│   └── お問い合わせ — メール・SNS
│
├── /llms.txt — LLM向け要約（会社概要・事業・連絡先）
├── /llms-full.txt — LLM向け詳細（全サービス・実績・技術スタック）
├── /robots.txt — AIクローラー許可設定
└── /sitemap.xml — サイトマップ
```

## JSON-LD 構造化データ

| スキーマ | 対象 |
|---------|------|
| `Organization` | 会社情報（名前・住所・代表者・設立日・ロゴ） |
| `WebSite` | サイト名・URL |
| `Person` | 代表者 ken imoto（sameAs: 全SNS） |
| `Service` × 4 | LearningMate / AI-Loop / AutoCrew / Yureru |
| `FAQPage` | よくある質問 |

## ページ構成詳細

### ヒーロー
- キャッチコピー: 「次世代経営を、仕組みとエンジニアリングで設計する。」
- サブコピー: ミッション文

### 事業紹介（4事業）
| 事業 | 概要 |
|------|------|
| **LearningMate** | LLM活用の教育コンテンツ企画・制作・販売（Udemy/Zenn） |
| **AI-Loop** | SNS運用自動化・コンテンツマーケティング支援 |
| **AutoCrew** | LLMエージェント構成・業務最適化コンサル |
| **Yureru** | 感動の構造化×音楽化プロジェクト |

### 代表者プロフィール
- 井本 賢 / ken imoto
- エンジニア歴8年（Android/Web/ロボティクス）
- 元ロボットエンジニア（Pepper × SLAM / Aldebaran共同開発）
- Kindle著者 4冊（実践Claude Code / LLMO 等）
- Qiita 39,000+ PV / SSH記事 18,000PV
- sameAs: LinkedIn, Qiita, Zenn, note, X, YouTube, Kindle

### FAQ（LLMO用）
- Propel-Labとは何をしている会社ですか？
- どのような技術を扱っていますか？
- 代表者の経歴は？
- お問い合わせ方法は？

### SNSリンク一覧
- LinkedIn: https://linkedin.com/in/kenimo49
- Qiita: https://qiita.com/kenimo49
- Zenn: https://zenn.dev/kenimo49
- note: https://note.com/kenimo49
- X: https://x.com/kenimo49
- YouTube: https://youtube.com/@Yureru-s4n
- Kindle: https://www.amazon.co.jp/stores/author/B0GQNPRCGF

## 開発
```bash
npm install
npm run dev      # 開発サーバー
npm run build    # 静的ビルド
```

## デプロイ
GitHub Actions → GitHub Pages（mainブランチpush時に自動デプロイ）
