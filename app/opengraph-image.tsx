import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'MultiSQL Pro — One MCP. Every SQL Server. Zero risk in production.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0e1218',
          color: '#f4f4f5',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: 'rgba(163, 230, 53, 0.18)',
            filter: 'blur(80px)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            color: '#a3e635',
            fontSize: 22,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 4,
              background: '#a3e635',
            }}
          />
          MultiSQL Pro
        </div>

        <div
          style={{
            marginTop: 80,
            fontSize: 84,
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            fontWeight: 600,
            maxWidth: 980,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>One MCP.</span>
          <span style={{ color: '#a1a1aa' }}>Every SQL Server.</span>
          <span style={{ color: '#a3e635' }}>Zero risk in production.</span>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 70,
            left: 80,
            right: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#71717a',
            fontSize: 22,
            letterSpacing: '0.02em',
          }}
        >
          <span>github.com/AlonsoAM/multisql-pro</span>
          <span>by Alonso Anchante · MIT</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
