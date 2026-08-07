// Interatividade do portfólio (substitui a DCLogic do design DC):
// tema claro/escuro, idioma PT/EN, menu mobile, ícones dinâmicos e ano/data.

type Lang = 'pt' | 'en';

interface Dict {
  brand: string;
  nav: [string, string, string, string, string];
  location: string;
  heroTagline: string;
  cv: string;
  getInTouch: string;
  latest: string;
  learnMore: string;
  learnMorePlain: string;
  repoBtn: string;
  deployBtn: string;
  closeModal: string;
  heroShot: string;
  projShot: string;
  aboutTitle: string;
  aboutLead: string;
  aboutBody: string;
  projectsTitle: string;
  projectsSub: string;
  stackSub: string;
  eduTitle: string;
  eduSub: string;
  eduSoon: string;
  eduSoonBody: string;
  eduFooter: string;
  contactTitle: string;
  contactLead: string;
  menuAria: string;
  themeAria: string;
  langAria: string;
}

const DICT: Record<Lang, Dict> = {
  pt: {
    brand: '/* Desenvolvedor\nFull-Stack */',
    nav: ['PROJETOS', 'SOBRE MIM', 'TECNOLOGIAS', 'EDUCAÇÃO', 'CONTATO'],
    location: 'Rio de Janeiro, Brasil',
    heroTagline: 'Desenvolvedor full-stack focado em criar interfaces modernas e funcionais.',
    cv: 'Vizualizar CV',
    getInTouch: 'Entrar em contato',
    latest: 'Últimos projetos',
    learnMore: 'Saiba mais →',
    learnMorePlain: 'Saiba mais',
    repoBtn: 'Repositório',
    deployBtn: 'Ver deploy',
    closeModal: 'Fechar',
    heroShot: 'prévia do projeto em destaque',
    projShot: 'captura do projeto',
    aboutTitle: '/* SOBRE MIM */',
    aboutLead:
      'Sou desenvolvedor full-stack focado em criar interfaces modernas e funcionais. Trabalho com atenção em detalhes de UI/UX, usabilidade e performance, entregando experiências digitais consistentes.',
    aboutBody:
      'Minha jornada na tecnologia começou em 2025, movida pela curiosidade de entender como a internet funciona. Desde então, venho mergulhando no ecossistema do desenvolvimento web, partindo da base de HTML, CSS e JavaScript para a criação de experiências altamente interativas utilizando GSAP e Three.js.',
    projectsTitle: '/* PROJETOS */',
    projectsSub: '// aplicações full-stack, landing pages e experiências interativas',
    stackSub: '// ecossistema de tecnologias que uso no dia a dia',
    eduTitle: '/* EDUCAÇÃO */',
    eduSub: '// formação acadêmica e cursos',
    eduSoon: 'Em construção',
    eduSoonBody:
      'Esta seção está sendo preparada e em breve trará minha formação acadêmica e certificações.',
    eduFooter: '// Em constante evolução',
    contactTitle: '/* CONTATO */',
    contactLead: 'Vamos iniciar algo incrível!',
    menuAria: 'Abrir menu',
    themeAria: 'Alternar tema',
    langAria: 'Mudar idioma para inglês',
  },
  en: {
    brand: '/* Full-Stack\nDeveloper */',
    nav: ['PROJECTS', 'ABOUT ME', 'TECH STACK', 'EDUCATION', 'CONTACT'],
    location: 'Rio de Janeiro, Brazil',
    heroTagline: 'Full-stack developer focused on building modern, functional interfaces.',
    cv: 'View CV',
    getInTouch: 'Get in touch',
    latest: 'Latest projects',
    learnMore: 'Learn more →',
    learnMorePlain: 'Learn more',
    repoBtn: 'Repository',
    deployBtn: 'View deploy',
    closeModal: 'Close',
    heroShot: 'featured project preview',
    projShot: 'project screenshot',
    aboutTitle: '/* ABOUT ME */',
    aboutLead:
      'I am a full-stack developer focused on building modern, functional interfaces. I work with close attention to UI/UX detail, usability and performance, delivering consistent digital experiences.',
    aboutBody:
      'My journey in tech started in 2025, driven by the curiosity to understand how the internet works. Since then I have been diving into the web development ecosystem, going from the fundamentals of HTML, CSS and JavaScript to building highly interactive experiences with GSAP and Three.js.',
    projectsTitle: '/* PROJECTS */',
    projectsSub: '// full-stack applications, landing pages and interactive experiences',
    stackSub: '// the technology ecosystem I work with every day',
    eduTitle: '/* EDUCATION */',
    eduSub: '// academic background and courses',
    eduSoon: 'Under construction',
    eduSoonBody:
      'This section is being prepared and will soon feature my academic background and certifications.',
    eduFooter: '// Always evolving',
    contactTitle: '/* CONTACT */',
    contactLead: "Let's start something incredible!",
    menuAria: 'Open menu',
    themeAria: 'Toggle theme',
    langAria: 'Switch language to Portuguese',
  },
};

