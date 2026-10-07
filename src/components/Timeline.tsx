import { useReveal } from '../hooks/useReveal';
import { timeline as events, timelineSubtitle, type TimelineEvent } from '../data/profile';


const typeIcon: Record<string, string> = {
  work: '💼',
  project: '🚀',
  cert: '🏆',
  education: '🎓',
};

function TimelineItem({ event, side }: { event: TimelineEvent; side: 'left' | 'right' }) {
  const ref = useReveal(0.15) as React.RefObject<HTMLDivElement>;

  return (
    <div
      className={`relative flex ${side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row gap-0`}
    >
      {/* Card side */}
      <div className={`flex-1 ${side === 'left' ? 'md:pr-12 md:pl-0' : 'md:pl-12 md:pr-0'} pl-10 pr-0`}>
        <div
          ref={ref as any}
          className={`${side === 'left' ? 'reveal-right' : 'reveal-left'} card-hover p-5 rounded-2xl mb-8`}
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono" style={{ color: event.color }}>
              {event.year}
            </span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.2)' }}
            />
            <span className="text-xs text-white/35">{typeIcon[event.type]}</span>
          </div>
          <h3 className="font-semibold text-white/90 mb-2 text-sm leading-snug">{event.title}</h3>
          <p className="text-xs text-white/50 leading-relaxed">{event.desc}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="absolute left-0 md:relative md:left-auto md:flex-none md:w-0 flex flex-col items-center">
        <div
          className="w-3 h-3 rounded-full mt-5 shrink-0 z-10"
          style={{
            background: event.color,
            boxShadow: `0 0 12px ${event.color}60`,
            marginTop: '22px',
          }}
        />
      </div>

      {/* Empty side */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function Timeline() {
  const titleRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section id="jornada" className="py-32 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 30% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <div ref={titleRef as any} className="reveal text-center mb-20">
          <span
            className="font-mono text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block"
            style={{
              background: 'rgba(16,185,129,0.1)',
              color: '#34d399',
              border: '1px solid rgba(16,185,129,0.2)',
            }}
          >
            04 — Jornada
          </span>
          <h2
            className="font-bold mt-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            Linha do{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #34d399, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              tempo
            </span>
          </h2>
          <p className="text-white/45 mt-4 leading-relaxed">
            {timelineSubtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="timeline-line hidden md:block" />

          <div>
            {events.map((e, i) => (
              <TimelineItem key={e.title} event={e} side={i % 2 === 0 ? 'right' : 'left'} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
