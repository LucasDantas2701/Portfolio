// Dados do portfólio. Edite aqui: os componentes leem tudo deste arquivo.

export const profile = {
  name: 'Lucas Dantas',
  fullName: 'Lucas dos Santos Dantas',
  initials: 'LD',
  brand: 'lucasdantas',
  location: 'Manaus, AM',
  timezone: 'GMT-4',
  email: 'lucasdantas270105@gmail.com',
  github: 'https://github.com/LucasDantas2701',
  linkedin: 'https://www.linkedin.com/in/lucas-dantass',
  // Foto do GitHub. Para usar outra, coloque o arquivo em /public e troque por '/foto.jpg'.
  photo: 'https://github.com/LucasDantas2701.png?size=500',
  status: 'Em busca de estágio',
  roles: ['Desenvolvedor Python', 'Automação Web & RPA', 'Agentes de IA', 'Automação de Testes'],
  tagline:
    'Construo automações web, bots e agentes de IA em Python — do script que coleta dados ao agente que entende um pedido em português e executa no navegador.',
};

export const heroStats = [
  { value: '7º', label: 'Período de Eng. da Computação' },
  { value: '2+', label: 'Anos de experiência em TI' },
  { value: '6', label: 'Projetos no GitHub' },
];

export const about = {
  badgeTitle: 'Engenharia da Computação',
  badgeSub: 'Manaus, AM',
  paragraphs: [
    'Olá! Sou Lucas Dantas, estudante do 7º período de Engenharia da Computação na Faculdade Matias Machline. Trabalho com Python no dia a dia, principalmente com automação web, RPA e tratamento de dados.',
    'Hoje sou bolsista em IA e Automação na AX Academy (FPF Tech / LG Electronics Brasil), onde desenvolvo automações com Playwright, Selenium, PyAutoGUI e BotCity em ambiente industrial. Antes, passei dois anos como estagiário de TI na Secretaria de Segurança Pública do Amazonas, investigando, reproduzindo e documentando falhas em sistemas internos.',
    'Meu projeto principal é o ANCHOR, um agente que transforma pedidos em linguagem natural em ações no navegador usando modelos de IA locais. Também gosto de sistemas embarcados e já trabalhei com ESP32 e transmissão de dados por luz.',
  ],
  tags: ['Python', 'Playwright', 'Selenium', 'Pandas', 'RPA', 'Agentes de IA'],
};

export const skillCategories = [
  {
    label: 'Linguagens & Dados',
    icon: '⬡',
    color: '#3b82f6',
    skills: ['Python', 'SQL', 'Pandas', 'Supabase', 'TypeScript'],
  },
  {
    label: 'Automação & Testes',
    icon: '⬢',
    color: '#8b5cf6',
    skills: ['Playwright', 'Selenium', 'PyAutoGUI', 'BotCity', 'RPA', 'Testes manuais', 'pytest'],
  },
  {
    label: 'Desenvolvimento',
    icon: '◈',
    color: '#10b981',
    skills: ['FastAPI', 'Django / DRF', 'Angular', 'React', 'Git / GitHub / GitLab', 'Scrum & Kanban'],
  },
  {
    label: 'IA & Embarcados',
    icon: '◇',
    color: '#f59e0b',
    skills: ['Agentes de IA', 'LLMs locais (Ollama)', 'Noções de ML', 'Data Mining', 'ESP32'],
  },
];

// Autoavaliação: ajuste os números como achar justo.
export const featuredSkills = [
  { name: 'Python', level: 85 },
  { name: 'Playwright / Selenium', level: 85 },
  { name: 'RPA (PyAutoGUI, BotCity)', level: 75 },
  { name: 'Pandas & SQL', level: 70 },
  { name: 'Agentes de IA / LLMs', level: 70 },
  { name: 'Angular / React', level: 55 },
];

export const otherTech = [
  'Tailwind CSS', 'Leaflet', 'Chart.js', 'python-telegram-bot', 'AsyncIO',
  'Ollama', 'Qwen', 'SQLite', 'Orange', 'VS Code + IA',
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  github: string;
  demo?: string;
  badge: string;
};

