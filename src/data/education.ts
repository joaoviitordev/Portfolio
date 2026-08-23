// Formação — conteúdo vindo de public/doc/joaovitor_curriculo_BR.pdf.
// Instituição e ano ficam aqui (nomes próprios e números não mudam de idioma);
// curso e descrição têm par pt/en em src/scripts/ui.ts sob as chaves `${key}Title`
// e `${key}Body` — o texto abaixo é só o fallback renderizado no servidor.

export interface EduItem {
  /** Prefixo das chaves no dicionário de ui.ts. */
  key: string;
  /** Nome do curso (PT). */
  course: string;
  institution: string;
  /** Ano ou intervalo de anos. */
  year: string;
  /** Ementa resumida (PT). Ausente quando o currículo não detalha. */
  detail?: string;
  /** Nome do ícone em ICONS (Education.astro). */
  icon: 'cap' | 'terminal' | 'rocket' | 'spark' | 'code';
  /** Curso ainda em andamento: ganha o selo "Cursando". */
  current?: boolean;
}

export const academic: EduItem[] = [
  {
    key: 'eduAds',
    course: 'Análise e Desenvolvimento de Sistemas — Tecnólogo',
    institution: 'Universidade Estácio de Sá',
    year: '2025 — 2028',
    icon: 'cap',
    current: true,
  },
  {
    key: 'eduNext',
    course: 'Formação Next.js',
    institution: 'Full Stack Club',
    year: '2026',
    detail:
      'CSR, SSR, SSG & ISR · Client e Server Components · Composition Pattern · App Router e rotas · Streaming & Suspense · Data Fetching · Caching & Revalidations · Server Actions · build e deploy na Vercel.',
    icon: 'terminal',
  },
];

export const courses: EduItem[] = [
  {
    key: 'eduSantander',
    course: 'Santander Bootcamp 2026 — AI React Front-end',
    institution: 'DIO',
    year: '2026',
    detail:
      'Trilha de 42 horas em React 19, Vite, JavaScript ES6 e UI/UX Design. Projeto final: um educador financeiro inteligente, com diagnóstico gerado pela API do Gemini.',
    icon: 'spark',
  },
  {
    key: 'eduBootcamp',
    course: 'Bootcamp Full-Stack',
    institution: 'Full Stack Club',
    year: '2026',
    detail: 'Construção de um SaaS completo com Next.js, React e Node.js.',
    icon: 'rocket',
  },
  {
    key: 'eduWeb',
    course: 'Desenvolvimento Web',
    institution: 'DevArt: Projetos de Valor',
    year: '2026',
    detail: 'HTML5, CSS3, JavaScript, GSAP e animações avançadas.',
    icon: 'spark',
  },
  {
    key: 'eduFund',
    course: 'HTML5, CSS3 e JavaScript',
    institution: 'Curso em Vídeo',
    year: '2025',
    detail: 'Fundamentos da web, semântica e boas práticas de código.',
    icon: 'code',
  },
];