const ICONS = {
  moon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sun: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  burger: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  x: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
};

const root = document.documentElement;
const store = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
};

// ---------- Idioma ----------
function currentLang(): Lang {
  return (root.getAttribute('lang') || 'pt').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en';
}

function applyLang(lang: Lang) {
  const t = DICT[lang];

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n') || '';
    const navMatch = /^nav([0-4])$/.exec(key);
    if (navMatch) {
      el.textContent = t.nav[Number(navMatch[1])];
    } else if (key in t) {
      el.textContent = (t as unknown as Record<string, string>)[key];
    }
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria') || '';
    if (key in t) {
      const val = (t as unknown as Record<string, string>)[key];
      el.setAttribute('aria-label', val);
      el.setAttribute('title', val);
    }
  });

  const langLabel = document.getElementById('lang-label');
  if (langLabel) langLabel.textContent = lang === 'pt' ? 'EN' : 'PT';

  root.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
}

// ---------- Tema ----------
function applyTheme(theme: 'light' | 'dark') {
  root.setAttribute('data-theme', theme);
  store('jv-portfolio-theme', theme);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
  // Favicon acompanha o tema do site (fundo preto no dark, branco no claro).
  const favicon = document.getElementById('favicon');
  if (favicon) favicon.setAttribute('href', `/favicon/myfavicon-${theme}.svg`);
}

// ---------- Menu ----------
function setMenu(open: boolean) {
  const panel = document.getElementById('menu-panel');
  if (panel) panel.hidden = !open;
  const icon = document.getElementById('menu-icon');
  if (icon) icon.innerHTML = open ? ICONS.x : ICONS.burger;
}

// ---------- Init ----------
applyLang(currentLang());
applyTheme((root.getAttribute('data-theme') as 'light' | 'dark') || 'light');
setMenu(false);

document.getElementById('theme-btn')?.addEventListener('click', () => {
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

document.getElementById('lang-btn')?.addEventListener('click', () => {
  const next: Lang = currentLang() === 'pt' ? 'en' : 'pt';
  applyLang(next);
  store('jv-portfolio-lang', next);
  setMenu(false);
});

document.getElementById('menu-btn')?.addEventListener('click', () => {
  const panel = document.getElementById('menu-panel');
  setMenu(!!panel?.hidden);
});

document.querySelectorAll('.menu-close').forEach((el) =>
  el.addEventListener('click', () => setMenu(false))
);

// ---------- Barra de progresso da rolagem (borda inferior do header) ----------
const progressBar = document.getElementById('scroll-progress');
if (progressBar) {
  let queued = false;

  const drawProgress = () => {
    queued = false;
    const max = root.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    progressBar.style.transform = `scaleX(${ratio})`;
  };

  // rAF evita recalcular a cada evento de scroll (que dispara muitas vezes por frame)
  const queueProgress = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(drawProgress);
  };

  window.addEventListener('scroll', queueProgress, { passive: true });
  window.addEventListener('resize', queueProgress);
  // A altura da página muda com imagens carregando e com o menu mobile abrindo
  new ResizeObserver(queueProgress).observe(document.body);
  drawProgress();
}

// ---------- Ano / data ----------
const now = new Date();
const pad = (n: number) => String(n).padStart(2, '0');
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(now.getFullYear());
const dateEl = document.getElementById('date-str');
if (dateEl) dateEl.textContent = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
