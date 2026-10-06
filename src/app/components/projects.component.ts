import { ChangeDetectionStrategy, Component } from "@angular/core"
import { RevealDirective } from "../directives/reveal.directive"

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section id="projetos" class="relative px-6 py-32"><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(139,92,246,.05),transparent_70%)]"></div><div class="relative mx-auto max-w-6xl">
<div appReveal class="reveal mb-20 text-center"><span class="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 font-mono text-xs font-medium text-violet-400">03 — Projetos</span><h2 class="mt-3 font-bold tracking-[-.02em] [font-size:clamp(2rem,4vw,2.8rem)]">Trabalhos <span class="gradient-text">selecionados</span></h2><p class="mx-auto mt-4 max-w-lg leading-relaxed text-white/45">Projetos que resolvem problemas reais — da ideia ao produto.</p></div>
<div class="grid gap-6 md:grid-cols-2">@for(project of projects; track project.name; let i=$index){<article appReveal [revealThreshold]=".1" class="reveal-scale card-hover group overflow-hidden rounded-2xl border border-white/[.06] bg-white/[.02]" [style.transition-delay.ms]="i*100"><div class="relative aspect-video overflow-hidden"><img [src]="project.image" [alt]="project.name" class="h-full w-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"><div class="absolute inset-0" [style.background]="'linear-gradient(to bottom,transparent 30%,'+project.color+'20 70%,rgba(9,11,17,.95) 100%)'"></div><span class="absolute left-4 top-4 rounded-full border px-2.5 py-1 text-xs font-semibold backdrop-blur-lg" [style.background]="project.color+'25'" [style.border-color]="project.color+'45'" [style.color]="project.color">{{project.badge}}</span><div class="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100"><a [href]="project.github" class="flex h-8 items-center rounded-lg bg-black/60 px-3 text-xs font-medium backdrop-blur-lg transition-transform hover:scale-105">Código</a><a [href]="project.demo" class="flex h-8 items-center rounded-lg bg-black/60 px-3 text-xs font-medium backdrop-blur-lg transition-transform hover:scale-105">Demo</a></div></div><div class="p-6"><h3 class="mb-2 text-lg font-bold text-white/90">{{project.name}}</h3><p class="mb-4 text-sm leading-relaxed text-white/50">{{project.description}}</p><div class="flex flex-wrap gap-1.5">@for(tag of project.tags;track tag){<span class="rounded-md border px-2 py-1 font-mono text-xs" [style.background]="project.color+'10'" [style.border-color]="project.color+'20'" [style.color]="project.color">{{tag}}</span>}</div></div></article>}</div>
<div class="mt-12 text-center"><a href="#" class="group inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white">Ver todos no GitHub <span class="transition-transform group-hover:translate-x-1">→</span></a></div>
</div></section>`,
})
export class ProjectsComponent {
  readonly projects = [
    {
      name: "Orion Dashboard",
      description:
        "Plataforma de analytics em tempo real para e-commerces. Processa mais de 2M de eventos/dia com latência < 100ms. Inclui módulo de IA para previsão de demanda.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
      color: "#3b82f6",
      github: "#",
      demo: "#",
      badge: "Em produção",
    },
    {
      name: "Flowkit UI",
      description:
        "Design system open source com 60+ componentes React acessíveis, dark mode nativo, e geração automática de tokens via Figma API. +3k stars no GitHub.",
      tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables"],
      image:
        "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&h=500&fit=crop&auto=format",
      color: "#8b5cf6",
      github: "#",
      demo: "#",
      badge: "Open Source",
    },
    {
      name: "Habitat",
      description:
        "App de gerenciamento de hábitos com gamificação, sincronização offline-first e notificações inteligentes. 15k usuários ativos mensais.",
      tags: ["React Native", "Expo", "SQLite", "Node.js", "Push Notifications"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
      color: "#10b981",
      github: "#",
      demo: "#",
      badge: "Mobile",
    },
    {
      name: "Synapse AI",
      description:
        "Ferramenta de code review automatizada com LLMs. Integra com GitHub Actions e analisa PRs com sugestões contextuais. Usada por 200+ times.",
      tags: ["Python", "FastAPI", "OpenAI API", "Docker", "GitHub Apps"],
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop&auto=format",
      color: "#f59e0b",
      github: "#",
      demo: "#",
      badge: "IA",
    },
  ]
}
