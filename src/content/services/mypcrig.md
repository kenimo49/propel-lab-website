---
title: mypcrig
category: AI駆動コンテンツメディア
order: 6
kind: project
---

# mypcrig — AI駆動コンテンツメディア

## 概要

LLMエージェントによる用途別PC選定メディアの自律運用プラットフォーム。検索意図ドリブンの記事生成・実機ベンチマークの公開・用途別マッチング診断を完全自動化し、人手を最小限に抑えた独立メディア運営を実現する。

第一弾として「mypcrig.com」を運用中。AI開発・ゲーミング・クリエイター・ノートPC・Apple Silicon・パーツ単体までカバーする日本語特化サイトとして、harness-opsによる毎日1本の自動投稿と、GA4+Search Consoleの双方向フィードバックループで「読者がまだ来ていないクエリ」を捉えて次の記事テーマを自律判定する。

## 対象

AI開発者、ゲーマー、クリエイター、PC選定に迷うすべての人

## 技術スタック

- LLMエージェント（Claude Code + harness-ops）
- GA4 Data API + Search Console API（双方向フィードバック）
- iris-lab実機ベンチマーク（自前データ差別化）
- Astro v6 + Tailwind v4 + GitHub Pages（コンテンツ基盤）
- Amazon Creators API + 楽天 OpenAPI（アフィリエイト自動化、Phase 1から）

## 特徴

- GA4（来た人の行動）と Search Console（来る前の検索意図）の非対称データを Strategist が同時に読み、次の記事テーマを毎日自律決定
- 「順位50位以下だが表示はあるクエリ」を伸びしろシグナルとして抽出 → 翌日のテーマ候補に自動反映
- category × section の二軸スキーマ（コンテンツ型 × サイト構造）で記事を整理、用途別ナビゲーションで読者を案内
- 提供記事ゼロ・推奨は性能/コスパ基準のみの編集方針で独立メディア性を保ち、将来的なサイトM&A出口も確保

## 実績サイト

- [mypcrig.com](https://mypcrig.com/)
