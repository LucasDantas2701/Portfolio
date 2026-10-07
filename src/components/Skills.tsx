import { useReveal } from '../hooks/useReveal';
import { skillCategories as categories, featuredSkills, otherTech } from '../data/profile';

type Category = { label: string; icon: string; color: string; skills: string[] };

function CategoryCard({ cat }: { cat: Category }) {
  const cardRef = useReveal(0.1) as React.RefObject<HTMLDivElement>;
  return (
    <div
      ref={cardRef as any}
      className="reveal-scale card-hover p-5 rounded-2xl"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
          style={{
            background: `${cat.color}20`,
            border: `1px solid ${cat.color}35`,
            color: cat.color,
          }}
        >
          {cat.icon}
        </div>
        <span className="font-semibold text-sm text-white/80">{cat.label}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {cat.skills.map((skill) => (
          <span
            key={skill}
            className="badge-shine text-xs px-2.5 py-1 rounded-lg font-medium"
            style={{
              background: `${cat.color}10`,
              color: `${cat.color}dd`,
              border: `1px solid ${cat.color}22`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}



function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useReveal(0.3) as React.RefObject<HTMLDivElement>;
  return (
    <div ref={ref as any} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white/80">{name}</span>
        <span className="text-xs font-mono text-white/40">{level}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            transitionDelay: `${delay + 300}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const titleRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section id="habilidades" className="py-32 px-6 relative">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div ref={titleRef as any} className="reveal text-center mb-20">
          <span
            className="font-mono text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block"
            style={{
              background: 'rgba(59,130,246,0.1)',
              color: '#60a5fa',
              border: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            02 — Habilidades
          </span>
          <h2
            className="font-bold mt-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            Stack &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ferramentas
            </span>
          </h2>
          <p className="text-white/45 mt-4 max-w-lg mx-auto leading-relaxed">
            Tecnologias que uso no dia a dia em automação, dados e desenvolvimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Category cards */}
          <div className="grid sm:grid-cols-2 gap-4 stagger">
            {categories.map((cat) => (
              <CategoryCard key={cat.label} cat={cat} />
            ))}
          </div>

          {/* Skill bars */}
          <div className="space-y-5">
            <div
              className="reveal mb-8"
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.8rem',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.08em',
              }}
            >
              // nível de domínio (autoavaliação)
            </div>
            {featuredSkills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
            ))}
          </div>
        </div>

        {/* Bottom strip — more tags */}
        <div className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-center text-white/35 text-xs font-mono mb-6 uppercase tracking-widest">
            Também uso
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {otherTech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full font-medium transition-colors duration-200 hover:border-white/20 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
