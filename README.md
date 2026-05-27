<div align="center">

<img src="./app/icon.svg" alt="MultiSQL Pro" width="72" height="72" />

# MultiSQL Pro · Website

### Un MCP. Cada SQL Server. Cero riesgo en producción.

Sitio web oficial y documentación bilingüe (ES / EN) de  
**[MultiSQL Pro](https://github.com/AlonsoAM/multisql-pro)** — servidor open source del Model Context Protocol para SQL Server.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-15-000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MDX](https://img.shields.io/badge/MDX-Shiki-1B1F24?style=flat-square&logo=mdx&logoColor=white)](https://mdxjs.com/)
[![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](./LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/AlonsoAM/multisql-pro-web?style=flat-square&logo=github&color=facc15)](https://github.com/AlonsoAM/multisql-pro-web/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/AlonsoAM/multisql-pro-web?style=flat-square&logo=github&color=ef4444)](https://github.com/AlonsoAM/multisql-pro-web/issues)
[![Last commit](https://img.shields.io/github/last-commit/AlonsoAM/multisql-pro-web?style=flat-square&logo=github)](https://github.com/AlonsoAM/multisql-pro-web/commits/main)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/new/clone?repository-url=https://github.com/AlonsoAM/multisql-pro-web)

<br />

[**Sitio en vivo**](https://multisql-pro.dev) ·
[**Documentación**](https://multisql-pro.dev/es/docs) ·
[**Servidor MCP**](https://github.com/AlonsoAM/multisql-pro) ·
[**Reportar bug**](https://github.com/AlonsoAM/multisql-pro-web/issues/new)

</div>

<br />

> Construido con **Next.js 15** (App Router · Turbopack), **TypeScript estricto**, **Tailwind CSS v4**, **MDX**, **Shiki** y **Geist**.  
> 37 rutas estáticas pre-renderizadas · Sin librería de UI · Cero telemetría.

---

## Características

- **Documentación bilingüe (ES / EN)** con enrutamiento por locale (`/es`, `/en`), middleware de redirección y selector visual de idioma.
- **15 páginas de docs traducidas** — quickstart, instalación, configuración, modelo de permisos, referencia de herramientas MCP, API HTTP, ejemplos, troubleshooting y 7 integraciones (Claude Code, Claude Desktop, Cursor, Windsurf, OpenCode, Codex, VS Code MCP).
- **i18n custom** basado en URL + cookie de preferencia, sin librerías externas.
- **Indicador de progreso de navegación** y skeleton de carga para la sección de docs.
- **Tema claro / oscuro** con persistencia y aplicación pre-paint (sin FOUC).
- **MDX + Shiki** — código resaltado en build time con `github-dark-default` y `github-light`.
- **Sitemap multi-locale**, `robots.txt` y OpenGraph image dinámica.
- **37 rutas estáticas** pre-renderizadas (SSG completo).

## Stack técnico

| Capa            | Tecnología                                                |
| --------------- | --------------------------------------------------------- |
| Framework       | Next.js 15 (App Router, Server Components, Turbopack)     |
| Lenguaje        | TypeScript 5 con `strict: true`                           |
| Estilos         | Tailwind CSS v4 (CSS-first) + tokens en `globals.css`     |
| Contenido       | MDX (`@next/mdx`) + remark-gfm + rehype-slug              |
| Highlighting    | Shiki (build-time, doble tema)                            |
| Tipografía      | Geist Sans + Geist Mono (next/font)                       |
| Iconos          | SVG inline (sin librería externa)                         |
| i18n            | Custom — middleware + cookie + Context API                |
| Deploy          | Vercel (zero-config)                                      |

## Inicio rápido

```bash
git clone https://github.com/AlonsoAM/multisql-pro-web.git
cd multisql-pro-web
npm install
npm run dev
```

Dev server en `http://localhost:3000` con Turbopack. Por defecto redirige a `/es`; cambia idioma desde el selector del navbar.

## Scripts

| Comando          | Descripción                                       |
| ---------------- | ------------------------------------------------- |
| `npm run dev`    | Servidor de desarrollo (Turbopack, HMR).          |
| `npm run build`  | Build de producción + generación estática.        |
| `npm start`      | Sirve el build de producción.                     |
| `npm run lint`   | Lint con ESLint (config Next.js).                 |

## Estructura

```
multisql-pro-web/
├── app/
│   ├── [locale]/                       # Enrutamiento por idioma (es | en)
│   │   ├── layout.tsx                  # Provider i18n + NavProgress
│   │   ├── page.tsx                    # Landing page
│   │   └── docs/
│   │       ├── layout.tsx              # Layout de docs (navbar + footer)
│   │       ├── loading.tsx             # Skeleton durante navegación
│   │       ├── page.tsx                # Índice de docs
│   │       ├── getting-started/        # Cada ruta: page.tsx + content.es.mdx + content.en.mdx
│   │       ├── installation/
│   │       ├── configuration/
│   │       ├── permissions/
│   │       ├── tools/
│   │       ├── api/
│   │       ├── examples/
│   │       ├── troubleshooting/
│   │       └── integrations/
│   │           ├── claude-code/
│   │           ├── claude-desktop/
│   │           ├── cursor/
│   │           ├── windsurf/
│   │           ├── opencode/
│   │           ├── codex/
│   │           └── vscode/
│   ├── layout.tsx                      # Root layout (fonts, theme bootstrap)
│   ├── globals.css                     # Tailwind v4 + theme tokens
│   ├── opengraph-image.tsx             # OG image dinámica
│   ├── sitemap.ts                      # Sitemap multi-locale
│   └── robots.ts
├── components/                         # UI (RSC + client donde se requiere)
├── lib/
│   ├── i18n.ts                         # Traducciones ES / EN
│   ├── i18n-context.tsx                # Provider + hook + helper localePath
│   ├── docs-nav.ts                     # Sidebar + prev/next por locale
│   ├── site.ts                         # Constantes del sitio
│   ├── github.ts                       # Fetch de stars (build-time)
│   └── shiki.ts                        # Highlighter singleton
├── middleware.ts                       # Redirige / → /{locale}
├── mdx-components.tsx                  # Mapeo MDX → componentes custom
├── next.config.mjs
└── tsconfig.json
```

## Sistema i18n

- Locale activo en la URL: `/es/...` o `/en/...`.
- Middleware (`middleware.ts`) intercepta rutas sin prefijo y redirige según cookie `multisql.locale` o cabecera `Accept-Language`.
- `I18nProvider` se monta en `app/[locale]/layout.tsx` con el locale resuelto.
- Hook `useI18n()` expone `{ locale, t }`. Helper `localePath(locale, href)` para links locale-aware.
- Cada doc page importa `content.es.mdx` y `content.en.mdx` y selecciona según locale.

Para añadir un nuevo idioma:

1. Extiende `locales` en [lib/i18n.ts](lib/i18n.ts).
2. Añade el bloque de traducciones (`site`, `navbar`, `hero`, `docs`, `docsMeta`, ...).
3. Crea `content.{locale}.mdx` por cada doc page.

## Tema

Light / dark theme con preferencia en `localStorage["multisql.theme"]` (`light` | `dark` | ausente = sistema). Script inline en `<head>` aplica el tema antes del primer paint para evitar FOUC. Toggle visible en el navbar.

## Code blocks

MDX usa Shiki en build time con `github-dark-default` y `github-light`. Ambos temas se emiten como variables CSS y se intercambian según `data-theme` del `<html>`.

## Deploy

Proyecto Next.js estándar. Conecta el repo a [Vercel](https://vercel.com/new) y deploya en push a `main` sin config adicional.

```bash
vercel
```

Variables de entorno opcionales:

| Variable        | Uso                                                                 |
| --------------- | ------------------------------------------------------------------- |
| `GITHUB_TOKEN`  | Aumenta el rate limit al fetchear stars de GitHub (no requerido).   |

## Convenciones

- **ESM only** (`"type": "module"` en `package.json`).
- **TypeScript estricto**.
- **Sin UI kit externo** — todo construido a mano sobre tokens en `app/globals.css`.
- **Server Components por defecto**. Client components marcados explícitamente: `Navbar`, `Footer`, `Hero`, `CTABand`, `Terminal`, `LanguageSelector`, `ThemeToggle`, `NavProgress`, `DocsLayout`, `DocsSidebar`, `DocsMobileNav`, `OnThisPage`, `CopyButton`, `TranslationPendingBanner`.

## Roadmap

- [ ] Búsqueda full-text en docs (cmd+k).
- [ ] Versionado de documentación.
- [ ] Más idiomas (PT, FR).
- [ ] Diagramas con Mermaid en MDX.

## Contribuir

¿Encontraste un error en los docs? ¿Quieres mejorar una traducción? PRs y issues son bienvenidos.

1. Haz fork del repo.
2. Crea una rama: `git checkout -b feat/mi-mejora`.
3. Sigue las convenciones del proyecto (TS estricto, ESLint).
4. Commit en español siguiendo [Conventional Commits](https://www.conventionalcommits.org/es/).
5. Abre un PR contra `main`.

Para reportar bugs o solicitar features: [abre un issue](https://github.com/AlonsoAM/multisql-pro-web/issues/new).

## Proyectos relacionados

| Proyecto                                                                              | Descripción                                       |
| ------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`multisql-pro`](https://github.com/AlonsoAM/multisql-pro)                            | El servidor MCP en sí (Node + mssql).             |
| [`multisql-pro-web`](https://github.com/AlonsoAM/multisql-pro-web)                    | Este sitio (Next.js + MDX).                       |
| [Model Context Protocol](https://modelcontextprotocol.io)                             | Especificación del protocolo MCP por Anthropic.   |

## Agradecimientos

- [Anthropic](https://anthropic.com) por el Model Context Protocol.
- [Vercel](https://vercel.com) por Next.js y el hosting gratis.
- [Shiki](https://shiki.style) por el syntax highlighting de calidad VS Code.
- La comunidad MCP open source.

<br />

---

<div align="center">

### ⭐ ¿Te gustó el proyecto?

Una estrella en GitHub me ayuda a saber que vale la pena seguir mejorándolo.

[![Star on GitHub](https://img.shields.io/github/stars/AlonsoAM/multisql-pro-web?style=social)](https://github.com/AlonsoAM/multisql-pro-web/stargazers)

<br />

**Hecho con cuidado en Ica, Perú 🇵🇪**

por **[Alonso Anchante](https://github.com/AlonsoAM)** · Full Stack Engineer  
[GitHub](https://github.com/AlonsoAM) · [Email](mailto:alonso.amoreno@live.com)

<br />

[MIT License](./LICENSE) © 2026 Alonso Anchante

<sub>Si este proyecto te ayudó, considera darle una estrella ⭐ — significa mucho.</sub>

</div>
