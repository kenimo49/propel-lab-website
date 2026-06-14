// LLMO診断 公開ケーススタディ — Case #001: legacydram.com
//
// 運用ルール（重要・整合性の生命線）:
// - measured 系（series / changelog の実測イベント / actionResults の result）は実測値のみ。
// - projection（想定モデル）は実測ではない。必ず「想定」と分かる扱いで出すこと。
// - 施策の結果は「効果なし」でも正直に公開する（失敗も載せるのが本ケースの価値）。
// - 新しい測定・施策を行ったら、changelog に1行、series に1点、actionResults の result を更新して
//   commit → 再デプロイする。projection と実測の差も、出たらそのまま見せる。

export const caseMeta = {
  id: '001',
  domain: 'legacydram.com',
  title: 'Case #001 — legacydram.com',
  baselineDate: '2026-06-13',
  lastUpdated: '2026-06-14',
  phase: 'baseline', // 'baseline' | 'p0' | 'p1' | 'p2'
};

// 更新履歴（GitHubのコミット履歴のように改善の足跡を残す）
// type: 'diagnosis' | 'improvement' | 'measurement' | 'milestone'
export const changelog = [
  { date: '2026-06-13', type: 'diagnosis', event: '初回診断を実施。サンプルレポート（16ページ）を公開。baseline 記録。' },
  { date: '2026-06-14', type: 'milestone', event: 'パイロット観測ページを公開。npx llmo-checker で基板スコアの再現性を確認（93）。' },
  // 今後追記する例: P0実施 / 再計測 / 被リンク施策開始 ...
];

// 先行指標の時系列（すべて実測）
export const series = {
  llmoScore: {
    label: 'LLMO基板スコア（トップページ）',
    unit: '/100',
    max: 100,
    points: [
      { date: '2026-06-12', value: 93, note: '診断baseline。競合4社中1位（競合平均50）' },
      { date: '2026-06-14', value: 93, note: 'npx llmo-checker 再実行で再現確認' },
    ],
  },
  gscIndexed: {
    label: 'Search Console インデックス済みページ',
    unit: '',
    max: 76,
    points: [
      { date: '2026-06-05', value: 4, note: 'ローンチ直後・インデックス進行中' },
      { date: '2026-06-12', value: 53, note: '公開76本中53本が表示対象に' },
    ],
  },
  gscImpressions: {
    label: 'Search Console 表示インプレッション',
    unit: '',
    max: 600,
    points: [
      { date: '2026-06-05', value: 5 },
      { date: '2026-06-12', value: 458 },
    ],
  },
  aiCitationRate: {
    label: 'AI引用率（実測クエリ）',
    unit: '%',
    max: 100,
    points: [
      { date: '2026-06-12', value: 0, note: '専用記事を持つ2クエリで被引用ゼロ' },
    ],
  },
};

// AI引用率の「想定モデル」— 実測ではない。改善が進むと想定される経路。
// 実測が出たら series.aiCitationRate に点を打ち、この想定との差もそのまま公開する。
export const projection = {
  label: 'AI引用率の想定経路',
  note: '※ これは実測ではなく、診断の改善ロードマップに基づく想定レンジです。実測値が出たら、この想定と実際の差もこのページで公開します。',
  stages: [
    { stage: '診断時', range: '0%', mid: 0, measured: true },
    { stage: 'P0完了', range: '5〜10%', mid: 8, measured: false },
    { stage: 'P1完了', range: '10〜20%', mid: 15, measured: false },
    { stage: 'P2進行', range: '20〜40%', mid: 30, measured: false },
  ],
};

// 施策ごとの結果（失敗も公開する）。
// verdict: 'pending'（未実施/結果待ち） | 'positive'（効果あり） | 'slight'（微増） | 'none'（効果なし）
export const actionResults = [
  { phase: 'P0', action: '記事一覧・カテゴリページに JSON-LD（CollectionPage + ItemList）を付与', verdict: 'pending', result: null },
  { phase: 'P0', action: '実装済みFAQ + FAQPage構造化データを本番反映', verdict: 'pending', result: null },
  { phase: 'P0', action: 'llms.txt に主要記事のリンク列を追加', verdict: 'pending', result: null },
  { phase: 'P1', action: 'Organization の sameAs を拡充（エンティティ確立）', verdict: 'pending', result: null },
  { phase: 'P1', action: 'striking-distance 記事への内部リンク集約', verdict: 'pending', result: null },
  { phase: 'P2', action: '外部被リンクの獲得（権威性の蓄積）', verdict: 'pending', result: null },
];
