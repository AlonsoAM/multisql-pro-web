export type Locale = 'es' | 'en';

export const defaultLocale: Locale = 'es';

export const locales: Locale[] = ['es', 'en'];

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

export type Translations = typeof translations.es;

export const translations = {
  es: {
    site: {
      tagline: 'Un MCP. Cada SQL Server. Cero riesgo en producción.',
      description:
        'Un servidor Model Context Protocol de grado producción que conecta agentes de IA a múltiples bases de datos SQL Server con control estricto de permisos por entorno.',
    },
    navbar: {
      docs: 'Docs',
      integrations: 'Integraciones',
      examples: 'Ejemplos',
      github: 'GitHub',
    },
    hero: {
      badge: 'v2.0 · listo para producción',
      titlePart1: 'Un MCP.',
      titlePart2: 'Cada SQL Server.',
      titlePart3: 'Cero riesgo en producción.',
      description:
        'MultiSQL Pro es un servidor Model Context Protocol que le da a Claude Code, Cursor y Windsurf acceso seguro a cada SQL Server que tengas — desde entornos de desarrollo hasta réplicas de producción de solo lectura — todo detrás de una única interfaz con control de permisos.',
      getStarted: 'Comenzar',
      viewOnGitHub: 'Ver en GitHub',
      mcpNative: 'MCP-native',
      nodeVersion: 'Node 18+',
      sqlVersion: 'SQL Server 2016+',
      license: 'MIT',
    },
    statusStrip: {
      online: 'en línea',
      offline: 'desconectado',
      readonly: 'solo lectura',
      warn: 'advertencia',
    },
    features: {
      sectionLabel: 'Pensado para trabajo multi-base diario',
      title:
        'Diseñado para equipos que operan en dev, qa y producción al mismo tiempo.',
      description:
        'Cada característica existe porque alguien la necesitó en un día de trabajo real. Sin buzzwords, sin ML, sin telemetría — solo un límite cuidadoso entre el agente y tus datos.',
      items: [
        {
          title: 'N conexiones, un solo MCP',
          body: 'Registra tantas instancias de SQL Server como necesites bajo un único servidor Model Context Protocol. El agente elige la correcta por id en cada llamada.',
        },
        {
          title: 'Control de permisos por entorno',
          body: 'Etiqueta cada conexión como dev, qa, readonly o prod. Un parser SQL rechaza cada verbo de escritura en entornos de solo lectura antes de que la consulta salga del servidor.',
        },
        {
          title: 'SQL y autenticación Windows',
          body: 'Soporte nativo para usuario + contraseña y NTLM integrado con dominio. El dashboard detecta automáticamente la identidad actual de Windows.',
        },
        {
          title: 'Dashboard de estado en vivo',
          body: 'Una web UI integrada muestra latencia, estado y entorno de cada conexión. Ping paralelo al cargar, refresco manual, búsqueda instantánea.',
        },
        {
          title: 'Auto-descubrimiento de bases de datos',
          body: 'Apunta el dashboard a un servidor y haz clic en Cargar: consulta sys.databases y te da una lista autocompletable de cada base de datos a la que puedes llegar.',
        },
        {
          title: 'MCP-native, sin código glue',
          body: 'Drop-in para Claude Code, Claude Desktop, Cursor, Windsurf y cualquier cliente compatible con MCP. Reutilización de pool, cierre limpio en SIGINT/SIGTERM.',
        },
      ],
    },
    steps: {
      sectionLabel: 'Cómo funciona',
      title: 'De cero a tu primera consulta en cinco minutos.',
      items: [
        {
          num: '01',
          title: 'Configura conexiones',
          body: 'Ejecuta npm run config y agrega tus bases de datos a través del dashboard. Prueba, edita y etiqueta cada conexión en segundos.',
        },
        {
          num: '02',
          title: 'Registra el MCP',
          body: 'Agrega una entrada apuntando a src/server.js en la configuración de tu cliente de IA — Claude Code, Claude Desktop, Cursor o Windsurf.',
        },
        {
          num: '03',
          title: 'Pregunta en lenguaje natural',
          body: 'El agente ahora ve cada conexión. Pregunta sobre schemas, tablas, definiciones o ejecuta SELECTs seguros en producción.',
        },
      ],
    },
    integrations: {
      label: 'Integraciones',
      title: 'Funciona con cada cliente de IA compatible con MCP.',
      compatible: 'Compatible con MCP',
    },
    codePreview: {
      sectionLabel: 'Dos archivos. Eso es todo.',
      title:
        'Una configuración para tus bases de datos. Una entrada en tu cliente de IA.',
      yourConnections: '▸ Tus conexiones',
      yourAiClient: '▸ Tu cliente de IA',
    },
    permissionsTable: {
      sectionLabel: 'La característica estrella',
      titlePart1: 'Producción se mantiene solo lectura.',
      titlePart2: 'Incluso cuando el agente no está de acuerdo.',
      description:
        'Un parser SQL elimina comentarios, separa por sentencia, extrae el primer verbo, y rechaza cualquier cosa que no sea una lectura en una conexión de solo lectura. Tu motor nunca ve una consulta insegura.',
      readThePermissionModel: 'Leer el modelo de permisos',
      connectionType: 'Tipo de conexión',
      select: 'SELECT',
      dml: 'DML',
      ddl: 'DDL',
      exec: 'EXEC',
      readWrite: 'lectura/escritura',
      readOnly: 'solo lectura',
      rows: [
        {
          type: 'dev',
          description:
            'Lectura + escritura + DDL completo. Para entornos sandbox locales.',
        },
        {
          type: 'qa',
          description:
            'Igual que dev. Etapa de migraciones y fixtures de prueba.',
        },
        {
          type: 'readonly',
          description: 'Solo SELECT. El parser bloquea cada verbo de escritura.',
        },
        {
          type: 'prod',
          description:
            'Solo SELECT. Bloqueado totalmente. Nunca tocado por accidente.',
        },
      ],
    },
    ctaBand: {
      titlePart1: '¿Listo para darle a tu agente acceso seguro a',
      titlePart2: 'cada SQL Server',
      titlePart3: 'en tu organización?',
      description:
        'Cinco minutos desde clone hasta la primera consulta. Sin cuenta SaaS. Sin telemetría. Todo corre en tu máquina.',
      getStarted: 'Comenzar',
      starOnGitHub: 'Star en GitHub',
    },
    footer: {
      product: 'Producto',
      home: 'Inicio',
      quickstart: 'Inicio rápido',
      dashboard: 'Dashboard',
      permissions: 'Permisos',
      docs: 'Docs',
      overview: 'Vista general',
      mcpTools: 'Herramientas MCP',
      httpApi: 'API HTTP',
      examples: 'Ejemplos',
      troubleshooting: 'Solución de problemas',
      integrations: 'Integraciones',
      author: 'Autor',
      aboutMcp: 'Acerca de MCP',
      description:
        'Un servidor Model Context Protocol para SQL Server. Multi-conexión, con permisos controlados, impulsado por dashboard. Código abierto bajo MIT.',
      license: 'Licencia',
      builtWith: 'Construido con Next.js · Desplegado en Vercel',
    },
    docs: {
      title: 'Documentación',
      description:
        'Configura, registra y opera MultiSQL Pro. Referencia de cada herramienta MCP, opción del dashboard e integración.',
      homeDescription:
        'Todo lo que necesitas para configurar MultiSQL Pro y conectarlo a tu cliente de IA preferido. Comienza con el inicio rápido si es tu primera vez.',
      whereToStart: 'Por dónde empezar',
      whatIsMcp: '¿Qué es el Model Context Protocol?',
      whatIsMcpText:
        'MCP es un protocolo abierto que estandariza cómo las aplicaciones de IA exponen herramientas y datos a modelos de lenguaje. MultiSQL Pro implementa MCP sobre stdio, así que cualquier cliente que hable el protocolo — Claude Code, Claude Desktop, Cursor, Windsurf — puede usar cada herramienta que ofrecemos sin escribir código glue.',
      newToMultisqlBefore: 'Si nunca usaste MultiSQL Pro, sigue el',
      newToMultisqlLink: 'inicio rápido',
      newToMultisqlAfter: '— toma unos cinco minutos desde clone hasta la primera consulta.',
      comfortableBefore: '¿Ya te sientes cómodo con servidores MCP? Salta a',
      comfortableLink1: 'configurar conexiones',
      comfortableMiddle: 'y luego registra el MCP en tu',
      comfortableLink2: 'cliente de IA',
      comfortableAfter: '.',
    },
    docsNav: {
      gettingStarted: 'Inicio',
      overview: 'Vista general',
      overviewDesc: 'Qué es MultiSQL Pro y por qué existe.',
      quickstart: 'Inicio rápido',
      quickstartDesc: 'De clone a primera consulta en cinco minutos.',
      installation: 'Instalación',
      installationDesc: 'Clone, instala, primer arranque.',
      configuration: 'Configuración',
      dashboard: 'Dashboard',
      dashboardDesc: 'Configura conexiones vía la web UI.',
      permissions: 'Permisos',
      permissionsDesc: 'Cómo funciona el gating dev / qa / readonly / prod.',
      reference: 'Referencia',
      mcpTools: 'Herramientas MCP',
      mcpToolsDesc: 'Cada herramienta expuesta al agente.',
      httpApi: 'API HTTP',
      httpApiDesc: 'Endpoints REST del dashboard.',
      examples: 'Ejemplos',
      examplesDesc: 'Cookbook de prompts reales de agente.',
      integrations: 'Integraciones',
      claudeCode: 'Claude Code',
      claudeDesktop: 'Claude Desktop',
      cursor: 'Cursor',
      windsurf: 'Windsurf',
      openCode: 'OpenCode',
      codex: 'Codex',
      vscode: 'VS Code MCP',
      help: 'Ayuda',
      troubleshooting: 'Solución de problemas',
      troubleshootingDesc: 'Problemas comunes y sus soluciones.',
    },
    languageSelector: {
      label: 'Idioma',
    },
    pagination: {
      previous: 'Anterior',
      next: 'Siguiente',
    },
    terminal: {
      headerTitle: 'claude-code · multisql-pro · prod',
      headerStatus: 'en línea · 142ms',
      prefixUser: '› tú',
      prefixAgent: '◆ claude',
      prefixToolCall: '→ llamada',
      prefixToolResult: '← resultado',
      userPrompt: 'muéstrame los 5 clientes con mayor revenue en prod',
      agentIntro: 'Voy a consultar la conexión prod. Como es un entorno de solo lectura, solo SELECT está permitido.',
      toolResultMeta: '· 5 filas · 142ms · prod (readonly) ·',
      agentDone: 'Listo. 5 filas devueltas de prod. No se intentaron verbos de escritura.',
    },
    docsMeta: {
      permissions: {
        title: 'Modelo de permisos',
        description: 'Cómo MultiSQL Pro previene que el agente escriba en producción por accidente — o a propósito.',
      },
      gettingStarted: {
        title: 'Inicio rápido',
        description: 'De clone a primera consulta en cinco minutos.',
      },
      installation: {
        title: 'Instalación',
        description: 'Dos rutas de instalación, requisitos y comportamiento del primer arranque.',
      },
      configuration: {
        title: 'Configuración del dashboard',
        description: 'La web UI que agrega, prueba y etiqueta tus conexiones de SQL Server.',
      },
      tools: {
        title: 'Referencia de herramientas MCP',
        description: 'Cada herramienta expuesta al agente. Firmas, parámetros, formas de retorno, ejemplos.',
      },
      api: {
        title: 'API HTTP',
        description: 'Los endpoints REST expuestos por el dashboard de MultiSQL Pro, para automatización y scripting.',
      },
      examples: {
        title: 'Ejemplos',
        description: 'Un cookbook de prompts reales de agente y las llamadas a herramientas que producen.',
      },
      troubleshooting: {
        title: 'Solución de problemas',
        description: 'Problemas comunes y las soluciones que realmente funcionan.',
      },
      claudeCode: {
        title: 'Integración con Claude Code',
        description: 'Registra MultiSQL Pro en Claude Code vía CLI o configuración manual.',
      },
      claudeDesktop: {
        title: 'Integración con Claude Desktop',
        description: 'Registra MultiSQL Pro en Claude Desktop en Windows o macOS.',
      },
      cursor: {
        title: 'Integración con Cursor',
        description: 'Registra MultiSQL Pro como un servidor MCP dentro del editor Cursor.',
      },
      windsurf: {
        title: 'Integración con Windsurf',
        description: 'Registra MultiSQL Pro como un servidor MCP dentro de Windsurf (Codeium).',
      },
      opencode: {
        title: 'Integración con OpenCode',
        description: 'Registra MultiSQL Pro en OpenCode para conectar tus bases de datos SQL Server.',
      },
      codex: {
        title: 'Integración con Codex',
        description: 'Registra MultiSQL Pro en Codex, el agente de CLI de OpenAI.',
      },
      vscode: {
        title: 'Integración con VS Code MCP',
        description: 'Registra MultiSQL Pro como un servidor MCP dentro de Visual Studio Code.',
      },
    },
    translationPending: {
      title: 'Traducción pendiente',
      message: 'Esta página aún no está traducida al inglés. Mostrando contenido en español.',
    },
  },
  en: {
    site: {
      tagline: 'One MCP. Every SQL Server. Zero risk in production.',
      description:
        'A production-grade Model Context Protocol server that connects AI agents to multiple SQL Server databases with strict permission gating per environment.',
    },
    navbar: {
      docs: 'Docs',
      integrations: 'Integrations',
      examples: 'Examples',
      github: 'GitHub',
    },
    hero: {
      badge: 'v2.0 · production ready',
      titlePart1: 'One MCP.',
      titlePart2: 'Every SQL Server.',
      titlePart3: 'Zero risk in production.',
      description:
        'MultiSQL Pro is a Model Context Protocol server that gives Claude Code, Cursor and Windsurf safe access to every SQL Server you run — from dev sandboxes to read-only production replicas — all behind a single, permission-gated interface.',
      getStarted: 'Get started',
      viewOnGitHub: 'View on GitHub',
      mcpNative: 'MCP-native',
      nodeVersion: 'Node 18+',
      sqlVersion: 'SQL Server 2016+',
      license: 'MIT',
    },
    statusStrip: {
      online: 'online',
      offline: 'offline',
      readonly: 'readonly',
      warn: 'warn',
    },
    features: {
      sectionLabel: 'Built for daily multi-database work',
      title:
        'Designed for teams that operate across dev, qa, and production at the same time.',
      description:
        'Every feature exists because someone needed it on a real workday. No buzzwords, no ML, no telemetry — just a careful boundary between the agent and your data.',
      items: [
        {
          title: 'N connections, one MCP',
          body: 'Register as many SQL Server instances as you need under a single Model Context Protocol server. The agent picks the right one by id at call time.',
        },
        {
          title: 'Permission gating per environment',
          body: 'Tag each connection dev, qa, readonly or prod. A SQL parser rejects every write verb on read-only environments before the query ever leaves the server.',
        },
        {
          title: 'SQL & Windows auth',
          body: 'Native support for username + password and integrated NTLM with domain. The dashboard auto-detects the current Windows identity.',
        },
        {
          title: 'Live status dashboard',
          body: 'A built-in web UI shows latency, online state and environment for every connection. Parallel ping on load, manual refresh, instant search.',
        },
        {
          title: 'Auto-discovery of databases',
          body: 'Point the dashboard at a server and click Load: it queries sys.databases and gives you an autocomplete list of every database you can reach.',
        },
        {
          title: 'MCP-native, zero glue code',
          body: 'Drop-in for Claude Code, Claude Desktop, Cursor, Windsurf and any MCP-compatible client. Pool reuse, clean shutdown on SIGINT/SIGTERM.',
        },
      ],
    },
    steps: {
      sectionLabel: 'How it works',
      title: 'From zero to first query in five minutes.',
      items: [
        {
          num: '01',
          title: 'Configure connections',
          body: 'Run npm run config and add your databases through the dashboard. Test, edit and tag each connection in seconds.',
        },
        {
          num: '02',
          title: 'Register the MCP',
          body: 'Add one entry pointing to src/server.js in your AI client config — Claude Code, Claude Desktop, Cursor or Windsurf.',
        },
        {
          num: '03',
          title: 'Ask in natural language',
          body: 'The agent now sees every connection. Ask about schemas, tables, definitions or run safe SELECTs in production.',
        },
      ],
    },
    integrations: {
      label: 'Integrations',
      title: 'Works with every major MCP-compatible AI client.',
      compatible: 'MCP-compatible',
    },
    codePreview: {
      sectionLabel: "Two files. That's it.",
      title:
        'One config for your databases. One entry in your AI client.',
      yourConnections: '▸ Your connections',
      yourAiClient: '▸ Your AI client',
    },
    permissionsTable: {
      sectionLabel: 'The killer feature',
      titlePart1: 'Production stays read-only.',
      titlePart2: 'Even when the agent disagrees.',
      description:
        'A SQL parser strips comments, splits by statement, extracts the first verb, and rejects anything that isn\'t a read on a read-only connection. Your motor never sees an unsafe query.',
      readThePermissionModel: 'Read the permission model',
      connectionType: 'Connection type',
      select: 'SELECT',
      dml: 'DML',
      ddl: 'DDL',
      exec: 'EXEC',
      readWrite: 'read/write',
      readOnly: 'read-only',
      rows: [
        {
          type: 'dev',
          description: 'Full read + write + DDL. Use for local sandboxes.',
        },
        {
          type: 'qa',
          description: 'Same as dev. Stage migrations and test fixtures.',
        },
        {
          type: 'readonly',
          description: 'SELECT only. Parser blocks every write verb.',
        },
        {
          type: 'prod',
          description: 'SELECT only. Hard-locked. Never touched by accident.',
        },
      ],
    },
    ctaBand: {
      titlePart1: 'Ready to give your agent safe access to',
      titlePart2: 'every SQL Server',
      titlePart3: 'in your org?',
      description:
        'Five minutes from clone to first query. No SaaS account. No telemetry. Everything runs on your machine.',
      getStarted: 'Get started',
      starOnGitHub: 'Star on GitHub',
    },
    footer: {
      product: 'Product',
      home: 'Home',
      quickstart: 'Quickstart',
      dashboard: 'Dashboard',
      permissions: 'Permissions',
      docs: 'Docs',
      overview: 'Overview',
      mcpTools: 'MCP Tools',
      httpApi: 'HTTP API',
      examples: 'Examples',
      troubleshooting: 'Troubleshooting',
      integrations: 'Integrations',
      author: 'Author',
      aboutMcp: 'About MCP',
      description:
        'A Model Context Protocol server for SQL Server. Multi-connection, permission-gated, dashboard-driven. Open source under MIT.',
      license: 'License',
      builtWith: 'Built with Next.js · Deployed on Vercel',
    },
    docs: {
      title: 'Documentation',
      description:
        'Configure, register and operate MultiSQL Pro. Reference for every MCP tool, dashboard option and integration.',
      homeDescription:
        'Everything you need to set up MultiSQL Pro and connect it to your AI agent of choice. Start with the quickstart if this is your first time.',
      whereToStart: 'Where to start',
      whatIsMcp: 'What is the Model Context Protocol?',
      whatIsMcpText:
        'MCP is an open protocol that standardizes how AI applications expose tools and data to language models. MultiSQL Pro implements MCP over stdio, so any client that speaks the protocol — Claude Code, Claude Desktop, Cursor, Windsurf — can use every tool we ship without writing glue code.',
      newToMultisqlBefore: 'If you have never used MultiSQL Pro, follow the',
      newToMultisqlLink: 'quickstart',
      newToMultisqlAfter: '— it takes about five minutes from clone to first query.',
      comfortableBefore: 'Already comfortable with MCP servers? Jump to',
      comfortableLink1: 'configuring connections',
      comfortableMiddle: 'and then register the MCP in your',
      comfortableLink2: 'AI client',
      comfortableAfter: '.',
    },
    docsNav: {
      gettingStarted: 'Getting Started',
      overview: 'Overview',
      overviewDesc: 'What MultiSQL Pro is and why it exists.',
      quickstart: 'Quickstart',
      quickstartDesc: 'From clone to first query in five minutes.',
      installation: 'Installation',
      installationDesc: 'Clone, install, first boot.',
      configuration: 'Configuration',
      dashboard: 'Dashboard',
      dashboardDesc: 'Configure connections via the web UI.',
      permissions: 'Permissions',
      permissionsDesc: 'How dev / qa / readonly / prod gating works.',
      reference: 'Reference',
      mcpTools: 'MCP Tools',
      mcpToolsDesc: 'Every tool exposed to the agent.',
      httpApi: 'HTTP API',
      httpApiDesc: 'Dashboard REST endpoints.',
      examples: 'Examples',
      examplesDesc: 'Cookbook of realistic agent prompts.',
      integrations: 'Integrations',
      claudeCode: 'Claude Code',
      claudeDesktop: 'Claude Desktop',
      cursor: 'Cursor',
      windsurf: 'Windsurf',
      openCode: 'OpenCode',
      codex: 'Codex',
      vscode: 'VS Code MCP',
      help: 'Help',
      troubleshooting: 'Troubleshooting',
      troubleshootingDesc: 'Common issues and their fixes.',
    },
    languageSelector: {
      label: 'Language',
    },
    pagination: {
      previous: 'Previous',
      next: 'Next',
    },
    terminal: {
      headerTitle: 'claude-code · multisql-pro · prod',
      headerStatus: 'online · 142ms',
      prefixUser: '› you',
      prefixAgent: '◆ claude',
      prefixToolCall: '→ call',
      prefixToolResult: '← result',
      userPrompt: 'show me the top 5 customers by revenue in prod',
      agentIntro: "I'll query the prod connection. Since it's a read-only environment, only SELECT is allowed.",
      toolResultMeta: '· 5 rows · 142ms · prod (readonly) ·',
      agentDone: 'Done. 5 rows returned from prod. No write verbs were attempted.',
    },
    docsMeta: {
      permissions: {
        title: 'Permission model',
        description: "How MultiSQL Pro prevents the agent from writing to production by accident — or on purpose.",
      },
      gettingStarted: {
        title: 'Quickstart',
        description: 'From clone to first query in five minutes.',
      },
      installation: {
        title: 'Installation',
        description: 'Two install paths, requirements, and first-boot behavior.',
      },
      configuration: {
        title: 'Dashboard configuration',
        description: 'The web UI that adds, tests and tags your SQL Server connections.',
      },
      tools: {
        title: 'MCP tools reference',
        description: 'Every tool exposed to the agent. Signatures, parameters, return shapes, examples.',
      },
      api: {
        title: 'HTTP API',
        description: 'The REST endpoints exposed by the MultiSQL Pro dashboard, for automation and scripting.',
      },
      examples: {
        title: 'Examples',
        description: 'A cookbook of realistic agent prompts and the tool calls they produce.',
      },
      troubleshooting: {
        title: 'Troubleshooting',
        description: 'Common issues and the fixes that actually work.',
      },
      claudeCode: {
        title: 'Claude Code integration',
        description: 'Register MultiSQL Pro in Claude Code via CLI or manual configuration.',
      },
      claudeDesktop: {
        title: 'Claude Desktop integration',
        description: 'Register MultiSQL Pro in Claude Desktop on Windows or macOS.',
      },
      cursor: {
        title: 'Cursor integration',
        description: 'Register MultiSQL Pro as an MCP server inside the Cursor editor.',
      },
      windsurf: {
        title: 'Windsurf integration',
        description: 'Register MultiSQL Pro as an MCP server inside Windsurf (Codeium).',
      },
      opencode: {
        title: 'OpenCode integration',
        description: 'Register MultiSQL Pro in OpenCode to connect your SQL Server databases.',
      },
      codex: {
        title: 'Codex integration',
        description: "Register MultiSQL Pro in Codex, OpenAI's CLI agent.",
      },
      vscode: {
        title: 'VS Code MCP integration',
        description: 'Register MultiSQL Pro as an MCP server inside Visual Studio Code.',
      },
    },
    translationPending: {
      title: 'Translation pending',
      message: 'This page has not been translated to English yet. Showing Spanish content.',
    },
  },
} as const;
