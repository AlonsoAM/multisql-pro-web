import { DatabaseIcon } from './Icons';

export function Logo({ withTag = true }: { withTag?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className="inline-flex items-center justify-center"
        style={{
          width: 28,
          height: 28,
          borderRadius: 7,
          background: 'var(--accent-soft)',
          border: '1px solid var(--border)',
          color: 'var(--accent)',
        }}
      >
        <DatabaseIcon size={15} />
      </span>
      <span className="flex items-baseline gap-1.5">
        <span className="text-[15px] font-semibold tracking-tight">MultiSQL</span>
        <span className="text-[15px] font-medium" style={{ color: 'var(--fg-muted)' }}>
          Pro
        </span>
        {withTag && (
          <span
            className="mono text-[9px] font-medium uppercase tracking-[0.08em] px-1 py-[1px] rounded ml-1 hidden sm:inline-block"
            style={{
              color: 'var(--accent)',
              background: 'var(--accent-soft)',
              border: '1px solid var(--border)',
            }}
          >
            MCP
          </span>
        )}
      </span>
    </span>
  );
}
