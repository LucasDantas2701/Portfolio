import { useState, useEffect } from 'react';
import { profile } from '../data/profile';

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Jornada', href: '#jornada' },
  { label: 'Contato', href: '#contato' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(9, 11, 17, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            }}
          >
            {profile.initials}
          </span>
          <span className="font-semibold text-sm tracking-wide text-white/90 group-hover:text-white transition-colors">
            {profile.brand}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
            }}
          >
            Fale comigo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`block h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden`}
        style={{
          maxHeight: open ? '300px' : '0',
          background: 'rgba(9, 11, 17, 0.95)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4 border-t border-white/05">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/60 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
