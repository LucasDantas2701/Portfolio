import { ChangeDetectionStrategy, Component } from "@angular/core"
import { RevealDirective } from "../directives/reveal.directive"

@Component({
  selector: "app-currently",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section id="atualmente" class="relative px-6 py-32"><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_50%,rgba(139,92,246,.05),transparent_70%)]"></div><div class="relative mx-auto max-w-6xl"><div appReveal class="reveal mb-20 text-center"><span class="inline-block rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-mono text-xs font-medium text-amber-300">05 — Atualmente</span><h2 class="mt-3 font-bold tracking-[-.02em] [font-size:clamp(2rem,4vw,2.8rem)]">O que estou <span class="bg-gradient-to-br from-amber-300 to-pink-400 bg-clip-text text-transparent">fazendo agora</span></h2><p class="mx-auto mt-4 max-w-md leading-relaxed text-white/45">Projetos, estudos e tópicos que estão no meu radar neste momento.</p></div><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">@for(item of items;track item.title;let i=$index){<article appReveal [revealThreshold]=".1" class="reveal-scale card-hover rounded-2xl border border-white/[.06] bg-white/[.02] p-5" [style.transition-delay.ms]="i*80"><div class="flex items-start gap-4"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-mono text-xs font-bold" [style.background]="item.color+'15'" [style.border-color]="item.color+'25'" [style.color]="item.color">{{item.icon}}</div><div><div class="mb-1 font-mono text-xs font-medium" [style.color]="item.color">{{item.label}}</div><div class="mb-1 text-sm font-semibold leading-snug text-white/85">{{item.title}}</div><div class="text-xs text-white/40">{{item.sub}}</div></div></div></article>}</div></div></section>`,
})
export class CurrentlyComponent {
  readonly items = [
    {
      icon: "ED",
      label: "Estudando",
      title: "Distributed Systems & Consensus Algorithms",
      sub: "DDIA + papers do Google Spanner",
      color: "#3b82f6",
    },
    {
      icon: "DV",
      label: "Construindo",
      title: "Synapse AI v2",
      sub: "Code review com LLMs multi-agente",
      color: "#8b5cf6",
    },
    {
      icon: "EX",
      label: "Explorando",
      title: "Rust para sistemas embarcados",
      sub: "Projetos com ESP32 e Raspberry Pi",
      color: "#10b981",
    },
    {
      icon: "WR",
      label: "Escrevendo",
      title: "Blog sobre arquitetura de software",
      sub: "Artigos sobre DDD, CQRS e Event Sourcing",
      color: "#f59e0b",
    },
    {
      icon: "CO",
      label: "Participando",
      title: "Dev Talks São Paulo",
      sub: "Comunidade de engenheiros de software",
      color: "#ec4899",
    },
    {
      icon: "IA",
      label: "Interesse",
      title: "IA aplicada a ferramentas para devs",
      sub: "LLMs, Code Intelligence, AgentOps",
      color: "#a78bfa",
    },
  ]
}
