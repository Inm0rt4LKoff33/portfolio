// Todo el texto del sitio, en inglés y en español.
// Para cambiar o agregar contenido, edita las dos versiones aquí: las secciones solo lo leen.

export type Lang = "en" | "es";
export type Level = "applied" | "learning" | "coursework";
export type CertStatus = "completed" | "in-progress" | "target";

const en = {
  meta: {
    title: "Fabian Madriz — Data Engineering & Analytics",
  },
  toggle: { label: "ES", aria: "Ver en español" },
  nav: {
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    certs: "Certifications",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    theme: "Toggle theme",
  },
  hero: {
    badge: "Open to data internships & junior roles",
    firstName: "Fabian",
    lastName: "Madriz",
    current: "Currently →",
    roles: [
      "Data Intern at ISTS",
      "M.Sc. Student, Visual Analytics & Big Data",
      "Building ETL pipelines in Python",
      "SQL & cloud foundations",
    ],
    description:
      "Computer Systems Engineer (Universidad Fidélitas, 2025) and M.Sc. student in Visual Analytics and Big Data at UNIR. I build pipelines that turn messy spreadsheets into clean, documented, analysis-ready data — currently an academic data observatory for ISTS with Python, data-quality rules and a star-schema model for Power BI. Background in SQL Server database design, backend development and AWS fundamentals.",
    ctaContact: "Get in touch ↗",
    ctaProjects: "View projects →",
    coreStack: "CORE STACK",
    scroll: "scroll",
  },
  stats: [
    { value: "B.Sc.", label: "Systems Eng. · 2025" },
    { value: "M.Sc.", label: "Big Data · In progress" },
    { value: "ETL", label: "Python pipelines" },
    { value: "SQL", label: "Database design" },
    { value: "AWS", label: "Cloud foundations" },
  ],
  skills: {
    label: "What I bring",
    heading: "Skills & Technologies",
    levels: { applied: "Applied", learning: "Learning", coursework: "Coursework" } as Record<Level, string>,
    items: [
      {
        title: "Data Engineering & ETL",
        description:
          "Pipelines that extract institutional Excel reports, validate them against a data contract, clean and pseudonymize them, and rebuild an analysis-ready layer on every run.",
        tags: ["Python", "Pandas", "ETL", "Parquet", "Data contracts", "Data quality", "pytest"],
        level: "applied" as Level,
      },
      {
        title: "Databases & Modeling",
        description:
          "Relational design and normalization in SQL Server, record migration into a new database, and star-schema models (facts and dimensions) for reporting.",
        tags: ["SQL Server", "SQLite", "Star schema", "Normalization", "Data migration"],
        level: "applied" as Level,
      },
      {
        title: "Analysis & Visualization",
        description: "Exploratory data analysis in notebooks and reports that explain each chart and its conclusions.",
        tags: ["Jupyter", "EDA", "Matplotlib", "Seaborn"],
        level: "applied" as Level,
      },
      {
        title: "Cloud & DevOps",
        description:
          "AWS networking and access configured for a client, a demo deployed on Azure, and containers with CI/CD in a personal project. Linux is my daily operating system.",
        tags: ["AWS (EC2, IAM, VPC, S3)", "Azure", "Docker", "GitHub Actions", "Git", "Linux"],
        level: "applied" as Level,
      },
      {
        title: "Backend & APIs",
        description: "Web backends and API integrations built in university, community and freelance projects.",
        tags: ["C# / ASP.NET Core / .NET 8", "Node.js / Express", "PHP / Laravel", "REST APIs", "Claude API"],
        level: "applied" as Level,
      },
      {
        title: "Big Data",
        description: "Distributed processing studied in my master's, with Spark assignments run on Google Cloud.",
        tags: ["Apache Spark", "PySpark", "HDFS", "Google Cloud"],
        level: "learning" as Level,
      },
      {
        title: "AI & Platforms",
        description: "Model Context Protocol servers in Python and a local Kubernetes lab for my master's thesis.",
        tags: ["MCP", "Kubernetes (kind)", "Neo4j", "Machine learning fundamentals"],
        level: "learning" as Level,
      },
      {
        title: "Coursework",
        description: "Tools I studied at university or in my master's but have not yet used in a project of my own.",
        tags: ["Power BI", "MySQL", "MongoDB", "Terraform", "Java", "Vue.js", "GitLab CI/CD", "Selenium"],
        level: "coursework" as Level,
      },
    ],
  },
  experience: {
    label: "Where I've been",
    heading: "Experience",
    items: [
      {
        date: "2026 — Present",
        role: "Data Intern — Academic Data Observatory",
        company: "ISTS · Ecuador",
        description:
          "Building the data pipeline behind the institute's academic dashboard. It takes the enrollment, withdrawal and graduation reports in Excel, validates each file against a data contract, normalizes text, dates and periods, pseudonymizes national IDs with a salted SHA-256 hash and drops personal data. Doubtful values are logged in a data-quality report instead of being fixed silently, and the curated layer is rebuilt as a star schema for Power BI on every run. Covered by 17 automated tests and documented for handover.",
        tags: ["Python", "Pandas", "ETL", "Data quality", "Star schema", "pytest"],
      },
      {
        date: "2025 · 2 months",
        role: "Cloud Support (Freelance)",
        company: "Client project · Costa Rica",
        description: "Configured EC2 instances, IAM access and the VPC network of a client's AWS environment.",
        tags: ["AWS", "EC2", "IAM", "VPC"],
      },
      {
        date: "Jan 2024 — Apr 2024",
        role: "Freelance Developer — E-Invoicing Integration",
        company: "Online store · San José, Costa Rica",
        description:
          "Integrated an online store's checkout with the Costa Rica Ministry of Finance electronic-invoicing API. Built the module that authenticates with the ministry, captures each transaction's data after purchase and emails the electronic receipt to the customer.",
        tags: ["Node.js", "Express", "REST APIs"],
      },
    ],
  },
  projects: {
    label: "What I've built",
    heading: "Featured Projects",
    project: "PROJECT",
    noRepo: "No public repo",
    items: [
      {
        name: "Academic Data Observatory",
        kind: "Internship · ISTS · In progress",
        description:
          "ETL pipeline that turns an institute's Excel reports into a clean, anonymized star-schema dataset for Power BI. Raw files stay untouched, each file is checked against a data contract, quality issues go to a report, and reruns never duplicate data.",
        tags: ["Python", "Pandas", "ETL", "Data quality", "Star schema", "pytest"],
        link: "https://github.com/Inm0rt4LKoff33/ists-dashboard",
      },
      {
        name: "Job Search Automation Agent",
        kind: "Personal project · AI-assisted",
        description:
          "Python program that collects job postings daily from several APIs, unifies them into one schema, keeps the history in SQLite to skip duplicates, and uses the Claude API to score each posting against my profile. Built with Claude as an AI coding assistant.",
        tags: ["Python", "REST APIs", "SQLite", "Claude API", "Automation"],
        link: "#",
      },
      {
        name: "AIOps Kubernetes Platform",
        kind: "M.Sc. thesis · Early stage",
        description:
          "Thesis project to detect and explain incidents in Kubernetes with a knowledge graph. So far: a local kind cluster running Google's Online Boutique demo with generated traffic. Next: chaos-engineering faults, a PySpark pipeline, a Neo4j graph and an MCP server.",
        tags: ["Kubernetes", "Neo4j", "PySpark", "MCP", "Observability"],
        link: "https://github.com/Inm0rt4LKoff33/aiops-k8s-platform",
      },
      {
        name: "Madrid Lodging EDA",
        kind: "Data analysis project",
        description:
          "Exploratory analysis of a Madrid lodging dataset: data cleaning and a heatmap to study how comfort and location ratings relate to each other.",
        tags: ["Python", "EDA", "Data cleaning", "Visualization"],
        link: "#",
      },
      {
        name: "IT Infrastructure Management Platform",
        kind: "Graduation project · Team of 3",
        description:
          "Web platform to replace the Excel sheets a company used to track its IT infrastructure (IPs, networks, credentials, users and devices). I designed the relational database and built backend modules, unit tests and email notifications, and deployed the demo on Azure.",
        tags: ["Laravel", "SQL Server", "Database design", "Azure"],
        link: "#",
      },
      {
        name: "Guest Portal for a Non-Profit",
        kind: "Community project · Ronald McDonald House Charities CR",
        description:
          "Web portal to capture guest information that the organization kept on paper. I gathered requirements directly with the client and migrated the existing records into SQL Server.",
        tags: [".NET 8", "SQL Server", "Data migration", "Requirements"],
        link: "#",
      },
    ],
  },
  certs: {
    label: "Credentials",
    heading: "Education & Certifications",
    items: [
      {
        name: "M.Sc. Visual Analytics & Big Data",
        issuer: "UNIR — Universidad Internacional de La Rioja · 2026–Present",
        status: "in-progress" as CertStatus,
        label: "In Progress",
      },
      {
        name: "B.Sc. Computer Systems Engineering",
        issuer: "Universidad Fidélitas · 2020–2025",
        status: "completed" as CertStatus,
        label: "Graduated",
      },
      {
        name: "Data Science Certificate",
        issuer: "Smart Data · Oct 2024–Jan 2025",
        status: "completed" as CertStatus,
        label: "Completed",
      },
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        status: "target" as CertStatus,
        label: "Target",
      },
    ],
  },
  contact: {
    label: "Let's connect",
    line1: "Let's turn data",
    line2: "into decisions.",
    tagline: "Open to data analyst & data engineering internships and junior roles — hybrid or remote · Heredia, Costa Rica",
    email: "Email Me",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    role: "Computer Systems Engineer",
    built: "Built with Next.js · Tailwind CSS",
  },
};

