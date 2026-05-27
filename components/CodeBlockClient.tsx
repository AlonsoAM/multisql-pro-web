'use client';

import { useEffect, useState } from 'react';
import { CopyButton } from './CopyButton';

let highlighterPromise: Promise<any> | null = null;

const SHIKI_LANGS = ['bash', 'json', 'typescript', 'tsx', 'javascript', 'sql', 'mdx', 'md'] as const;

async function getHighlighter() {
  if (!highlighterPromise) {
    const { createHighlighter } = await import('shiki');
    highlighterPromise = createHighlighter({
      themes: ['github-dark-default', 'github-light'],
      langs: [...SHIKI_LANGS],
    });
  }
  return highlighterPromise;
}

export function CodeBlockClient({
  code,
  lang = 'bash',
  filename,
}: {
  code: string;
  lang?: string;
  filename?: string;
}) {
  const [html, setHtml] = useState<string>('');
  const trimmedCode = code.trimEnd();

  useEffect(() => {
    let cancelled = false;
    getHighlighter().then((h) => {
      if (cancelled) return;
      const safeLang = (SHIKI_LANGS as readonly string[]).includes(lang)
        ? lang
        : 'bash';
      const result = h.codeToHtml(trimmedCode, {
        lang: safeLang,
        themes: {
          light: 'github-light',
          dark: 'github-dark-default',
        },
        defaultColor: false,
      });
      setHtml(result);
    });
    return () => {
      cancelled = true;
    };
  }, [trimmedCode, lang]);

  return (
    <div className="code-block not-prose">
      {(filename || true) && (
        <div className="code-block-header">
          {filename ? (
            <span className="code-block-filename">{filename}</span>
          ) : (
            <span className="mono" style={{ color: 'var(--fg-subtle)' }}>
              {lang}
            </span>
          )}
          <CopyButton text={trimmedCode} />
        </div>
      )}
      <div
        className="code-block-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
