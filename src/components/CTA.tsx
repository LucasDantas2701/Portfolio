import { useReveal } from '../hooks/useReveal';

export default function CTA() {
  const ref = useReveal(0.2) as React.RefObject<HTMLDivElement>;

  return (
    <section id="contato" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref as any}
          className="reveal-scale relative rounded-3xl overflow-hidden p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.15) 50%, rgba(16,185,129,0.08) 100%)',
            border: '1px solid rgba(139,92,246,0.2)',
          }}
        >
          {/* Background orbs inside card */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute rounded-full"
              style={{
                width: '300px',
                height: '300px',
                top: '-100px',
                left: '-50px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: '250px',
                height: '250px',
                bottom: '-80px',
                right: '-30px',
                background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse at center, black, transparent)',
            }}
          />

          <div className="relative z-10">
            {/* Status */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium mb-8"
              style={{
                background: 'rgba(16,185,129,0.08)',
                borderColor: 'rgba(16,185,129,0.25)',
                color: '#10b981',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Disponível para freelance e full-time
            </div>

            <h2
              className="font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
            >
              Vamos construir algo{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #34d399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                incrível
              </span>
            </h2>

            <p className="text-white/55 max-w-xl mx-auto leading-relaxed mb-10">
              Tenho interesse em projetos desafiadores, oportunidades de tech lead e colaborações
              com times de alta performance. Se você tem um problema complexo, quero ouvir.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a
                href="mailto:alex@alexsantos.dev"
                className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)',
                }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                alex@alexsantos.dev
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold border transition-all duration-300 hover:scale-105 hover:border-white/25"
                style={{
                  borderColor: 'rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                Agendar conversa
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Quick info */}
            <div
              className="flex flex-wrap gap-6 justify-center"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '32px' }}
            >
              {[
                { icon: '⚡', text: 'Resposta em até 24h' },
                { icon: '🌎', text: 'Trabalho 100% remoto' },
                { icon: '🕐', text: 'GMT-3 · São Paulo' },
              ].map((info) => (
                <div key={info.text} className="flex items-center gap-2 text-sm text-white/45">
                  <span>{info.icon}</span>
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
