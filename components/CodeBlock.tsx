import { highlight } from '@/lib/shiki';
import { CopyButton } from './CopyButton';

export async function CodeBlock({
  code,
  lang = 'bash',
  filename,
}: {
  code: string;
  lang?: string;
  filename?: string;
}) {
  const html = await highlight(code.trimEnd(), lang);
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
          <CopyButton text={code} />
        </div>
      )}
      <div className="code-block-body" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
