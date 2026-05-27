'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n-context';

type Segment =
  | { kind: 'user'; text: string }
  | { kind: 'agent'; text: string }
  | { kind: 'tool-call'; text: string }
  | { kind: 'tool-result'; text: string };

const SPEEDS: Record<Segment['kind'], number> = {
  user: 28,
  agent: 14,
  'tool-call': 6,
  'tool-result': 4,
};

const PAUSES: Record<Segment['kind'], number> = {
  user: 520,
  agent: 380,
  'tool-call': 460,
  'tool-result': 700,
};

export function Terminal() {
  const { t } = useI18n();
  const tr = t.terminal;

  const SCRIPT: Segment[] = useMemo(
    () => [
      { kind: 'user', text: tr.userPrompt },
      { kind: 'agent', text: tr.agentIntro },
      {
        kind: 'tool-call',
        text: `multisql-pro · execute_sql
{
  "connection": "prod",
  "query": "SELECT TOP 5 c.name, SUM(o.total) AS revenue FROM customers c JOIN orders o ON o.customer_id = c.id GROUP BY c.name ORDER BY revenue DESC"
}`,
      },
      {
        kind: 'tool-result',
        text: `${tr.toolResultMeta}
┌──────────────────────┬────────────┐
│ name                 │ revenue    │
├──────────────────────┼────────────┤
│ Acme Inc             │ 1,284,902  │
│ Globex               │   942,118  │
│ Initech              │   811,470  │
│ Soylent              │   720,055  │
│ Umbrella             │   612,300  │
└──────────────────────┴────────────┘`,
      },
      { kind: 'agent', text: tr.agentDone },
    ],
    [tr],
  );

  const [rendered, setRendered] = useState<{ kind: Segment['kind']; text: string; done: boolean }[]>([]);
  const [finished, setFinished] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setRendered(SCRIPT.map((s) => ({ ...s, done: true })));
      setFinished(true);
      return;
    }

    setRendered([]);
    setFinished(false);

    let cancelled = false;
    let segIdx = 0;
    let charIdx = 0;

    function step() {
      if (cancelled) return;
      if (segIdx >= SCRIPT.length) {
        setFinished(true);
        return;
      }
      const seg = SCRIPT[segIdx];
      if (charIdx === 0) {
        setRendered((prev) => [...prev, { kind: seg.kind, text: '', done: false }]);
      }
      if (charIdx < seg.text.length) {
        const nextChar = seg.text[charIdx];
        charIdx++;
        setRendered((prev) => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          if (last) copy[copy.length - 1] = { ...last, text: last.text + nextChar };
          return copy;
        });
        const speed = SPEEDS[seg.kind];
        const chunk = seg.kind === 'tool-call' || seg.kind === 'tool-result' ? 3 : 1;
        if (chunk > 1 && charIdx + chunk < seg.text.length) {
          const slice = seg.text.slice(charIdx, charIdx + chunk - 1);
          charIdx += chunk - 1;
          setRendered((prev) => {
            const copy = [...prev];
            const last = copy[copy.length - 1];
            if (last) copy[copy.length - 1] = { ...last, text: last.text + slice };
            return copy;
          });
        }
        timerRef.current = setTimeout(step, speed);
      } else {
        setRendered((prev) => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          if (last) copy[copy.length - 1] = { ...last, done: true };
          return copy;
        });
        const pause = PAUSES[seg.kind];
        segIdx++;
        charIdx = 0;
        timerRef.current = setTimeout(step, pause);
      }
    }

    timerRef.current = setTimeout(step, 600);

    return () => {
      cancelled = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [SCRIPT]);

  const prefixes: Record<Segment['kind'], { label: string; color: string }> = {
    user: { label: tr.prefixUser, color: 'var(--fg-muted)' },
    agent: { label: tr.prefixAgent, color: 'var(--accent)' },
    'tool-call': { label: tr.prefixToolCall, color: 'var(--color-status-info)' },
    'tool-result': { label: tr.prefixToolResult, color: 'var(--color-status-online)' },
  };

  return (
    <div
      className="rounded-xl overflow-hidden mono text-[12.5px] leading-[1.7] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]"
      style={{
        background: 'var(--code-bg)',
        border: '1px solid var(--border)',
      }}
      aria-label="Demonstration of an AI agent using MultiSQL Pro"
      role="img"
    >
      <div
        className="flex items-center gap-2 px-3.5 py-2.5 border-b"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-subtle)' }}
      >
        <span className="flex items-center gap-1.5">
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#ff5f57' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#febc2e' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#28c840' }} />
        </span>
        <span
          className="ml-2 text-[11px]"
          style={{ color: 'var(--fg-subtle)' }}
        >
          {tr.headerTitle}
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[10.5px]" style={{ color: 'var(--fg-subtle)' }}>
          <span className="status-dot" data-status="online" />
          {tr.headerStatus}
        </span>
      </div>

      <div
        className="p-4 sm:p-5 h-[540px] overflow-y-auto"
        style={{ color: 'var(--fg)' }}
      >
        {rendered.map((seg, i) => (
          <Line
            key={i}
            segment={seg}
            isLast={i === rendered.length - 1 && !finished}
            prefix={prefixes[seg.kind]}
          />
        ))}
        {finished && (
          <div className="mt-2" style={{ color: 'var(--accent)' }}>
            <span>▸</span>
            <span className="caret" aria-hidden />
          </div>
        )}
      </div>
    </div>
  );
}

function Line({
  segment,
  isLast,
  prefix,
}: {
  segment: { kind: Segment['kind']; text: string; done: boolean };
  isLast: boolean;
  prefix: { label: string; color: string };
}) {
  return (
    <div className="mb-3 last:mb-0">
      <div
        className="text-[10.5px] uppercase tracking-[0.07em] mb-1"
        style={{ color: prefix.color }}
      >
        {prefix.label}
      </div>
      <pre
        className="m-0 whitespace-pre-wrap break-words"
        style={{
          color: segment.kind === 'agent' ? 'var(--fg)' : 'var(--fg-muted)',
          fontFamily: 'inherit',
        }}
      >
        {segment.text}
        {!segment.done && isLast && <span className="caret" aria-hidden />}
      </pre>
    </div>
  );
}
