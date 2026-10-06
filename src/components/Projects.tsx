import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    name: 'Orion Dashboard',
    description:
      'Plataforma de analytics em tempo real para e-commerces. Processa mais de 2M de eventos/dia com latência < 100ms. Inclui módulo de IA para previsão de demanda.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
    color: '#3b82f6',
    github: '#',
    demo: '#',
    featured: true,
    badge: 'Em produção',
  },
  {
    name: 'Flowkit UI',
    description:
      'Design system open source com 60+ componentes React acessíveis, dark mode nativo, e geração automática de tokens via Figma API. +3k stars no GitHub.',
    tags: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'CSS Variables'],
    image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&h=500&fit=crop&auto=format',
    color: '#8b5cf6',
    github: '#',
    demo: '#',
    featured: true,
    badge: 'Open Source',
  },
  {
    name: 'Habitat',
    description:
      'App de gerenciamento de hábitos com gamificação, sincronização offline-first e notificações inteligentes. 15k usuários ativos mensais.',
    tags: ['React Native', 'Expo', 'SQLite', 'Node.js', 'Push Notifications'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format',
    color: '#10b981',
    github: '#',
    demo: '#',
    featured: false,
    badge: 'Mobile',
  },
  {
    name: 'Synapse AI',
    description:
      'Ferramenta de code review automatizada com LLMs. Integra com GitHub Actions e analisa PRs com sugestões contextuais. Usada por 200+ times.',
    tags: ['Python', 'FastAPI', 'OpenAI API', 'Docker', 'GitHub Apps'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop&auto=format',
    color: '#f59e0b',
    github: '#',
    demo: '#',
    featured: false,
    badge: 'IA',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <div
      ref={ref as any}
      className={`reveal-scale card-hover rounded-2xl overflow-hidden group`}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'brightness(0.7)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 30%, ${project.color}20 70%, rgba(9,11,17,0.95) 100%)`,
          }}
        />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: `${project.color}25`,
              border: `1px solid ${project.color}45`,
              color: project.color,
              backdropFilter: 'blur(8px)',
            }}
          >
            {project.badge}
          </span>
        </div>

        {/* Links overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
            title="GitHub"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href={project.demo}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
            title="Demo"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-white/90">{project.name}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md font-mono"
              style={{
                background: `${project.color}10`,
                color: `${project.color}bb`,
                border: `1px solid ${project.color}20`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const titleRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section id="projetos" className="py-32 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div ref={titleRef as any} className="reveal text-center mb-20">
          <span
            className="font-mono text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block"
            style={{
              background: 'rgba(139,92,246,0.1)',
              color: '#a78bfa',
              border: '1px solid rgba(139,92,246,0.2)',
            }}
          >
            03 — Projetos
          </span>
          <h2
            className="font-bold mt-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            Trabalhos{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              selecionados
            </span>
          </h2>
          <p className="text-white/45 mt-4 max-w-lg mx-auto leading-relaxed">
            Projetos que resolvem problemas reais — da ideia ao produto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors group"
          >
            Ver todos no GitHub
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