const og = (repo: string) => `https://opengraph.githubassets.com/1/LucasDantas2701/${repo}`;
const gh = (repo: string) => `https://github.com/LucasDantas2701/${repo}`;

export const projects: Project[] = [
  {
    name: 'ANCHOR',
    description:
      'Agente de automação web que recebe um pedido em texto e o link do site, gera um plano com um LLM local (Qwen via Ollama) e executa cada passo com Playwright. Uma heurística escolhe os elementos da página; quando não tem certeza, pergunta ao usuário e lembra a escolha. Replaneja quando a página muda e confere no fim se o objetivo foi cumprido.',
    tags: ['Python', 'Playwright', 'Ollama', 'LLM', 'pytest'],
    image: og('ANCHOR'),
    color: '#3b82f6',
    github: gh('ANCHOR'),
    badge: 'Em desenvolvimento',
  },
  {
    name: 'NightEyes',
    description:
      'Sistema de monitoramento de fadiga e distrações de motoristas. Painel com indicadores do mês, Pareto de eventos, mapa das rotas com eventos marcados, alertas por severidade e cadastro de funcionários. Testes automatizados com Selenium e testes manuais.',
    tags: ['Angular 20', 'Python', 'Supabase', 'Leaflet', 'Selenium'],
    image: og('Night-Eyes-Frontend'),
    color: '#8b5cf6',
    github: gh('Night-Eyes-Frontend'),
    badge: 'Projeto acadêmico',
  },
  {
    name: 'Bot de Consulta de Preços',
    description:
      'Bot do Telegram que pesquisa um produto na Amazon, no Mercado Livre e no AliExpress e devolve os resultados com links. Assíncrono, reaproveita sessões do navegador e simula comportamento humano para evitar bloqueios.',
    tags: ['Python', 'Playwright', 'Telegram', 'AsyncIO'],
    image: og('BotConsultaPrecos'),
    color: '#10b981',
    github: gh('BotConsultaPrecos'),
    badge: 'Bot',
  },
  {
    name: 'FlightRadar Scraper',
    description:
      'Automação que abre o FlightRadar, encontra aeronaves na tela por reconhecimento de imagem, clica nelas e coleta código do voo, origem e destino, salvando uma captura de cada voo sem registros duplicados.',
    tags: ['Python', 'Playwright', 'PyAutoGUI'],
    image: og('flightradar-scrapper'),
    color: '#f59e0b',
    github: gh('flightradar-scrapper'),
    badge: 'Automação',
  },
  {
    name: 'AMPHAROS',
    description:
      'Protótipo de transmissão de dados por ondas luminosas (Li-Fi) com ESP32, como camada extra de proteção para informações privadas. Desenvolvi, testei e validei a comunicação entre os dispositivos.',
    tags: ['ESP32', 'Li-Fi', 'Embarcados'],
    image: og('projeto-LiFi'),
    color: '#ec4899',
    github: gh('projeto-LiFi'),
    badge: 'Embarcados',
  },
  {
    name: 'Rumo ao Hexa API',
    description:
      'API REST para gerenciar seleções, times, jogadores e comissão técnica rumo à Copa do Mundo. Projeto de estudo para praticar models, migrations, admin e serializers do Django REST Framework.',
    tags: ['Python', 'Django', 'DRF', 'SQLite'],
    image: og('Rumo_ao_Hexa_API'),
    color: '#a78bfa',
    github: gh('Rumo_ao_Hexa_API'),
    badge: 'Estudo',
  },
];

export type TimelineEvent = {
  year: string;
  title: string;
  desc: string;
  type: 'work' | 'project' | 'cert' | 'education';
  color: string;
};

