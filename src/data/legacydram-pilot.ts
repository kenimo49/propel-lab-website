// LLMO診断パイロット — legacydram.com の先行指標 時系列データ
//
// 運用ルール（重要）:
// - ここに載せる数値はすべて実測値のみ。推定・目標値は載せない。
// - 新しい測定を追加するときは scripts/llmo-pilot-snapshot で取得し、
//   各 series の配列に { date, value } を1点追記して commit → 再デプロイする。
// - LLMOスコアは `npx llmo-checker https://legacydram.com --json` の score。
// - GSC / GA4 値はサービスアカウント経由の実データ。

export const pilotMeta = {
  domain: 'legacydram.com',
  baselineDate: '2026-06-13',
  lastUpdated: '2026-06-14',
  // 改善実装フェーズの状態（診断で提示した P0/P1/P2）
  phase: 'baseline', // 'baseline' | 'p0' | 'p1' | 'p2'
};

// 先行指標の時系列（P0/P1 で早く動く指標を主役にする）
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

// 改善ロードマップの実装状況（透明性のため公開）
export const roadmap = [
  { phase: 'P0', title: '一覧JSON-LD / FAQ反映 / llms.txtリンク列 / タイトル最適化', status: 'pending' },
  { phase: 'P1', title: 'Organization sameAs拡充 / 内部リンク集約 / craft系SEO', status: 'pending' },
  { phase: 'P2', title: '外部被リンク獲得 / AI引用率の月次定点観測', status: 'pending' },
];
