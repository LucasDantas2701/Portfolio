import { useReveal } from '../hooks/useReveal';

type CurrentItem = { icon: string; label: string; title: string; sub: string; color: string };

function CurrentCard({ item, index }: { item: CurrentItem; index: number }) {
  const ref = useReveal(0.1) as React.RefObject<HTMLDivElement>;
  return (
    <div
      ref={ref as any}
      className="reveal-scale card-hover p-5 rounded-2xl"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
          style={{
            background: `${item.color}15`,
            border: `1px solid ${item.color}25`,
          }}
        >
          {item.icon}
        </div>
        <div>
          <div
            className="text-xs font-mono font-medium mb-1"
            style={{ color: item.color }}
          >
            {item.label}
          </div>
          <div className="font-semibold text-sm text-white/85 leading-snug mb-1">
            {item.title}
          </div>
          <div className="text-xs text-white/40">{item.sub}</div>
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    icon: '📖',
    label: 'Estudando',
    title: 'Distributed Systems & Consensus Algorithms',
    sub: 'DDIA + papers do Google Spanner',
    color: '#3b82f6',
  },
  {
    icon: '🔨',
    label: 'Construindo',
    title: 'Synapse AI v2',
    sub: 'Code review com LLMs multi-agente',
    color: '#8b5cf6',
  },
  {
    icon: '🎯',
    label: 'Explorando',
    title: 'Rust para sistemas embarcados',
    sub: 'Projetos com ESP32 e Raspberry Pi',
    color: '#10b981',
  },
  {
    icon: '✍️',
    label: 'Escrevendo',
    title: 'Blog sobre arquitetura de software',
    sub: 'Artigos sobre DDD, CQRS e Event Sourcing',
    color: '#f59e0b',
  },
  {
    icon: '🎙️',
    label: 'Participando',
    title: 'Dev Talks São Paulo',
    sub: 'Comunidade de engenheiros de software',
    color: '#ec4899',
  },
  {
    icon: '🌱',
    label: 'Interesse',
    title: 'IA aplicada a ferramentas para devs',
    sub: 'LLMs, Code Intelligence, AgentOps',
    color: '#a78bfa',
  },
];

export default function Currently() {
  const titleRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section id="atualmente" className="py-32 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 80% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div ref={titleRef as any} className="reveal text-center mb-20">
          <span
            className="font-mono text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block"
            style={{
              background: 'rgba(245,158,11,0.1)',
              color: '#fbbf24',
              border: '1px solid rgba(245,158,11,0.2)',
            }}
          >
            05 — Atualmente
          </span>
          <h2
            className="font-bold mt-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            O que estou{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              fazendo agora
            </span>
          </h2>
          <p className="text-white/45 mt-4 max-w-md mx-auto leading-relaxed">
            Projetos, estudos e tópicos que estão no meu radar neste momento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <CurrentCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
