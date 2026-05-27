import { createHighlighter, type Highlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;

export const SHIKI_LANGS = [
  'bash',
  'json',
  'typescript',
  'tsx',
  'javascript',
  'sql',
  'mdx',
  'md',
] as const;

export type ShikiLang = (typeof SHIKI_LANGS)[number];

export function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark-default', 'github-light'],
      langs: [...SHIKI_LANGS],
    });
  }
  return highlighterPromise;
}

export async function highlight(code: string, lang: string): Promise<string> {
  const h = await getHighlighter();
  const safeLang = (SHIKI_LANGS as readonly string[]).includes(lang)
    ? (lang as ShikiLang)
    : 'bash';
  return h.codeToHtml(code, {
    lang: safeLang,
    themes: {
      light: 'github-light',
      dark: 'github-dark-default',
    },
    defaultColor: false,
  });
}
