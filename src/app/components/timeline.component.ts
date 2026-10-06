import { ChangeDetectionStrategy, Component } from "@angular/core"
import { RevealDirective } from "../directives/reveal.directive"

@Component({
  selector: "app-timeline",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section id="jornada" class="relative px-6 py-32"><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_30%_50%,rgba(59,130,246,.04),transparent_70%)]"></div><div class="relative mx-auto max-w-4xl"><div appReveal class="reveal mb-20 text-center"><span class="inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-400">04 — Jornada</span><h2 class="mt-3 font-bold tracking-[-.02em] [font-size:clamp(2rem,4vw,2.8rem)]">Linha do <span class="bg-gradient-to-br from-emerald-400 to-blue-400 bg-clip-text text-transparent">tempo</span></h2><p class="mt-4 leading-relaxed text-white/45">Da faculdade ao tech lead — 6 anos de crescimento contínuo.</p></div>
<div class="relative"><div class="timeline-line hidden md:block"></div>@for(event of events;track event.title;let i=$index){<div class="relative flex flex-row" [class.md:flex-row-reverse]="i%2===1"><div class="flex-1 pl-10 md:px-12"><article appReveal class="card-hover mb-8 rounded-2xl border border-white/[.06] bg-white/[.02] p-5" [class.reveal-left]="i%2===0" [class.reveal-right]="i%2===1"><div class="mb-2 flex items-center gap-2"><span class="font-mono text-xs" [style.color]="event.color">{{event.year}}</span><span class="h-1 w-1 rounded-full bg-white/20"></span><span class="text-xs uppercase tracking-wider text-white/35">{{event.type}}</span></div><h3 class="mb-2 text-sm font-semibold leading-snug text-white/90">{{event.title}}</h3><p class="text-xs leading-relaxed text-white/50">{{event.desc}}</p></article></div><div class="absolute left-0 flex flex-col items-center md:relative md:left-auto md:w-0"><span class="z-10 mt-[22px] h-3 w-3 rounded-full" [style.background]="event.color" [style.box-shadow]="'0 0 12px '+event.color+'60'"></span></div><div class="hidden flex-1 md:block"></div></div>}</div></div></section>`,
})
export class TimelineComponent {
  readonly events = [
    {
      year: "2024",
      title: "Tech Lead @ Nuvem Digital",
      desc: "Liderança técnica de um time de 6 engenheiros. Arquitetura de plataforma de pagamentos que processa R$50M/mês. Migração para microserviços com zero downtime.",
      type: "Trabalho",
      color: "#3b82f6",
    },
    {
      year: "2023",
      title: "Senior Dev @ Loja Fácil",
      desc: "Desenvolvimento do novo checkout Loja Fácil. Redução de 40% no abandono de carrinho. Stack: React, Node.js, PostgreSQL.",
      type: "Trabalho",
      color: "#8b5cf6",
    },
    {
      year: "2022",
      title: "Lançamento Flowkit UI",
      desc: "Criação e lançamento do design system open source que acumulou 3k+ stars no GitHub em 6 meses.",
      type: "Projeto",
      color: "#10b981",
    },
    {
      year: "2021",
      title: "Mid-level Dev @ Startup XYZ",
      desc: "Desenvolvimento de plataforma SaaS B2B de RH. Responsável pelo módulo de relatórios e integrações com ERPs.",
      type: "Trabalho",
      color: "#8b5cf6",
    },
    {
      year: "2020",
      title: "AWS Certified Solutions Architect",
      desc: "Certificação AWS – Associate e início das especializações em arquitetura cloud e infraestrutura como código.",
      type: "Certificação",
      color: "#f59e0b",
    },
    {
      year: "2019",
      title: "Primeiro emprego — Junior Dev",
      desc: "Desenvolvedor júnior em agência digital. Primeiros projetos reais com React e Node. Aprendizado intenso sobre entrega e deadline.",
      type: "Trabalho",
      color: "#3b82f6",
    },
    {
      year: "2018",
      title: "Bacharel em Ciência da Computação",
      desc: "Formação pela Universidade de São Paulo. TCC sobre otimização de consultas em bancos de dados distribuídos.",
      type: "Formação",
      color: "#a78bfa",
    },
  ]
}
