import type { ImageMetadata } from 'astro';

// Imagens importadas de src/assets → otimizadas pelo astro:assets (<Image>).
import strangerThings from '../assets/images/stranger-things.webp';
import pringles from '../assets/images/pringles.webp';
import doutoragenda from '../assets/images/dr-agenda.png';
import agencia from '../assets/images/webhub.png';
import stockly from '../assets/images/stockly.png';
import riff from '../assets/images/riff.png';
import financeia from '../assets/images/financeia.png';
import barber from '../assets/images/barber.png';
import spiderman from '../assets/images/spiderman-1920x1200.png';

export interface Tech {
  name: string;
  /** Caminho de public/ (SVG servido cru). */
  icon: string;
}

export interface Project {
  title: string;
  /** Ausente enquanto o projeto não tiver deploy publicado. */
  url?: string;
  /** Ausente enquanto o repositório não for publicado. */
  repo?: string;
  img: ImageMetadata;
  description: string;
  techs: Tech[];
}

export const projects: Project[] = [
  {
    title: 'Finance IA',
    url: 'https://financeia.vercel.app/',
    repo: 'https://github.com/joaoviitordev/financeia',
    img: financeia,
    description:
      'Simulador de planejamento financeiro pessoal com diagnóstico por IA. São sete perguntas sobre renda, gastos fixos, dívidas e metas: a partir delas o app calcula a sobra mensal, monta um plano com prazo para cada objetivo e pede à IA um diagnóstico em português sobre aqueles números — com uma conversa aberta sobre o próprio plano. Cada simulação vira um endereço próprio e fica no dispositivo de quem usa: não há conta nem servidor de dados. A chave da IA nunca vai para o navegador, fica num proxy no servidor. Projeto final do Bootcamp DIO Santander 2026.',
    techs: [
      { name: 'React', icon: '/assets/icons/react.svg' },
      { name: 'TypeScript', icon: '/assets/icons/typescript.svg' },
      { name: 'Vite', icon: '/assets/icons/vite.svg' },
      { name: 'Tailwind CSS', icon: '/assets/icons/tailwindcss.svg' },
      { name: 'IA', icon: '/assets/icons/ai.svg' },
    ],
  },
  {
    title: 'Riff',
    url: 'https://riff-mauve.vercel.app/',
    repo: 'https://github.com/joaoviitordev/riff',
    img: riff,
    description:
      'Riff é uma rede social musical que conecta pessoas através do Spotify. Cada usuário cria um perfil com @nome de usuário próprio, conecta sua conta do Spotify e passa a ter uma página pública onde qualquer visitante pode ver o que ele está ouvindo agora, suas músicas e artistas mais ouvidos por período — sem esperar o Wrapped anual.',
    techs: [
      { name: 'Next.js', icon: '/assets/icons/nextjs.svg' },
      { name: 'React', icon: '/assets/icons/react.svg' },
      { name: 'TypeScript', icon: '/assets/icons/typescript.svg' },
      { name: 'PostgreSQL', icon: '/assets/icons/postgresql.svg' },
      { name: 'Tailwind CSS', icon: '/assets/icons/tailwindcss.svg' },
      { name: 'Supabase', icon: '/assets/icons/supabase.svg' },
    ],
  },
  {
    title: 'FSW Barber',
    url: 'https://barber-app-rust-theta.vercel.app',
    repo: 'https://github.com/joaoviitordev/barber-app',
    img: barber,
    description:
      'Aplicação web para agendamento de horários em barbearias. O usuário pesquisa barbearias, visualiza os serviços de cada uma, autentica-se com a conta Google e reserva um horário para o serviço desejado, além de acompanhar e cancelar seus agendamentos. O foco foi entregar uma interface responsiva — desktop e mobile — com fluxo de reserva curto e sem fricção.',
    techs: [
      { name: 'Next.js', icon: '/assets/icons/nextjs.svg' },
      { name: 'React', icon: '/assets/icons/react.svg' },
      { name: 'TypeScript', icon: '/assets/icons/typescript.svg' },
      { name: 'PostgreSQL', icon: '/assets/icons/postgresql.svg' },
      { name: 'Tailwind CSS', icon: '/assets/icons/tailwindcss.svg' },
      { name: 'Prisma ORM', icon: '/assets/icons/prisma.svg' },
    ],
  },
  {
    title: 'Doutor Agenda',
    url: 'https://doutor-agenda-indol.vercel.app/',
    repo: 'https://github.com/joaoviitordev/doutor-agenda',
    img: doutoragenda,
    description:
      'Sistema SaaS para agendamento médico construído com React, Next.js e Tailwind CSS. Desafio: otimização de performance e criação de um painel de UI/UX intuitivo para clínicas. Para saber mais sobre as tecnologias utilizadas, acesse o repositório do projeto.',
    techs: [
      { name: 'React', icon: '/assets/icons/react.svg' },
      { name: 'Next.js', icon: '/assets/icons/nextjs.svg' },
      { name: 'Tailwind CSS', icon: '/assets/icons/tailwindcss.svg' },
      { name: 'Node.js', icon: '/assets/icons/nodejs2.svg' },
      { name: 'PostgreSQL', icon: '/assets/icons/postgresql.svg' },
      { name: 'Drizzle ORM', icon: '/assets/icons/drizzle.svg' },
    ],
  },
  {
    title: 'Stockly',
    url: 'https://stockly-seven-nu.vercel.app/',
    repo: 'https://github.com/joaoviitordev/stockly',
    img: stockly,
    description:
      'Este projeto consiste em uma aplicação web completa para o controle de estoque e vendas, desenvolvida com o objetivo de aprender a criar soluções full stack robustas. O sistema permite o gerenciamento de produtos, registro de vendas e possui um painel de controle com gráficos de receita em tempo real.',
    techs: [
      { name: 'Next.js', icon: '/assets/icons/nextjs.svg' },
      { name: 'React', icon: '/assets/icons/react.svg' },
      { name: 'Tailwind CSS', icon: '/assets/icons/tailwindcss.svg' },
      { name: 'Node.js', icon: '/assets/icons/nodejs2.svg' },
      { name: 'PostgreSQL', icon: '/assets/icons/postgresql.svg' },
      { name: 'Prisma ORM', icon: '/assets/icons/prisma.svg' },
    ],
  },
  {
    title: 'Spider-Man',
    url: 'https://joaoviitordev.github.io/spiderman/',
    repo: 'https://github.com/joaoviitordev/spiderman',
    img: spiderman,
    description:
      'Landing page do filme Spider-Man: Um Novo Dia, construída com foco em UI/UX e narrativa visual. A navegação é conduzida por animações em GSAP — transições de seção, revelações de texto e efeitos de scroll — que acompanham a atmosfera do filme. Recursos de IA foram usados como apoio na concepção e no refinamento da interface.',
    techs: [
      { name: 'HTML5', icon: '/assets/icons/html5.svg' },
      { name: 'CSS3', icon: '/assets/icons/css3.svg' },
      { name: 'JavaScript', icon: '/assets/icons/js.svg' },
      { name: 'GSAP', icon: '/assets/icons/gsap2.svg' },
      { name: 'IA', icon: '/assets/icons/ai.svg' },
    ],
  },
  {
    title: 'Stranger Things',
    url: 'https://joaoviitordev.github.io/StrangerThings/',
    repo: 'https://github.com/joaoviitordev/StrangerThings',
    img: strangerThings,
    description:
      'Este projeto consiste em uma Landing Page inspirada no site oficial da série Stranger Things da Netflix, desenvolvida com foco em UI/UX, experiência imersiva e identidade visual. A interface foi planejada para transmitir a atmosfera da série, respeitando hierarquia visual, consistência de design e boas práticas de front-end.',
    techs: [
      { name: 'HTML5', icon: '/assets/icons/html5.svg' },
      { name: 'CSS3', icon: '/assets/icons/css3.svg' },
      { name: 'JavaScript', icon: '/assets/icons/js.svg' },
      { name: 'GSAP', icon: '/assets/icons/gsap2.svg' },
      { name: 'Figma', icon: '/assets/icons/figma.svg' },
    ],
  },
  {
    title: 'Pringles',
    url: 'https://joaoviitordev.github.io/Pringles/',
    repo: 'https://github.com/joaoviitordev/Pringles',
    img: pringles,
    description:
      'Assim como o projeto de Stranger Things, este projeto também é uma Landing Page, porém, é inspirada no site oficial da Pringles, desenvolvida com foco em UI/UX, experiência imersiva e identidade visual. A interface foi planejada para transmitir a atmosfera da marca, respeitando hierarquia visual, consistência de design e boas práticas de front-end.',
    techs: [
      { name: 'HTML5', icon: '/assets/icons/html5.svg' },
      { name: 'CSS3', icon: '/assets/icons/css3.svg' },
      { name: 'JavaScript', icon: '/assets/icons/js.svg' },
      { name: 'GSAP', icon: '/assets/icons/gsap2.svg' },
      { name: 'Figma', icon: '/assets/icons/figma.svg' },
    ],
  },
  {
    title: 'Agência 3D',
    url: 'https://joaoviitordev.github.io/Agencia3D/',
    repo: 'https://github.com/joaoviitordev/Agencia3D',
    img: agencia,
    description:
      'Landing page imersiva para Agência 3D do grupo WebHub usando bibliotecas avançadas de animação web (GSAP e Three.js). A interface foi planejada para transmitir a atmosfera da marca, respeitando hierarquia visual, consistência de design e boas práticas de front-end. Para saber mais sobre as tecnologias utilizadas, acesse o repositório do projeto.',
    techs: [
      { name: 'HTML5', icon: '/assets/icons/html5.svg' },
      { name: 'CSS3', icon: '/assets/icons/css3.svg' },
      { name: 'JavaScript', icon: '/assets/icons/js.svg' },
      { name: 'GSAP', icon: '/assets/icons/gsap2.svg' },
      { name: 'Three.js', icon: '/assets/icons/threejs.svg' },
      { name: 'Figma', icon: '/assets/icons/figma.svg' },
    ],
  },
];
