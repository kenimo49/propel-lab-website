# Propel-Lab — システム設計思想

## 基本方針: 少数精鋭 × AIエージェント分業

Propel-Labは「人間1人 + AIエージェント群」で企業を運営する新しい経営モデルを実践しています。

## 設計原則

### 1. 単一データソース
すべてのコンテンツは1箇所で管理し、HTML/Markdown/JSON-LDの3系統に自動出力します。

### 2. LLMO（LLM Optimization）ファースト
- 構造化データ（JSON-LD）で機械可読性を担保
- Markdownエンドポイントでllm直読み対応
- llms.txt でサイト全体をLLMに要約提供

### 3. 静的サイト + エッジ配信
- Astro（静的サイトジェネレーター）でビルド
- GitHub Pagesでホスティング
- JavaScriptゼロ（必要最小限のみ）

### 4. AIエージェント分業
- コンテンツ制作: LLMエージェント
- SNS運用: AI-Loop（自動投稿・分析）
- コーディング: Claude Code
- デザイン: AI生成 + 人間レビュー

## URL.mdパターン

Jeremy Howard提唱のllms.txt拡張として、全ページで「同じURLに.mdを付けるとMarkdownが返る」を実装。

| 人間向け | LLM向け |
|---------|---------|
| /company | /company.md |
| /products | /products.md |
