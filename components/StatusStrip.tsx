type Conn = {
  id: string;
  status: 'online' | 'offline' | 'readonly' | 'warn';
  label: string;
  latency: string;
  region?: string;
};

const CONNS: Conn[] = [
  { id: 'cloud', status: 'online', label: 'cloud', latency: '142ms', region: 'us-east' },
  { id: 'qa-mx', status: 'online', label: 'qa-mx', latency: '89ms', region: 'mx-cdmx' },
  { id: 'prod-eu', status: 'readonly', label: 'prod-eu', latency: '203ms', region: 'eu-west' },
  { id: 'intranet', status: 'online', label: 'intranet', latency: '14ms', region: 'on-prem' },
  { id: 'qa-pe', status: 'warn', label: 'qa-pe', latency: '512ms', region: 'pe-lima' },
  { id: 'prod-us', status: 'readonly', label: 'prod-us', latency: '178ms', region: 'us-west' },
  { id: 'dev-local', status: 'online', label: 'dev-local', latency: '3ms', region: 'localhost' },
  { id: 'reporting', status: 'readonly', label: 'reporting', latency: '231ms', region: 'us-east' },
];

function Card({ c }: { c: Conn }) {
  return (
    <div
      className="shrink-0 inline-flex items-center gap-3 px-3.5 py-2 rounded-md mono"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        minWidth: 220,
      }}
    >
      <span className="status-dot" data-status={c.status} />
      <span className="text-[12px]" style={{ color: 'var(--fg)' }}>
        {c.label}
      </span>
      <span className="text-[11px]" style={{ color: 'var(--fg-subtle)' }}>
        ·
      </span>
      <span className="text-[11px]" style={{ color: 'var(--fg-muted)' }}>
        {c.status}
      </span>
      <span className="text-[11px]" style={{ color: 'var(--fg-subtle)' }}>
        ·
      </span>
      <span className="text-[11px]" style={{ color: 'var(--fg-muted)' }}>
        {c.latency}
      </span>
    </div>
  );
}

export function StatusStrip() {
  const duped = [...CONNS, ...CONNS];
  return (
    <section
      className="py-6 relative overflow-hidden"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg-panel)',
      }}
      aria-label="Live connection status preview"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, var(--bg-panel), transparent)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, var(--bg-panel), transparent)' }} />

      <div className="flex gap-3 ticker-track" style={{ width: 'max-content' }}>
        {duped.map((c, i) => (
          <Card key={`${c.id}-${i}`} c={c} />
        ))}
      </div>
    </section>
  );
}
