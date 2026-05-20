/** Schema.org entity fragments. Imported by pages via `slot="head"`. */

export const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'LearningMate',
    provider: { '@id': 'https://propel-lab.co.jp/#org' },
    serviceType: '教育コンテンツ',
    description: 'LLM活用の教育コンテンツ企画・制作・販売',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI-Loop',
    provider: { '@id': 'https://propel-lab.co.jp/#org' },
    serviceType: 'マーケティング自動化',
    description: 'SNS運用自動化・コンテンツマーケティング支援',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AutoCrew',
    provider: { '@id': 'https://propel-lab.co.jp/#org' },
    serviceType: '業務自動化コンサルティング',
    description: 'LLMによる自動実行エージェント構成・業務最適化',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'KaoriQ',
    provider: { '@id': 'https://propel-lab.co.jp/#org' },
    serviceType: 'AI駆動EC自動運用',
    description:
      'LLMエージェントによるECサイトの自律運用。コンテンツ生成・SEO・LLMO・商品キュレーションを完全自動化',
    url: 'https://kaoriq.com/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'mypcrig',
    provider: { '@id': 'https://propel-lab.co.jp/#org' },
    serviceType: 'AI駆動コンテンツメディア',
    description:
      'LLMエージェントによるPC選定メディアの自律運用。GA4・Search Console連携で検索意図ドリブンの記事生成を自動化',
    url: 'https://mypcrig.com/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'legacydram',
    provider: { '@id': 'https://propel-lab.co.jp/#org' },
    serviceType: 'AI駆動キュレーションメディア',
    description:
      'LLMエージェントによるウィスキーキュレーションメディアの自律運用。人物軸ストーリー・蒸留化学・銘柄選定を完全自動化',
    url: 'https://legacydram.com/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Yureru',
    provider: { '@id': 'https://propel-lab.co.jp/#org' },
    serviceType: '音楽・クリエイティブ',
    description: '感動の構造化と音楽化プロジェクト',
  },
];

export const musicGroupSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Yureru',
  alternateName: 'ゆれる',
  description:
    '「心が揺れる」感情の瞬間を音楽・言葉・映像でやさしくすくい上げるプロジェクト。バーチャルシンガーYumei、Silk Reignが所属。',
  genre: ['J-Pop', 'バラード', 'エモ', 'アンビエント'],
  foundingDate: '2024',
  member: [
    {
      '@type': 'Person',
      name: 'Yumei',
      alternateName: 'ユメイ',
      description: 'メインボーカル。繊細な感情を歌に込めるバーチャルシンガー。',
    },
    {
      '@type': 'Person',
      name: 'Silk Reign',
      alternateName: 'シルクレイン',
      description: '洋楽バラードを中心に深い感情を表現するアーティスト。',
    },
  ],
  sameAs: [
    'https://youtube.com/@Yureru-s4n',
    'https://note.com/yureru_propel',
    'https://www.instagram.com/yureru_s4n/',
  ],
  parentOrganization: { '@id': 'https://propel-lab.co.jp/#org' },
};

export const bookSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: '実践Claude Code — コンテキストエンジニアリングで開発が変わる',
    alternateName: 'Practical Claude Code',
    author: { '@type': 'Person', name: 'ken imoto' },
    publisher: { '@type': 'Organization', name: 'Propel-Lab' },
    bookFormat: 'EBook',
    description:
      'Claude Codeの設計思想から、CLAUDE.mdの実践パターン、チーム開発、セキュリティまで。コンテキストエンジニアリングの導入でTypeScript開発の生産性300%向上を実現した全記録。',
    about: [
      'Claude Code',
      'コンテキストエンジニアリング',
      'Context Engineering',
      'CLAUDE.md',
      'AI開発',
      'Vibe Coding',
    ],
    inLanguage: ['ja', 'en'],
    url: 'https://zenn.dev/kenimo49/books/claude-code-mastery',
    isPartOf: {
      '@type': 'BookSeries',
      name: 'エンジニアのためのAI実践シリーズ',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'なぜあなたのサイトはChatGPTに無視されるのか: LLMO実践ガイド',
    alternateName: 'Why ChatGPT Ignores Your Website: The LLMO Practical Guide',
    author: { '@type': 'Person', name: 'ken imoto' },
    publisher: { '@type': 'Organization', name: 'Propel-Lab' },
    bookFormat: 'EBook',
    description:
      'Google検索で1位を取っても、ChatGPTの回答にあなたのサイトは出てきません。AI検索時代の新しい最適化手法LLMOを実装レベルで解説する実践ガイド。',
    about: [
      'LLMO',
      'LLM Optimization',
      'SEO',
      '構造化データ',
      'JSON-LD',
      'llms.txt',
      'AI検索',
    ],
    inLanguage: ['ja', 'en'],
    isPartOf: {
      '@type': 'BookSeries',
      name: 'エンジニアのためのAI実践シリーズ',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'エンジニアの心理トリック大全 — コードは正しいのに、なぜ提案が通らないのか',
    alternateName: 'Engineer Psychology Tricks: Why Your Proposal Doesn\'t Pass',
    author: { '@type': 'Person', name: 'ken imoto' },
    publisher: { '@type': 'Organization', name: 'Propel-Lab' },
    bookFormat: 'EBook',
    description:
      '20の認知バイアスと心理テクニックをエンジニア実務に翻訳した一冊。システム1/2、AI時代の新バイアス、見積もり/技術選定/デバッグ/コードレビュー/1on1/会議/交渉/心理的安全性/採用面接まで15章でカバー。',
    about: [
      '認知バイアス',
      'エンジニア心理学',
      'システム1/2',
      'コードレビュー',
      '見積もり',
      '1on1',
      '心理的安全性',
      '採用面接',
    ],
    inLanguage: ['ja', 'pt'],
    url: 'https://kenimoto.dev/pt/books/engineer-psychology-tricks',
    sameAs: [
      'https://zenn.dev/kenimo49/books/engineer-psychology-tricks',
      'https://www.amazon.com.br/dp/B0GZFBC7SP',
    ],
    isPartOf: {
      '@type': 'BookSeries',
      name: 'エンジニアのためのAI実践シリーズ',
    },
  },
];
