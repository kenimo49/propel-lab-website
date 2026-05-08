/**
 * FAQ データの単一ソース。Layout の JSON-LD と FAQ コンポーネントの両方が
 * `src/lib/faq-schema.ts` を参照する。差分を生まないようにここで再エクスポート。
 */
import { faqItemsJa, faqItemsEn } from '../lib/faq-schema';

export type FAQItem = (typeof faqItemsJa)[number];

export const faqItems: FAQItem[] = faqItemsJa;

export { faqItemsJa, faqItemsEn };
