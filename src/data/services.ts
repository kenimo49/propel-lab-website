export interface Service {
  id: string;
  name: string;
  category: string;
  summary: string;
  target: string;
  tech: string[];
  platforms?: string[];
  youtube?: string;
  characters?: string[];
  external_url?: string;
}

export const services: Service[] = [
  {
    id: 'learningmate',
    name: 'LearningMate',
    category: '教育コンテンツ',
    summary: 'LLM活用の教育コンテンツ企画・制作・販売',
    target: 'エンジニア、AI活用を学びたい人',
    tech: ['Claude Code', 'Context Engineering'],
    platforms: ['Udemy', 'Zenn'],
  },
  {
    id: 'ai-loop',
    name: 'AI-Loop',
    category: 'マーケティング自動化',
    summary: 'SNS運用自動化・コンテンツマーケティング支援',
    target: '企業のSNS担当者',
    tech: ['LLMエージェント', 'インプレッション分析'],
  },
  {
    id: 'autocrew',
    name: 'AutoCrew',
    category: '業務自動化コンサルティング',
    summary: 'LLMによる自動実行エージェント構成・業務最適化',
    target: '業務効率化を求める企業',
    tech: ['マルチエージェント', 'MCP', 'CLI Skill'],
  },
  {
    id: 'kaoriq',
    name: 'KaoriQ',
    category: 'AI駆動EC自動運用',
    summary: 'LLMエージェントによるECサイトの自律運用 — コンテンツ生成・SEO・LLMO・商品キュレーションを完全自動化',
    target: 'EC事業者、D2Cブランド運営者',
    tech: ['LLMエージェント', 'Shopify API', 'LLMO', 'harness-ops'],
    platforms: ['kaoriq.com'],
    external_url: 'https://kaoriq.com/',
  },
  {
    id: 'mypcrig',
    name: 'mypcrig',
    category: 'AI駆動コンテンツメディア',
    summary: 'LLMエージェントによるPC選定メディアの自律運用 — 用途別ガイド・実機ベンチマーク・検索意図ドリブンの記事生成を完全自動化',
    target: 'AI開発者、ゲーマー、クリエイター、PC選定に迷うすべての人',
    tech: ['LLMエージェント', 'GA4 + Search Console', 'harness-ops', 'iris-lab実機ベンチマーク'],
    platforms: ['mypcrig.com'],
    external_url: 'https://mypcrig.com/',
  },
  {
    id: 'legacydram',
    name: 'legacydram',
    category: 'AI駆動キュレーションメディア',
    summary: 'LLMエージェントによるウィスキーキュレーションメディアの自律運用 — 人物軸ストーリー・蒸留化学・銘柄選定を完全自動化',
    target: 'ウィスキー愛好者、エンジニア視点で趣味を深掘りしたい人',
    tech: ['LLMエージェント', 'harness-ops', 'context-forge人物・銘柄DB', 'EN/JAバイリンガル'],
    platforms: ['legacydram.com'],
    external_url: 'https://legacydram.com/',
  },
  {
    id: 'yureru',
    name: 'Yureru',
    category: '音楽・クリエイティブ',
    summary: '感動の構造化と音楽化プロジェクト',
    target: '音楽・クリエイティブ愛好者',
    tech: ['Suno AI', 'Stable Diffusion', 'Canva', 'CapCut'],
    characters: ['Yumei（メイン）', 'Silk Reign（洋楽バラード）'],
    youtube: 'https://youtube.com/@Yureru-s4n',
  },
];
