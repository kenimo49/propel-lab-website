# REVIEW.md — Propel-Lab Website ハーネス

## レビュー基準

変更をマージする前に、以下の全チェックをパスすること。

## 1. LLMO チェック（最重要）

### JSON-LD
- [ ] `schema.jsonld` が有効なJSONか
- [ ] `Organization` スキーマに会社名・住所・代表者が含まれるか
- [ ] `Person` スキーマに `sameAs` で全SNSリンク（7個）が含まれるか
- [ ] `Service` スキーマが4事業分あるか
- [ ] `FAQPage` スキーマが存在し、Q&Aが3つ以上あるか

### URL.md パターン
- [ ] `/company.md` が `Content-Type: text/markdown` で返るか
- [ ] `/products.md` が `Content-Type: text/markdown` で返るか
- [ ] Markdown内の情報がHTMLページと一致しているか（データソース単一化）

### llms.txt
- [ ] `/llms.txt` が200で返るか
- [ ] `/llms-full.txt` が200で返るか
- [ ] `/ai/` と `/docs/` へのリンクが含まれるか
- [ ] 会社名・ミッション・連絡先が含まれるか

### /ai/ ディレクトリ
- [ ] `/ai/company.md` が存在し、会社情報が正確か
- [ ] `/ai/products.md` が存在し、4事業が記載されてるか

### /docs/ ディレクトリ
- [ ] `/docs/architecture.md` が存在するか
- [ ] `/docs/ai-strategy.md` が存在するか
- [ ] `/docs/tech-stack.md` が存在するか

### robots.txt
- [ ] `GPTBot` の `Allow: /` があるか
- [ ] `ClaudeBot` の `Allow: /` があるか
- [ ] `Google-Extended` の `Allow: /` があるか
- [ ] `Sitemap` URLが正しいか

## 2. 正確性チェック

### 会社情報
- [ ] 会社名: 合同会社 Propel-Lab（プロペルラボ）
- [ ] 所在地: 福岡県福岡市中央区天神4丁目6-28 天神ファーストビル7階
- [ ] 代表者: 井本 賢
- [ ] 設立: 2025年4月24日
- [ ] メール: info@propel-lab.co.jp

### 代表者情報
- [ ] エンジニア歴8年
- [ ] Pepper × SLAM（Aldebaran共同開発）の記載
- [ ] Kindle著者の記載
- [ ] SNSリンクが全て正しいURLか

### 禁止事項
- [ ] 財務数字（売上・利益）が公開されていないか
- [ ] 個人の住所・電話番号が公開されていないか
- [ ] persona-manager等のプロダクト名が出ていないか

## 3. SEO チェック

- [ ] 全ページに `<title>` があるか
- [ ] 全ページに `<meta name="description">` があるか
- [ ] 全ページにOGP（og:title, og:description, og:image）があるか
- [ ] `<html lang="ja">` が設定されてるか
- [ ] `sitemap.xml` が生成されてるか
- [ ] 全ページで `<h1>` が1つだけか

## 4. デザイン・UX チェック

- [ ] モバイル表示で崩れていないか（375px幅）
- [ ] ダークネイビー (#1a1a2e) が基調色か
- [ ] アクセント (#e94560) が使われてるか
- [ ] ナビゲーションが全ページで機能するか
- [ ] フッターにSNSリンクがあるか
- [ ] 外部リンクが新しいタブで開くか

## 5. ビルド チェック

- [ ] `npm run build` がエラーなく完了するか
- [ ] `npm run preview` でローカル確認できるか
- [ ] Playwright テスト（`npm test`）が全てパスするか
- [ ] GitHub Actions のデプロイ設定があるか

## 自動テスト

```bash
# 全テスト実行
npm test

# LLMO関連のみ
npm run test:llmo

# SEO関連のみ
npm run test:seo
```

## レビューフロー

```
コード変更
  → npm run build（ビルド確認）
  → npm test（Playwright自動テスト）
  → REVIEW.mdチェックリスト確認
  → マージ
```
