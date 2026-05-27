# MultiSQL Pro · Website

Marketing and documentation website for [MultiSQL Pro](https://github.com/AlonsoAM/multisql-pro) — the open-source MCP server for SQL Server.

Built with **Next.js 15** (App Router · Turbopack), **TypeScript**, **Tailwind CSS v4**, **MDX**, **Shiki** and **Geist**.

## Develop

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000` with Turbopack.

## Build

```bash
npm run build
npm start
```

## Deploy

This is a vanilla Next.js project. Connect the repo to Vercel and it deploys
on push to `main` with zero config.

```bash
vercel
```

## Project structure

```
multisql-pro-web/
├── app/
│   ├── docs/                       # Docs section (MDX-driven)
│   │   ├── page.tsx                # /docs overview
│   │   ├── layout.tsx              # Docs root layout (navbar + footer)
│   │   ├── getting-started/        # Quickstart
│   │   ├── installation/
│   │   ├── configuration/          # Dashboard tour
│   │   ├── tools/                  # MCP tools reference
│   │   ├── permissions/            # Permission model
│   │   ├── api/                    # HTTP API reference
│   │   ├── examples/               # Agent prompt cookbook
│   │   ├── troubleshooting/
│   │   └── integrations/
│   │       ├── claude-code/
│   │       ├── claude-desktop/
│   │       ├── cursor/
│   │       └── windsurf/
│   ├── globals.css                 # Tailwind v4 + theme tokens
│   ├── layout.tsx                  # Root layout, fonts, theme bootstrap
│   ├── page.tsx                    # Landing page
│   ├── opengraph-image.tsx         # OG image generator
│   ├── sitemap.ts
│   ├── robots.ts
│   └── favicon.svg
├── components/                     # All UI components (RSC by default)
├── lib/
│   ├── site.ts                     # Site constants (URLs, author, repo)
│   ├── docs-nav.ts                 # Sidebar + prev/next data
│   ├── github.ts                   # GitHub stars fetch (build-time)
│   └── shiki.ts                    # Shiki highlighter singleton
├── mdx-components.tsx              # MDX → Shiki + Link
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Conventions

- **ESM only**: `"type": "module"` in package.json.
- **Strict TypeScript**.
- **No external UI kit**. Everything is hand-built and styled with the
  theme tokens in `app/globals.css`.
- **Server Components** by default. Client components are explicitly
  marked: `Navbar`, `ThemeToggle`, `Terminal`, `OnThisPage`,
  `CopyButton`, `DocsSidebar`, `DocsMobileNav`.

## Theme

The site has light and dark themes. Theme preference is stored in
`localStorage["multisql.theme"]` (`light` / `dark`) or unset for System.
A small inline script in `<head>` applies the theme before paint to
avoid FOUC.

## Code blocks

All MDX code blocks are highlighted at build time by Shiki using
`github-dark-default` and `github-light`. Both themes are emitted via CSS
variables and swapped based on the active `data-theme` attribute.

## Author

[Alonso Anchante](https://github.com/AlonsoAM) · Full Stack Engineer · Ica, Peru

MIT License — see [LICENSE](./LICENSE).
