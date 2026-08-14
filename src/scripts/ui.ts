// Interatividade do portfólio (substitui a DCLogic do design DC):
// tema claro/escuro, idioma PT/EN, menu mobile, ícones dinâmicos e ano do copyright.

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
  repoBtn: string;
  deployBtn: string;
  closeModal: string;
  aboutTitle: string;
  aboutLead: string;
  aboutBody: string;
  projectsTitle: string;
  projectsSub: string;
  stackSub: string;
  eduTitle: string;
  eduSub: string;
  eduGroupAcademic: string;
  eduGroupCourses: string;
  eduCurrent: string;
  // Um par Title/Body por item de src/data/education.ts (a chave lá é o prefixo)
  eduAdsTitle: string;
  eduNextTitle: string;
  eduNextBody: string;
  eduBootcampTitle: string;
  eduBootcampBody: string;
  eduWebTitle: string;
  eduWebBody: string;
  eduFundTitle: string;
  eduFundBody: string;
  eduFooter: string;
  contactTitle: string;
  contactSub: string;
  contactAvail: string;
  contactLead: string;
  contactBody: string;
  contactCta: string;
  contactReply: string;
  jobsLabel: string;
  jobsTitle: string;
  jobsBody: string;
  jobsChips: [string, string, string];
  jobsCta: string;
  lastUpdate: string;
  // Repetido 3x na faixa curva (data-i18n-repeat), por isso termina com separador
  marqueeText: string;
  skipLink: string;
  menuAria: string;
  themeAria: string;
  langAria: string;
  topAria: string;
}

