'use client';

import { CodeBlockClient } from './CodeBlockClient';
import { useI18n } from '@/lib/i18n-context';

const CONFIG_JSON = `{
  "connections": {
    "cloud": {
      "name": "BD Cloud",
      "type": "dev",
      "config": {
        "authType": "sql",
        "server": "192.168.0.10",
        "port": 1433,
        "database": "MI_BD",
        "user": "miUsuario",
        "password": "miPassword",
        "options": { "encrypt": false, "trustServerCertificate": true }
      }
    },
    "prod": {
      "name": "BD Produccion",
      "type": "prod",
      "config": {
        "authType": "sql",
        "server": "10.0.0.20",
        "port": 1433,
        "database": "MI_BD_PROD",
        "user": "lectorProd",
        "password": "********",
        "options": { "encrypt": false, "trustServerCertificate": true }
      }
    }
  },
  "settings": {
    "queryTimeout": 60000,
    "maxRows": 10000,
    "dashboardPort": 4567
  }
}`;

const MCP_REGISTER = `{
  "mcpServers": {
    "multisql-pro": {
      "command": "node",
      "args": [
        "C:/path/to/multisql-pro/src/server.js"
      ]
    }
  }
}`;

export function CodePreview() {
  const { t } = useI18n();

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p
            className="mono text-[11px] uppercase tracking-[0.1em] mb-3"
            style={{ color: 'var(--accent)' }}
          >
            {t.codePreview.sectionLabel}
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-semibold tracking-[-0.03em]">
            {t.codePreview.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <p className="text-[13px] mono mb-2" style={{ color: 'var(--fg-subtle)' }}>
              {t.codePreview.yourConnections}
            </p>
            <CodeBlockClient code={CONFIG_JSON} lang="json" filename="config.json" />
          </div>
          <div>
            <p className="text-[13px] mono mb-2" style={{ color: 'var(--fg-subtle)' }}>
              {t.codePreview.yourAiClient}
            </p>
            <CodeBlockClient code={MCP_REGISTER} lang="json" filename="claude_desktop_config.json" />
          </div>
        </div>
      </div>
    </section>
  );
}
