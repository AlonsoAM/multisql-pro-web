import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'MCP',
    'Model Context Protocol',
    'SQL Server',
    'MSSQL',
    'Claude Code',
    'Claude Desktop',
    'Cursor',
    'Windsurf',
    'OpenCode',
    'Codex',
    'VS Code MCP',
    'AI agents',
    'AI database tools',
    'LLM database',
    'MultiSQL Pro',
    'database MCP server',
    'SQL agent',
  ],
  authors: [{ name: site.author.name, url: site.github.url }],
  creator: site.author.name,
  publisher: site.author.name,
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.webmanifest',
  // verification: { google: 'PASTE-GOOGLE-SEARCH-CONSOLE-TOKEN-HERE' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1218' },
  ],
};

const themeScript = `(function(){try{var s=localStorage.getItem('multisql.theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='light'||s==='dark'?s:(m?'dark':'light');document.documentElement.setAttribute('data-theme',t);document.documentElement.dataset.themePref=s||'system';}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
