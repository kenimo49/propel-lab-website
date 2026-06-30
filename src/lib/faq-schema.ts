/** FAQPage JSON-LD content per language. */

interface QA {
  question: string;
  answer: string;
}

const ja: QA[] = [
  {
    question: 'Propel-Labはどのような会社ですか？',
    answer:
      '合同会社Propel-Labは、AI・LLM技術を活用した事業を展開する福岡発のテクノロジー企業です。LLM最適化コンサルティング（LLMO診断・実装伴走）、教育コンテンツ制作、AI駆動EC・コンテンツメディア・キュレーションメディア運用、音楽・クリエイティブ事業を柱に活動しています。',
  },
  {
    question: 'LLMOとは何ですか？',
    answer:
      'LLMO（LLM Optimization）とは、ChatGPTやClaudeなどのLLM（大規模言語モデル）がWebサイトの情報を正確に理解・引用できるよう最適化する手法です。構造化データ、Markdown形式のコンテンツ提供、llms.txtなどを活用します。',
  },
  {
    question: 'どのようなサービスを提供していますか？',
    answer:
      'LLMO診断・実装伴走（LLM最適化コンサルティング・¥98,000〜）、LearningMate（教育コンテンツ）、LLMOウェブサイト構築ガイド（PDF教材・¥1,000）を中心に、サービス・教材として提供しています。自社プロジェクトとしてKaoriQ（AI駆動EC自動運用）、mypcrig（AI駆動コンテンツメディア）、legacydram（AI駆動キュレーションメディア）、Yureru（音楽・クリエイティブ）を運用し、LLMO実証ラボとして機能しています。',
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
];

const en: QA[] = [
  {
    question: 'What kind of company is Propel-Lab?',
    answer:
      'Propel-Lab LLC is an AI/LLM technology company based in Fukuoka, Japan. We focus on LLMO audit & implementation support (LLM optimization consulting), educational content (LearningMate), AI-driven e-commerce (KaoriQ), AI-driven content media (mypcrig), AI-driven curation media (legacydram), and music & creative (Yureru).',
  },
  {
    question: 'What is LLMO?',
    answer:
      'LLMO (LLM Optimization) is the practice of optimizing your website so large language models — ChatGPT, Claude, Gemini and others — can accurately understand and cite your content. It relies on three pillars: structured data (JSON-LD), Markdown delivery (URL.md pattern), and llms.txt manifests.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'LLMO audit & implementation support (¥98,000+), LearningMate (educational content), and the LLMO website-building PDF guide (¥1,000). KaoriQ, mypcrig, legacydram, and Yureru are in-house projects that double as our LLMO live lab.',
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
