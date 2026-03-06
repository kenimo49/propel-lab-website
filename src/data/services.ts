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