const DICT: Record<Lang, Dict> = {
  pt: {
    brand: '/* Desenvolvedor\nFull-Stack */',
    nav: ['SOBRE MIM', 'PROJETOS', 'TECNOLOGIAS', 'EDUCAÇÃO', 'CONTATO'],
    location: 'Rio de Janeiro, Brasil',
    heroTagline: 'Desenvolvedor full-stack focado em criar interfaces modernas e funcionais.',
    cv: 'Visualizar CV',
    getInTouch: 'Entrar em contato',
    latest: 'Últimos projetos',
    learnMore: 'Saiba mais →',
    repoBtn: 'Repositório',
    deployBtn: 'Ver deploy',
    closeModal: 'Fechar',
    aboutTitle: '/* SOBRE MIM */',
    aboutLead:
      'Sou desenvolvedor full-stack focado em construir aplicações web completas — do front-end em React e Next.js ao back-end em Node.js, com deploy em produção. Trabalho com atenção em detalhes de UI/UX, usabilidade e performance, entregando experiências digitais consistentes.',
    aboutBody:
      'Minha jornada na tecnologia começou em 2025, movida pela curiosidade de entender como a internet funciona. Desde então, venho mergulhando no ecossistema do desenvolvimento web, partindo da base de HTML, CSS e JavaScript para a criação de experiências altamente interativas utilizando GSAP e Three.js.',
    projectsTitle: '/* PROJETOS */',
    projectsSub: '// aplicações full-stack, landing pages e experiências interativas',
    stackSub: '// ecossistema de tecnologias que uso no dia a dia',
    eduTitle: '/* EDUCAÇÃO */',
    eduSub: '// formação acadêmica e cursos',
    eduGroupAcademic: '// formação acadêmica',
    eduGroupCourses: '// cursos complementares',
    eduCurrent: 'Cursando',
    eduAdsTitle: 'Análise e Desenvolvimento de Sistemas — Tecnólogo',
    eduNextTitle: 'Formação Next.js',
    eduNextBody:
      'CSR, SSR, SSG & ISR · Client e Server Components · Composition Pattern · App Router e rotas · Streaming & Suspense · Data Fetching · Caching & Revalidations · Server Actions · build e deploy na Vercel.',
    eduBootcampTitle: 'Bootcamp Full-Stack',
    eduBootcampBody: 'Construção de um SaaS completo com Next.js, React e Node.js.',
    eduWebTitle: 'Desenvolvimento Web',
    eduWebBody: 'HTML5, CSS3, JavaScript, GSAP e animações avançadas.',
    eduFundTitle: 'HTML5, CSS3 e JavaScript',
    eduFundBody: 'Fundamentos da web, semântica e boas práticas de código.',
    eduFooter: '// Em constante evolução',
    contactTitle: '/* CONTATO */',
    contactSub: '// aberto a freelas, vagas full-stack e projetos colaborativos',
    contactAvail: 'Disponível para novos projetos',
    contactLead: 'Do protótipo ao deploy em produção.',
    contactBody:
      'Conte sobre a ideia, o prazo e o que já existe. Respondo com um plano inicial e os próximos passos.',
    contactCta: 'Enviar email',
    contactReply: '// costumo responder em até 24h',
    jobsLabel: '// vagas e oportunidades',
    jobsTitle: 'Aberto a oportunidades full-stack',
    jobsBody:
      'Procuro posições júnior ou de estágio em desenvolvimento web e full-stack, no Rio de Janeiro ou remoto. Se o perfil fizer sentido para o time, meu currículo está a um clique.',
    jobsChips: ['Júnior / Estágio', 'Remoto, híbrido ou presencial', 'CLT ou PJ'],
    jobsCta: 'Ver LinkedIn',
    lastUpdate: 'Última atualização:',
    marqueeText: 'João Vitor · Desenvolvedor Full-Stack · ',
    skipLink: 'Pular para o conteúdo',
    menuAria: 'Abrir menu',
    themeAria: 'Alternar tema',
    langAria: 'Mudar idioma para inglês',
    topAria: 'Voltar ao topo',
  },
  en: {
    brand: '/* Full-Stack\nDeveloper */',
    nav: ['ABOUT ME', 'PROJECTS', 'TECH STACK', 'EDUCATION', 'CONTACT'],
    location: 'Rio de Janeiro, Brazil',
    heroTagline: 'Full-stack developer focused on building modern, functional interfaces.',
    cv: 'View CV',
    getInTouch: 'Get in touch',
    latest: 'Latest projects',
    learnMore: 'Learn more →',
    repoBtn: 'Repository',
    deployBtn: 'View deploy',
    closeModal: 'Close',
    aboutTitle: '/* ABOUT ME */',
    aboutLead:
      'I am a full-stack developer focused on building complete web applications — from the front-end in React and Next.js to the back-end in Node.js, shipped to production. I work with close attention to UI/UX detail, usability and performance, delivering consistent digital experiences.',
    aboutBody:
      'My journey in tech started in 2025, driven by the curiosity to understand how the internet works. Since then I have been diving into the web development ecosystem, going from the fundamentals of HTML, CSS and JavaScript to building highly interactive experiences with GSAP and Three.js.',
    projectsTitle: '/* PROJECTS */',
    projectsSub: '// full-stack applications, landing pages and interactive experiences',
    stackSub: '// the technology ecosystem I work with every day',
    eduTitle: '/* EDUCATION */',
    eduSub: '// academic background and courses',
    eduGroupAcademic: '// academic background',
    eduGroupCourses: '// complementary courses',
    eduCurrent: 'In progress',
    eduAdsTitle: 'Systems Analysis and Development — Technologist',
    eduNextTitle: 'Next.js Track',
    eduNextBody:
      'CSR, SSR, SSG & ISR · Client and Server Components · Composition Pattern · App Router and routing · Streaming & Suspense · Data Fetching · Caching & Revalidations · Server Actions · build and deploy on Vercel.',
    eduBootcampTitle: 'Full-Stack Bootcamp',
    eduBootcampBody: 'Building a complete SaaS with Next.js, React and Node.js.',
    eduWebTitle: 'Web Development',
    eduWebBody: 'HTML5, CSS3, JavaScript, GSAP and advanced animations.',
    eduFundTitle: 'HTML5, CSS3 and JavaScript',
    eduFundBody: 'Web fundamentals, semantics and clean code practices.',
    eduFooter: '// Always evolving',
    contactTitle: '/* CONTACT */',
    contactSub: '// open to freelance work, full-stack roles and collaborative projects',
    contactAvail: 'Available for new projects',
    contactLead: 'From prototype to production deploy.',
    contactBody:
      'Tell me about the idea, the deadline and what already exists. I reply with an initial plan and the next steps.',
    contactCta: 'Send email',
    contactReply: '// I usually reply within 24h',
    jobsLabel: '// jobs and opportunities',
    jobsTitle: 'Open to full-stack opportunities',
    jobsBody:
      'I am looking for junior or internship roles in web and full-stack development, in Rio de Janeiro or remote. If the profile fits your team, my resume is one click away.',
    jobsChips: ['Junior / Internship', 'Remote, hybrid or on-site', 'Full-time or contract'],
    jobsCta: 'View LinkedIn',
    lastUpdate: 'Last updated:',
    marqueeText: 'João Vitor · Full-Stack Developer · ',
    skipLink: 'Skip to content',
    menuAria: 'Open menu',
    themeAria: 'Toggle theme',
    langAria: 'Switch language to Portuguese',
    topAria: 'Back to top',
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

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Entrada das seções ----------
// O CSS esconde [data-anim] enquanto html[data-js] existir; aqui devolvemos a
// visibilidade, animada ou não. Roda antes do resto para o conteúdo não ficar
// preso invisível caso algum bloco abaixo quebre.
function reveal(el: HTMLElement) {
  el.classList.add('is-in');
  // Sem o data-anim o :hover dos cards volta a mandar no transform
  el.addEventListener('animationend', () => el.removeAttribute('data-anim'), { once: true });
}

if (reduceMotion || !('IntersectionObserver' in window)) {
  document.querySelectorAll('[data-anim]').forEach((el) => el.removeAttribute('data-anim'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        obs.unobserve(el);
        // O grupo revela os filhos de uma vez: assim a cascata segue o --i de cada
        // um (a ordem do grid) e não a ordem em que entram na tela.
        if (el.hasAttribute('data-anim-group')) {
          el.querySelectorAll<HTMLElement>('[data-anim]').forEach(reveal);
        } else {
          reveal(el);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px' }
  );

  document.querySelectorAll<HTMLElement>('[data-anim-group], [data-anim]').forEach((el) => {
    // Filho de grupo é revelado pelo grupo, não sozinho
    if (el.hasAttribute('data-anim') && el.closest('[data-anim-group]')) return;
    revealObserver.observe(el);
  });
}

// ---------- Idioma ----------
function currentLang(): Lang {
  return (root.getAttribute('lang') || 'pt').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en';
}

function applyLang(lang: Lang) {
  const t = DICT[lang];

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n') || '';
    // Chaves de lista (nav0…nav4, jobsChips0…): sufixo numérico = índice no array
    const listMatch = /^(nav|jobsChips)(\d+)$/.exec(key);
    if (listMatch) {
      const item = (t as unknown as Record<string, string[]>)[listMatch[1]][Number(listMatch[2])];
      if (item !== undefined) el.textContent = item;
    } else if (key in t) {
      const value = (t as unknown as Record<string, string>)[key];
      // data-i18n-repeat: a faixa curva precisa da frase repetida para o ciclo
      // fechar; repetir aqui evita guardar a mesma string 3x no dicionário.
      const times = Number(el.getAttribute('data-i18n-repeat')) || 1;
      el.textContent = times > 1 ? value.repeat(times) : value;
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

// ---------- Menu mobile ----------
// Padrão "disclosure" da APG, não modal: o painel não bloqueia a página, então o
// foco NÃO fica preso nele. Prender daria ao usuário de teclado a sensação de um
// modal que não existe; em vez disso, sair com Tab fecha o painel (focusout
// abaixo), que é o que a especificação recomenda para este caso.
const menuBtn = document.getElementById('menu-btn');
const menuPanel = document.getElementById('menu-panel');
const header = document.querySelector('header');
let menuOpen = false;

// ---------- Altura do header ----------
// O scroll-margin das âncoras e a linha de corte do link ativo dependem dela, e
// ela muda com o clamp da marca em telas estreitas. Medir uma vez e publicar em
// --header-h evita repetir o número em três lugares e vê-los divergirem.
let headerH = 72;
function measureHeader() {
  headerH = (header as HTMLElement | null)?.offsetHeight || 72;
  root.style.setProperty('--header-h', `${headerH}px`);
}
measureHeader();
window.addEventListener('resize', measureHeader);

function setMenu(open: boolean) {
  menuOpen = open;
  // A classe é o estado; a altura é animada pelo CSS (grid-template-rows 0fr→1fr)
  menuPanel?.classList.toggle('is-open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
  const icon = document.getElementById('menu-icon');
  if (icon) icon.innerHTML = open ? ICONS.x : ICONS.burger;
}

// returnFocus só quando o usuário fechou de propósito pelo teclado: o foco volta
// para o botão de onde ele saiu, em vez de cair no começo da página.
function closeMenu(returnFocus = false) {
  if (!menuOpen) return;
  setMenu(false);
  if (returnFocus) menuBtn?.focus();
}

// ---------- Init ----------
applyLang(currentLang());
applyTheme((root.getAttribute('data-theme') as 'light' | 'dark') || 'light');
setMenu(false);

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { finished: Promise<void> };
};

document.getElementById('theme-btn')?.addEventListener('click', (event) => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  const doc = document as ViewTransitionDoc;

  if (reduceMotion || typeof doc.startViewTransition !== 'function') {
    applyTheme(next);
    return;
  }

  // O círculo nasce no centro do botão; o raio vai até o canto mais distante da tela.
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  root.style.setProperty('--vt-x', `${x}px`);
  root.style.setProperty('--vt-y', `${y}px`);
  root.style.setProperty(
    '--vt-r',
    `${Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))}px`
  );

  root.setAttribute('data-theme-swap', '');
  const done = () => root.removeAttribute('data-theme-swap');
  doc.startViewTransition(() => applyTheme(next)).finished.then(done, done);
});

document.getElementById('lang-btn')?.addEventListener('click', () => {
  const next: Lang = currentLang() === 'pt' ? 'en' : 'pt';
  applyLang(next);
  store('jv-portfolio-lang', next);
  setMenu(false);
});

menuBtn?.addEventListener('click', () => setMenu(!menuOpen));

document.querySelectorAll('.menu-close').forEach((el) =>
  el.addEventListener('click', () => closeMenu())
);

// Esc fecha e devolve o foco ao botão. Se o menu estiver fechado o closeMenu sai
// na primeira linha, então isto não rouba o Esc do <dialog> dos projetos.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu(true);
});

// Clique fora fecha. pointerdown em vez de click, e o botão é excluído de
// propósito: senão o pointerdown fecharia e o click logo em seguida reabriria.
document.addEventListener('pointerdown', (event) => {
  if (!menuOpen) return;
  const target = event.target as Node;
  if (!menuPanel?.contains(target) && !menuBtn?.contains(target)) closeMenu();
});

// Sem foco preso, o Tab sai do painel naturalmente — e aí o menu precisa fechar,
// senão fica aberto às costas de quem já seguiu para o conteúdo.
header?.addEventListener('focusout', (event) => {
  const next = (event as FocusEvent).relatedTarget as Node | null;
  if (next && !header.contains(next)) closeMenu();
});

// Acima do breakpoint o botão do menu some (media query em global.css): o painel
// não pode continuar aberto sem nada que o controle.
window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

// ---------- Barra de progresso da rolagem (borda inferior do header) ----------
const progressBar = document.getElementById('scroll-progress');
if (progressBar) {
  let queued = false;

  const drawProgress = () => {
    queued = false;
    const max = root.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    progressBar.style.transform = `scaleX(${ratio})`;
    // Pega carona neste rAF em vez de abrir um segundo listener de scroll: acende
    // o degradê da base do header (header::after) só quando já há conteúdo
    // passando por baixo dele.
    root.toggleAttribute('data-scrolled', window.scrollY > 4);
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

// ---------- Link ativo no header conforme a seção visível ----------
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
if (navLinks.length) {
  // Desktop e menu mobile apontam para os mesmos destinos: só uma seção por id
  const ids = [...new Set(navLinks.map((a) => (a.getAttribute('data-nav-link') || '').slice(1)))];
  const sections = ids
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null)
    .sort((a, b) =>
      a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    );

  if (sections.length) {
    // Offsets em cache: medir a cada frame de scroll forçaria reflow.
    let tops: number[] = [];
    const measure = () => {
      tops = sections.map((s) => s.getBoundingClientRect().top + window.scrollY);
    };

    let activeId: string | null = null;
    const markActive = () => {
      // Linha de corte a 40% da tela. Colada no header ela ficava tarde demais: o
      // primeiro link só acendia depois de rolar o hero inteiro. Nunca acima da
      // base do header, para o link clicado já chegar ativo (scroll-margin-top:84px).
      const line = window.scrollY + Math.max(headerH + 6, window.innerHeight * 0.4);
      let index = -1;
      for (let i = 0; i < tops.length; i++) {
        if (tops[i] <= line) index = i;
      }
      // A última seção nunca chega à linha de corte (não há página abaixo dela),
      // então ela vence assim que o scroll bate no fundo.
      if (window.scrollY + window.innerHeight >= root.scrollHeight - 2) {
        index = sections.length - 1;
      }

      const next = index >= 0 ? sections[index].id : '';
      if (next === activeId) return;
      activeId = next;
      navLinks.forEach((a) => {
        if (next && a.getAttribute('data-nav-link') === `#${next}`) {
          a.setAttribute('aria-current', 'true');
        } else {
          a.removeAttribute('aria-current');
        }
      });
    };

    let navQueued = false;
    const queueActive = () => {
      if (navQueued) return;
      navQueued = true;
      requestAnimationFrame(() => {
        navQueued = false;
        markActive();
      });
    };

    const remeasure = () => {
      measure();
      markActive();
    };

    window.addEventListener('scroll', queueActive, { passive: true });
    window.addEventListener('resize', remeasure);
    // Imagens carregando e o menu mobile abrindo mudam a posição das seções
    new ResizeObserver(remeasure).observe(document.body);
    remeasure();
  }
}

// ---------- Botão flutuante "voltar ao topo" ----------
// Aparece a partir da seção "sobre mim", usando a mesma linha de corte do link
// ativo do header: assim o botão surge exatamente quando "SOBRE MIM" acende.
const topBtn = document.getElementById('back-to-top');
const aboutSection = document.getElementById('sobre');
if (topBtn && aboutSection) {
  let aboutTop = 0;
  const measureAbout = () => {
    aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
  };

  let visible = false;
  const syncTopBtn = () => {
    const next = window.scrollY + Math.max(headerH + 6, window.innerHeight * 0.4) >= aboutTop;
    if (next === visible) return;
    visible = next;
    topBtn.classList.toggle('is-visible', next);
  };

  let topQueued = false;
  const queueTopBtn = () => {
    if (topQueued) return;
    topQueued = true;
    requestAnimationFrame(() => {
      topQueued = false;
      syncTopBtn();
    });
  };

  const remeasureTop = () => {
    measureAbout();
    syncTopBtn();
  };

  window.addEventListener('scroll', queueTopBtn, { passive: true });
  window.addEventListener('resize', remeasureTop);
  // Imagens carregando e o menu mobile abrindo mudam a posição da seção
  new ResizeObserver(remeasureTop).observe(document.body);
  remeasureTop();
}

// ---------- Faixa curva: texto deslizando pela curva ----------
// Reproduz o `scrub` do ScrollTrigger sem GSAP. Dois motivos para o lerp em vez
// do rAF-com-flag usado nos blocos acima: o alvo precisa ser perseguido com
// inércia (é ela que dá o peso do efeito), e `startOffset` é atributo SVG, não
// propriedade CSS — nem `transition` nem `animation-timeline` chegam nele.
const marquee = document.querySelector<HTMLElement>('[data-m="marquee"]');
const marqueeText = marquee?.querySelector('textPath');

if (marquee && marqueeText && !reduceMotion && 'IntersectionObserver' in window) {
  const FROM = 0;
  const TO = -100 / 3; // quanto do percurso o texto recua ponta a ponta do scroll
  const EASE = 0.08; // equivalente ao scrub:2 do GSAP; maior = mais colado no scroll

  let target = 0;
  let current = 0;
  let running = false;

  // 0 quando o topo da faixa entra pela base da tela, 1 quando a base sai pelo topo
  const progress = () => {
    const box = marquee.getBoundingClientRect();
    const ratio = (window.innerHeight - box.top) / (window.innerHeight + box.height);
    return Math.min(Math.max(ratio, 0), 1);
  };

  const tick = () => {
    current += (target - current) * EASE;
    // Sem este corte o lerp nunca chega ao alvo e o rAF roda para sempre
    if (Math.abs(target - current) < 0.0002) current = target;
    marqueeText.setAttribute('startOffset', `${FROM + (TO - FROM) * current}%`);
    running = current !== target;
    if (running) requestAnimationFrame(tick);
  };

  const queueMarquee = () => {
    target = progress();
    if (running) return;
    running = true;
    requestAnimationFrame(tick);
  };

  // Fora da tela o listener sai: zero trabalho por frame enquanto a faixa não aparece
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      window.addEventListener('scroll', queueMarquee, { passive: true });
      queueMarquee();
    } else {
      window.removeEventListener('scroll', queueMarquee);
    }
  }).observe(marquee);
}

// ---------- Techstack: ícone magnético ----------
// Só com mouse: em toque não existe pointerleave confiável e o ícone ficaria preso
// deslocado; abaixo de 900px o grafo vira flex-wrap e o CSS já anula o transform.
const graph = document.querySelector<HTMLElement>('[data-m="graph"]');
if (graph && !reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const RADIUS = 95; // alcance do ímã em px
  const PULL = 0.35; // fração da distância até o cursor que o ícone percorre
  const nodes = Array.from(graph.querySelectorAll<HTMLElement>('.tech-node'));

  // Coordenadas de página: assim rolar não invalida a medida.
  let centers: { x: number; y: number }[] = [];
  const measure = () => {
    const box = graph.getBoundingClientRect();
    // offsetLeft/Top ignoram transform, então a medida não é contaminada pelo
    // deslocamento atual do nó — e com o translate(-50%,-50%) do .tech-node
    // esse offset já é exatamente o centro visual dele.
    centers = nodes.map((n) => ({
      x: box.left + window.scrollX + n.offsetLeft,
      y: box.top + window.scrollY + n.offsetTop,
    }));
  };

  const place = (i: number, dx: number, dy: number) => {
    nodes[i].style.setProperty('--mx', `${dx}px`);
    nodes[i].style.setProperty('--my', `${dy}px`);
  };

  let pointerX = 0;
  let pointerY = 0;
  let active = -1;
  let magnetQueued = false;

  const release = () => {
    if (active < 0) return;
    place(active, 0, 0);
    active = -1;
  };

  const update = () => {
    magnetQueued = false;
    // Só o nó mais próximo dentro do raio se move: um transform por frame.
    let nearest = -1;
    let best = RADIUS;
    for (let i = 0; i < centers.length; i++) {
      const d = Math.hypot(pointerX - centers[i].x, pointerY - centers[i].y);
      if (d < best) {
        best = d;
        nearest = i;
      }
    }
    if (nearest !== active) release();
    active = nearest;
    if (active >= 0) {
      place(active, (pointerX - centers[active].x) * PULL, (pointerY - centers[active].y) * PULL);
    }
  };

  graph.addEventListener('pointermove', (e) => {
    pointerX = e.pageX;
    pointerY = e.pageY;
    if (magnetQueued) return;
    magnetQueued = true;
    requestAnimationFrame(update);
  });

  // Medir na entrada mantém os centros frescos sem observar layout o tempo todo
  graph.addEventListener('pointerenter', measure);
  graph.addEventListener('pointerleave', release);
  // Rolar move o cursor em coordenadas de página sem disparar pointermove
  window.addEventListener('scroll', release, { passive: true });
  window.addEventListener('resize', measure);
  measure();
}

// ---------- Ano do copyright ----------
// A data de atualização não entra aqui: ela é a do build, renderizada em Contact.astro.
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