export type Site = typeof en;

const es: Site = {
  meta: {
    title: "Fabián Madriz — Ingeniería y análisis de datos",
  },
  toggle: { label: "EN", aria: "View in English" },
  nav: {
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    certs: "Formación",
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    theme: "Cambiar tema",
  },
  hero: {
    badge: "Disponible para pasantías y puestos junior en datos",
    firstName: "Fabián",
    lastName: "Madriz",
    current: "Actualmente →",
    roles: [
      "Pasante de datos en el ISTS",
      "Estudiante de Máster en Visual Analytics y Big Data",
      "Construyendo pipelines ETL en Python",
      "Bases en SQL y en la nube",
    ],
    description:
      "Ingeniero en Sistemas de Computación (Universidad Fidélitas, 2025) y estudiante del Máster en Visual Analytics and Big Data en UNIR. Construyo pipelines que convierten hojas de cálculo desordenadas en datos limpios, documentados y listos para analizar; hoy, un observatorio de datos académicos para el ISTS con Python, reglas de calidad de datos y un modelo estrella para Power BI. Tengo bases en diseño de bases de datos en SQL Server, desarrollo backend y AWS.",
    ctaContact: "Contáctame ↗",
    ctaProjects: "Ver proyectos →",
    coreStack: "STACK PRINCIPAL",
    scroll: "bajar",
  },
  stats: [
    { value: "Ing.", label: "Sistemas · 2025" },
    { value: "Máster", label: "Big Data · En curso" },
    { value: "ETL", label: "Pipelines en Python" },
    { value: "SQL", label: "Diseño de bases de datos" },
    { value: "AWS", label: "Bases en la nube" },
  ],
  skills: {
    label: "Lo que aporto",
    heading: "Habilidades y tecnologías",
    levels: { applied: "Aplicado", learning: "Aprendiendo", coursework: "Formación" },
    items: [
      {
        title: "Ingeniería de datos y ETL",
        description:
          "Pipelines que extraen los reportes en Excel de una institución, los validan contra un contrato de datos, los limpian y seudonimizan, y reconstruyen una capa lista para el análisis en cada ejecución.",
        tags: ["Python", "Pandas", "ETL", "Parquet", "Contratos de datos", "Calidad de datos", "pytest"],
        level: "applied",
      },
      {
        title: "Bases de datos y modelado",
        description:
          "Diseño relacional y normalización en SQL Server, migración de registros a una base de datos nueva y modelos estrella (hechos y dimensiones) para reportes.",
        tags: ["SQL Server", "SQLite", "Modelo estrella", "Normalización", "Migración de datos"],
        level: "applied",
      },
      {
        title: "Análisis y visualización",
        description: "Análisis exploratorio de datos en notebooks y reportes que explican cada gráfico y sus conclusiones.",
        tags: ["Jupyter", "EDA", "Matplotlib", "Seaborn"],
        level: "applied",
      },
      {
        title: "Cloud y DevOps",
        description:
          "Configuré la red y los accesos de AWS para un cliente, desplegué una demo en Azure y uso contenedores con CI/CD en un proyecto personal. Linux es mi sistema operativo diario.",
        tags: ["AWS (EC2, IAM, VPC, S3)", "Azure", "Docker", "GitHub Actions", "Git", "Linux"],
        level: "applied",
      },
      {
        title: "Backend y APIs",
        description: "Backends web e integraciones con APIs en proyectos universitarios, comunitarios y freelance.",
        tags: ["C# / ASP.NET Core / .NET 8", "Node.js / Express", "PHP / Laravel", "APIs REST", "API de Claude"],
        level: "applied",
      },
      {
        title: "Big Data",
        description: "Procesamiento distribuido que estudio en la maestría, con trabajos de Spark ejecutados en Google Cloud.",
        tags: ["Apache Spark", "PySpark", "HDFS", "Google Cloud"],
        level: "learning",
      },
      {
        title: "IA y plataformas",
        description: "Servidores de Model Context Protocol en Python y un laboratorio local de Kubernetes para mi trabajo final de máster.",
        tags: ["MCP", "Kubernetes (kind)", "Neo4j", "Fundamentos de machine learning"],
        level: "learning",
      },
      {
        title: "Formación académica",
        description: "Herramientas que estudié en la universidad o en la maestría, pero que todavía no he usado en un proyecto propio.",
        tags: ["Power BI", "MySQL", "MongoDB", "Terraform", "Java", "Vue.js", "GitLab CI/CD", "Selenium"],
        level: "coursework",
      },
    ],
  },
  experience: {
    label: "Dónde he trabajado",
    heading: "Experiencia",
    items: [
      {
        date: "2026 — Actualidad",
        role: "Pasante de datos — Observatorio de Datos Académicos",
        company: "ISTS · Ecuador",
        description:
          "Construyo el pipeline de datos detrás del dashboard académico del instituto. Toma los reportes de matrículas, retiros y titulación en Excel, valida cada archivo contra un contrato de datos, normaliza textos, fechas y periodos, seudonimiza las cédulas con un hash SHA-256 con sal y descarta los datos personales. Los valores dudosos quedan en un reporte de calidad en lugar de corregirse en silencio, y la capa final se reconstruye como modelo estrella para Power BI en cada ejecución. Tiene 17 pruebas automáticas y documentación para la entrega.",
        tags: ["Python", "Pandas", "ETL", "Calidad de datos", "Modelo estrella", "pytest"],
      },
      {
        date: "2025 · 2 meses",
        role: "Soporte Cloud (Freelance)",
        company: "Proyecto para cliente · Costa Rica",
        description: "Configuré instancias EC2, accesos IAM y la red VPC del entorno AWS de un cliente.",
        tags: ["AWS", "EC2", "IAM", "VPC"],
      },
      {
        date: "Ene 2024 — Abr 2024",
        role: "Desarrollador Freelance — Integración de facturación electrónica",
        company: "Tienda en línea · San José, Costa Rica",
        description:
          "Integré el proceso de compra de una tienda en línea con la API de facturación electrónica del Ministerio de Hacienda. Desarrollé el módulo que se autentica ante Hacienda, captura los datos de cada transacción después de la compra y envía el comprobante electrónico al cliente por correo.",
        tags: ["Node.js", "Express", "APIs REST"],
      },
    ],
  },
  projects: {
    label: "Lo que he construido",
    heading: "Proyectos destacados",
    project: "PROYECTO",
    noRepo: "Sin repo público",
    items: [
      {
        name: "Observatorio de Datos Académicos",
        kind: "Pasantía · ISTS · En curso",
        description:
          "Pipeline ETL que convierte los reportes en Excel de un instituto en un dataset limpio, anonimizado y con modelo estrella para Power BI. Los archivos originales no se tocan, cada archivo se valida contra un contrato de datos, los problemas de calidad van a un reporte y volver a ejecutarlo nunca duplica datos.",
        tags: ["Python", "Pandas", "ETL", "Calidad de datos", "Modelo estrella", "pytest"],
        link: "https://github.com/Inm0rt4LKoff33/ists-dashboard",
      },
      {
        name: "Agente de búsqueda de empleo",
        kind: "Proyecto personal · Con asistencia de IA",
        description:
          "Programa en Python que recoge ofertas de empleo de varias APIs cada día, las unifica en un mismo esquema, guarda el historial en SQLite para no repetirlas y usa la API de Claude para evaluar cada oferta contra mi perfil. Lo desarrollé con Claude como asistente de programación.",
        tags: ["Python", "APIs REST", "SQLite", "API de Claude", "Automatización"],
        link: "#",
      },
      {
        name: "Plataforma AIOps para Kubernetes",
        kind: "Trabajo final de máster · Etapa inicial",
        description:
          "Proyecto de tesis para detectar y explicar incidentes en Kubernetes con un grafo de conocimiento. Hasta ahora: un clúster local con kind que ejecuta la demo Online Boutique de Google con tráfico generado. Siguiente: fallos con chaos engineering, un pipeline en PySpark, un grafo en Neo4j y un servidor MCP.",
        tags: ["Kubernetes", "Neo4j", "PySpark", "MCP", "Observabilidad"],
        link: "https://github.com/Inm0rt4LKoff33/aiops-k8s-platform",
      },
      {
        name: "Análisis exploratorio de alojamientos en Madrid",
        kind: "Proyecto de análisis de datos",
        description:
          "Análisis exploratorio de un conjunto de datos de alojamientos en Madrid: limpieza de datos y un mapa de calor para estudiar cómo se relacionan las calificaciones de comodidad y de ubicación.",
        tags: ["Python", "EDA", "Limpieza de datos", "Visualización"],
        link: "#",
      },
      {
        name: "Plataforma de gestión de infraestructura TI",
        kind: "Proyecto de graduación · Equipo de 3",
        description:
          "Plataforma web para reemplazar las hojas de Excel con que una empresa controlaba su infraestructura TI (IPs, redes, credenciales, usuarios y dispositivos). Diseñé la base de datos relacional, desarrollé módulos backend, pruebas unitarias y notificaciones por correo, y desplegué la demo en Azure.",
        tags: ["Laravel", "SQL Server", "Diseño de bases de datos", "Azure"],
        link: "#",
      },
      {
        name: "Portal de huéspedes para una ONG",
        kind: "Proyecto comunitario · Ronald McDonald House Charities CR",
        description:
          "Portal web para registrar la información de huéspedes que la organización llevaba en papel. Levanté requerimientos directamente con el cliente y migré los registros existentes a SQL Server.",
        tags: [".NET 8", "SQL Server", "Migración de datos", "Requerimientos"],
        link: "#",
      },
    ],
  },
  certs: {
    label: "Credenciales",
    heading: "Formación y certificaciones",
    items: [
      {
        name: "Máster en Visual Analytics and Big Data",
        issuer: "UNIR — Universidad Internacional de La Rioja · 2026–Actualidad",
        status: "in-progress",
        label: "En curso",
      },
      {
        name: "Bachillerato en Ingeniería en Sistemas de Computación",
        issuer: "Universidad Fidélitas · 2020–2025",
        status: "completed",
        label: "Graduado",
      },
      {
        name: "Data Science Certificate",
        issuer: "Smart Data · Oct 2024–Ene 2025",
        status: "completed",
        label: "Completado",
      },
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        status: "target",
        label: "Meta",
      },
    ],
  },
  contact: {
    label: "Conversemos",
    line1: "Convirtamos datos",
    line2: "en decisiones.",
    tagline: "Disponible para pasantías y puestos junior de análisis e ingeniería de datos — híbrido o remoto · Heredia, Costa Rica",
    email: "Escríbeme",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    role: "Ingeniero en Sistemas de Computación",
    built: "Hecho con Next.js · Tailwind CSS",
  },
};

export const site: Record<Lang, Site> = { en, es };