export const timeline: TimelineEvent[] = [
  {
    year: '2026 – hoje',
    title: 'Bolsista em IA e Automação @ AX Academy (FPF Tech / LG Electronics Brasil)',
    desc: 'Automações web e fluxos de RPA em Python (Playwright, Selenium, PyAutoGUI, BotCity) em ambiente industrial, tratamento e validação de dados com Pandas e uso de agentes de IA para depuração, documentação e otimização de código. Módulos de IA aplicada, Data Mining e Machine Learning.',
    type: 'work',
    color: '#3b82f6',
  },
  {
    year: '2026',
    title: 'ANCHOR',
    desc: 'Início do agente de automação web com IA local: percepção da página, resolvedor de elementos, desempate pelo usuário, memória das escolhas, planejador com LLM e avaliação reproduzível.',
    type: 'project',
    color: '#10b981',
  },
  {
    year: '2024 – 2026',
    title: 'Estagiário de TI @ Secretaria de Segurança Pública do Amazonas',
    desc: 'Investigação, reprodução, análise e documentação de falhas técnicas em sistemas internos. Validação e testes de sistemas, suporte técnico e resolução de problemas de rede.',
    type: 'work',
    color: '#8b5cf6',
  },
  {
    year: '2023 – 2024',
    title: 'Jovem Aprendiz Administrativo @ MRV&CO',
    desc: 'Organização e validação de informações e documentos, apoio em processos administrativos e controle de dados.',
    type: 'work',
    color: '#8b5cf6',
  },
  {
    year: '2023',
    title: 'Engenharia da Computação — Faculdade Matias Machline',
    desc: 'Início da graduação, com conclusão prevista para dezembro de 2027.',
    type: 'education',
    color: '#a78bfa',
  },
  {
    year: '2020 – 2022',
    title: 'Ensino Médio Técnico em Mecatrônica — Fundação Matias Machline',
    desc: 'Base em eletrônica, automação e programação que levou ao interesse por embarcados e software.',
    type: 'education',
    color: '#a78bfa',
  },
  {
    year: 'Certificados',
    title: 'Inglês B2 (ECCE, University of Michigan) e cursos complementares',
    desc: 'Fundamentos de Análise de Dados com Orange e Introdução a IA e Chats Inteligentes (Samsung Ocean); Gestão Ágil com Scrum (Faculdade Matias Machline).',
    type: 'cert',
    color: '#f59e0b',
  },
];

export const timelineSubtitle = 'Do técnico em Mecatrônica à IA aplicada à automação.';

export const currently = [
  {
    icon: '🔨',
    label: 'Construindo',
    title: 'ANCHOR 0.3.0',
    sub: 'Automações salvas que se corrigem quando a página muda',
    color: '#3b82f6',
  },
  {
    icon: '📖',
    label: 'Estudando',
    title: 'IA aplicada na AX Academy',
    sub: 'Agentes inteligentes, Data Mining e Machine Learning',
    color: '#8b5cf6',
  },
  {
    icon: '🎯',
    label: 'Explorando',
    title: 'Django/DRF e FastAPI',
    sub: 'APIs REST e agentes de IA em produção',
    color: '#10b981',
  },
  {
    icon: '🧠',
    label: 'Interesse',
    title: 'LLMs rodando localmente',
    sub: 'Qwen via Ollama, sem depender de API na nuvem',
    color: '#f59e0b',
  },
  {
    icon: '🔌',
    label: 'Curiosidade',
    title: 'Sistemas embarcados',
    sub: 'ESP32 e comunicação entre dispositivos',
    color: '#ec4899',
  },
  {
    icon: '🎓',
    label: 'Cursando',
    title: 'Engenharia da Computação',
    sub: '7º período, Faculdade Matias Machline',
    color: '#a78bfa',
  },
];

export const cta = {
  status: 'Disponível para estágio',
  text: 'Procuro estágio em automação de testes, desenvolvimento de software ou dados. Se sua equipe precisa de alguém que goste de automatizar o que é repetitivo e investigar a causa das falhas, vamos conversar.',
  info: [
    { icon: '📍', text: 'Manaus, AM (GMT-4)' },
    { icon: '🎓', text: 'Eng. da Computação, 7º período' },
    { icon: '🌎', text: 'Inglês B2 (ECCE)' },
  ],
};
