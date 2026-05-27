'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? 'Copied' : 'Copy code'}
      data-copied={copied}
      className="copy-btn inline-flex items-center gap-1.5"
    >
      {copied ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}
