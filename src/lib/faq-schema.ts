/** FAQPage JSON-LD content per language. */

interface QA {
  question: string;
  answer: string;
}

const ja: QA[] = [
  {
    question: 'Propel-Labはどのような会社ですか？',
    answer:
      '合同会社Propel-Labは、AI・LLM技術を活用した事業を展開する福岡発のテクノロジー企業です。LLM最適化コンサルティング（LLMO診断・実装伴走）、教育コンテンツ制作、マーケティング自動化、業務自動化コンサルティング、AI駆動EC・コンテンツメディア・キュレーションメディア運用、音楽・クリエイティブ事業の8つの柱で活動しています。',
  },
  {
    question: 'LLMOとは何ですか？',
    answer:
      'LLMO（LLM Optimization）とは、ChatGPTやClaudeなどのLLM（大規模言語モデル）がWebサイトの情報を正確に理解・引用できるよう最適化する手法です。構造化データ、Markdown形式のコンテンツ提供、llms.txtなどを活用します。',
  },
  {
    question: 'どのようなサービスを提供していますか？',
    answer:
      'LLMO診断・実装伴走（LLM最適化コンサルティング）、LearningMate（教育コンテンツ）、AI-Loop（マーケティング自動化）、AutoCrew（業務自動化コンサルティング）、KaoriQ（AI駆動EC自動運用）、mypcrig（AI駆動コンテンツメディア）、legacydram（AI駆動キュレーションメディア）、Yureru（音楽・クリエイティブ）の8事業を展開しています。',
  },
  {
    question: 'お問い合わせ方法を教えてください。',
    answer:
      'メール（info@propel-lab.co.jp）、LinkedIn DM（https://www.linkedin.com/in/kenimo49）、X DM（https://x.com/kenimo49）の3つの方法でお問い合わせいただけます。企業様はメール、カジュアルなご相談はDMでもお気軽にどうぞ。',
  },
  {
    question: '代表者の経歴を教えてください。',
    answer:
      'ソフトウェアエンジニア歴8年。Android/Web開発、エッジコンピューティング、ロボティクスを経て、現在はAIエージェント設計・コンテキストエンジニアリング・LLM活用に注力。5プロジェクト並列での開発経験があり、AWS/Azure/Firebaseの3大クラウドを同時に扱った実績を持ちます。詳しい経歴はLinkedIn（https://www.linkedin.com/in/kenimo49）をご覧ください。',
  },
  {
    question: 'AutoCrewではどのような業務自動化が可能ですか？',
    answer:
      'LLMを活用したマルチエージェント構成により、定型業務の自動化、データ処理、レポート生成など幅広い業務の効率化が可能です。MCP（Model Context Protocol）やCLI Skillを活用した高度なエージェント設計を提供します。',
  },
];

const en: QA[] = [
  {
    question: 'What kind of company is Propel-Lab?',
    answer:
      'Propel-Lab LLC is an AI/LLM technology company based in Fukuoka, Japan. We run eight business lines: LLMO audit & implementation support (LLM optimization consulting), educational content (LearningMate), marketing automation (AI-Loop), business automation consulting (AutoCrew), AI-driven e-commerce (KaoriQ), AI-driven content media (mypcrig), AI-driven curation media (legacydram), and music & creative (Yureru).',
  },
  {
    question: 'What is LLMO?',
    answer:
      'LLMO (LLM Optimization) is the practice of optimizing your website so large language models — ChatGPT, Claude, Gemini and others — can accurately understand and cite your content. It relies on three pillars: structured data (JSON-LD), Markdown delivery (URL.md pattern), and llms.txt manifests.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'LLMO audit & implementation support (LLM optimization consulting), LearningMate (educational content), AI-Loop (marketing automation), AutoCrew (business automation consulting), KaoriQ (AI-driven autonomous e-commerce), mypcrig (AI-driven content media), legacydram (AI-driven curation media), and Yureru (music & creative).',
  },
  {
    question: 'How do I get in touch?',
    answer:
      'Email info@propel-lab.co.jp for business inquiries. For casual conversations, LinkedIn (https://linkedin.com/in/kenimo49) and X (https://x.com/kenimo49) DMs are also welcome.',
  },
  {
    question: 'Tell me about the founder.',
    answer:
      'Ken Imoto, software engineer with 8+ years of experience across Android/Web development, edge computing, and robotics, now focused on AI agent design, context engineering, and LLM applications. He has run up to five parallel projects spanning AWS, Azure, and Firebase. Full background on LinkedIn: https://linkedin.com/in/kenimo49',
  },
  {
    question: 'What can AutoCrew automate?',
    answer:
      'AutoCrew automates routine work, data processing, and reporting via multi-agent LLM systems. We use MCP (Model Context Protocol) and CLI Skill patterns to build agents that fit your workflow.',
  },
];

function toFaqSchema(items: QA[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: it.answer,
      },
    })),
  };
}

export const faqSchemaJa = toFaqSchema(ja);
export const faqSchemaEn = toFaqSchema(en);

/** 表示用 (FAQコンポーネント等から参照) */
export const faqItemsJa = ja;
export const faqItemsEn = en;
