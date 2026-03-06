# CLAUDE.md — propel-lab-website

## プロジェクト概要
合同会社Propel-Labのコーポレートサイト。LLMO（LLM Optimization）対応が最重要要件。

## 技術スタック
- Astro（静的サイトジェネレーター）
- TypeScript
- Tailwind CSS
- GitHub Pages（ホスティング）

## ディレクトリ構成
```
src/
├── layouts/
│   └── Layout.astro          # ベースレイアウト（JSON-LD埋め込み）
├── pages/
│   └── index.astro           # トップページ（ワンページ構成）
├── components/
│   ├── Hero.astro             # ヒーローセクション
│   ├── Services.astro         # 事業紹介（4事業）
│   ├── Profile.astro          # 代表者プロフィール
│   ├── Achievements.astro     # 実績・数字
│   ├── FAQ.astro              # FAQセクション
│   ├── Contact.astro          # お問い合わせ
│   └── JsonLd.astro           # JSON-LD構造化データ
├── data/
│   ├── services.ts            # 事業データ
│   ├── faq.ts                 # FAQデータ
│   └── profile.ts             # 代表者データ
└── styles/
    └── global.css             # グローバルスタイル

public/
├── llms.txt                   # LLM向け要約
├── llms-full.txt              # LLM向け詳細
├── robots.txt                 # クローラー設定
├── favicon.svg
└── images/
```

## LLMO最重要ルール

### 必須: JSON-LD構造化データ
以下のスキーマを必ず `<head>` に含める:
1. `Organization` — 会社情報
2. `WebSite` — サイト情報
3. `Person` — 代表者情報（sameAs に全SNSリンク）
4. `Service` × 4 — 各事業
5. `FAQPage` — FAQ（Q&A形式）

### 必須: llms.txt
- `/llms.txt` — 300語以内の要約版
- `/llms-full.txt` — 全情報の詳細版
- フォーマット: https://llmstxt.org/ 準拠

### 必須: robots.txt
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
- ワンページ構成（スクロールで全セクション閲覧）
- モバイルファースト
- 日本語メイン

## 会社情報（正確に使うこと）
- 会社名: 合同会社 Propel-Lab（プロペルラボ）
- 所在地: 福岡県福岡市中央区天神4丁目6-28 天神ファーストビル7階
- 代表者: 井本 賢（いもと けん）
- 設立: 2025年4月24日
- 資本金: 50万円
- メール: info@propel-lab.co.jp
- URL: https://www.propel-lab.co.jp/

## 代表者情報（正確に使うこと）
- 名前: ken imoto / 井本 賢
- エンジニア歴8年
- 専門: Android/Web開発、ロボティクス、AIエージェント
- 実績: Pepper × SLAM（Aldebaran共同開発）、Kindle著者4冊
- Qiita: 39,000+ PV（SSH記事 18,000PV）
- SNS: LinkedIn/Qiita/Zenn/note/X/YouTube/Kindle

## 注意事項
- 財務数字（売上・利益等）は公開しない
- 個人の住所・電話番号は公開しない
- 資本金50万円は会社概要に含めてOK
