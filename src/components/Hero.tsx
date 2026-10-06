import { useEffect, useState } from 'react';

const roles = ['Full-Stack Developer', 'UI/UX Engineer', 'Tech Lead', 'Open Source Contributor'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ paddingTop: '80px' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            top: '-100px',
            left: '-200px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="orb absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            top: '100px',
            right: '-150px',
            background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            bottom: '80px',
            left: '30%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{
            background: 'rgba(16,185,129,0.08)',
            borderColor: 'rgba(16,185,129,0.25)',
            color: '#10b981',
            transitionDelay: '100ms',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Disponível para novos projetos
        </div>

        {/* Name */}
        <h1
          className={`font-bold leading-none mb-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            letterSpacing: '-0.03em',
            transitionDelay: '200ms',
          }}
        >
          Alex Santos
        </h1>

        {/* Typewriter role */}
        <div
          className={`flex items-center justify-center gap-1 mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '350ms' }}
        >
          <span
            className="font-semibold"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              minWidth: '280px',
              textAlign: 'center',
            }}
          >
            {displayed}
            <span
              className="cursor-blink inline-block w-0.5 h-6 ml-0.5 align-middle"
              style={{ background: '#a78bfa', verticalAlign: 'middle' }}
            />
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`text-white/50 font-light max-w-lg mx-auto mb-12 leading-relaxed transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', transitionDelay: '450ms' }}
        >
          Transformo ideias complexas em produtos digitais elegantes —
          do conceito ao deploy, com código limpo e experiências que importam.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '550ms' }}
        >
          <a
            href="#projetos"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.35)',
            }}
          >
            Ver projetos
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contato"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border transition-all duration-300 hover:scale-105 hover:border-white/30"
            style={{
              borderColor: 'rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            Entre em contato
          </a>
        </div>

        {/* Stats */}
        <div
          className={`flex flex-wrap gap-8 justify-center mt-20 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '700ms' }}
        >
          {[
            { value: '5+', label: 'Anos de experiência' },
            { value: '40+', label: 'Projetos entregues' },
            { value: '12+', label: 'Tecnologias dominadas' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-bold text-2xl"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </div>
              <div className="text-white/40 text-xs mt-0.5 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '900ms' }}
      >
        <span className="text-white/25 text-xs tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-12 relative overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              height: '40%',
              background: 'linear-gradient(to bottom, #8b5cf6, transparent)',
              animation: 'scrollLine 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
