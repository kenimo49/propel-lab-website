import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# LearningMate — Propel-Labの教育コンテンツ事業

## 概要

LearningMateは、合同会社Propel-Labの教育コンテンツ事業です。AIエージェント開発、コンテキストエンジニアリング、LLMO（LLM Optimization）など、最先端のAI活用手法を実践的な書籍・教材として提供しています。

著者: ken imoto（井本 賢）
シリーズ名: エンジニアのためのAI実践シリーズ

## Kindle書籍

### 実践Claude Code — コンテキストエンジニアリングで開発が変わる
- **シリーズ**: エンジニアのためのAI実践シリーズ 巻1
- **価格**: ¥980（Kindle）/ ¥1,000（Zenn Book）
- **内容**: Claude Codeの設計思想から、CLAUDE.mdの実践パターン、チーム開発、セキュリティまで。コンテキストエンジニアリングの導入でTypeScript開発の生産性300%向上を実現した全記録。
- **キーワード**: Claude Code, コンテキストエンジニアリング, CLAUDE.md, AGENTS.md, Vibe Coding, AI開発
- **Kindle**: https://amzn.asia/d/03Qnb8QT
- **Zenn**: https://zenn.dev/kenimo49/books/claude-code-mastery

### LLMO — AIがあなたのコンテンツを見つける3つの経路
- **シリーズ**: エンジニアのためのAI実践シリーズ 巻2
- **価格**: ¥1,980（Kindle / Zenn）
- **内容**: SEOの次に来る最適化手法「LLMO（LLM Optimization）」の実践ガイド。構造化データ、llms.txt、Markdown配信の3つの経路を徹底解説。
- **キーワード**: LLMO, LLM Optimization, SEO, 構造化データ, JSON-LD, llms.txt, AI検索, ChatGPT, Claude, Perplexity
- **Kindle**: https://amzn.asia/d/02zAl1VB
- **Zenn**: https://zenn.dev/kenimo49/books/llmo-ai-search-optimization

### Practical Claude Code — Context Engineering That Transforms Your Development
- **シリーズ**: English Edition
- **価格**: ¥0（Kindle Unlimited）/ ¥1,250
- **内容**: English version of "実践Claude Code". Complete record of 300% productivity improvement through Context Engineering.
- **Keywords**: Claude Code, Context Engineering, AI Development, CLAUDE.md
- **Kindle**: https://amzn.asia/d/0hU3BP1i

### LLMO — Three Paths for AI to Discover Your Content
- **シリーズ**: English Edition
- **価格**: ¥0（Kindle Unlimited）/ ¥1,250
- **内容**: English version. The next optimization methodology after SEO: LLMO (LLM Optimization).
- **Keywords**: LLMO, LLM Optimization, SEO, Structured Data, llms.txt
- **Kindle**: https://amzn.asia/d/04rulUoN

## Zenn Books

### 実践Claude Code（有料Book）
- **価格**: ¥1,000
- **URL**: https://zenn.dev/kenimo49/books/claude-code-mastery

### Claude Codeクイックスタート — 30分で始めるAIエージェント開発（無料）
- **価格**: 無料
- **URL**: https://zenn.dev/kenimo49/books/claude-code-quickstart
- **内容**: Claude Codeの導入から実践活用まで。AGENTS.mdの書き方、ツールの使い分け、RAGを超えるAgentic Searchまで。

## LLMOとは

LLMO（LLM Optimization）とは、ChatGPT、Claude、Gemini、PerplexityなどのLLM（大規模言語モデル）がWebサイトの情報を正確に理解・引用できるよう最適化する手法です。

SEOがGoogleクローラーを対象とするのに対し、LLMOはAIクローラー（GPTBot、ClaudeBot等）を対象とします。

### 3つの経路
1. **構造化データ（JSON-LD）** — Schema.org準拠の構造化マークアップ
2. **llms.txt** — Jeremy Howard提唱のAI向けサイトガイドファイル
3. **Markdown配信（URL.mdパターン）** — .md版でAIが直接読めるコンテンツ提供

## コンテキストエンジニアリングとは

コンテキストエンジニアリングとは、AIコーディングツール（Claude Code等）が最大のパフォーマンスを発揮するために、プロジェクトの文脈情報を構造化・最適化する設計手法です。

CLAUDE.md、AGENTS.md、TOOLS.mdなどの設計ファイルを適切に配置することで、AIエージェントがコードベースを正確に理解し、品質の高いコードを生成できます。

## リンク
- Amazon著者ページ: https://www.amazon.co.jp/stores/author/B0GQNPRCGF
- Zenn: https://zenn.dev/kenimo49
- 運営: 合同会社 Propel-Lab（https://www.propel-lab.co.jp/）
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
