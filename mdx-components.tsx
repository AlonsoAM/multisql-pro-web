import type { MDXComponents } from 'mdx/types';
import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';

function extractCodeFromPre(props: any): { code: string; lang: string; filename?: string } | null {
  const children = props.children;

  // MDX wraps <code> inside <pre>. Try to find the code element.
  let codeNode: any = null;

  if (Array.isArray(children)) {
    codeNode = children.find((c: any) => c && (c.type === 'code' || c.props?.className?.includes('language-')));
  } else if (children && typeof children === 'object') {
    if (children.type === 'code') {
      codeNode = children;
    } else if (children.props?.children) {
      // Sometimes MDX nests deeper
      const nested = children.props.children;
      if (Array.isArray(nested)) {
        codeNode = nested.find((c: any) => c && (c.type === 'code' || c.props?.className?.includes('language-')));
      } else if (nested && nested.type === 'code') {
        codeNode = nested;
      }
    }
  }

  if (!codeNode) return null;

  const className = codeNode.props?.className || '';
  const langMatch = className.match(/language-([\w-]+)/);
  const lang = langMatch ? langMatch[1] : 'text';

  // Extract title from meta (e.g., language-json title="foo")
  const titleMatch = className.match(/title="([^"]+)"/);
  const filename = titleMatch ? titleMatch[1] : undefined;

  const raw = typeof codeNode.props?.children === 'string' ? codeNode.props.children : '';

  return { code: raw, lang, filename };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ href, children, ...rest }) => {
      if (href && (href.startsWith('http') || href.startsWith('mailto:'))) {
        return (
          <a href={href} target="_blank" rel="noreferrer noopener" {...rest}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href || '#'} {...rest}>
          {children}
        </Link>
      );
    },
    pre: (props) => {
      const extracted = extractCodeFromPre(props);
      if (extracted) {
        return <CodeBlock code={extracted.code} lang={extracted.lang} filename={extracted.filename} />;
      }
      // Fallback: still render as pre but with our code-block styling
      return (
        <div className="code-block not-prose">
          <div className="code-block-body">
            <pre {...props} />
          </div>
        </div>
      );
    },
    code: ({ children, ...rest }) => <code {...rest}>{children}</code>,
  };
}
