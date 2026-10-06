import { ChangeDetectionStrategy, Component } from "@angular/core"
import { RevealDirective } from "../directives/reveal.directive"

@Component({
  selector: "app-cta",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section id="contato" class="px-6 py-32"><div class="mx-auto max-w-4xl"><div appReveal [revealThreshold]=".2" class="reveal-scale relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-blue-500/10 via-violet-500/15 to-emerald-500/[.08] p-8 text-center sm:p-12"><div class="pointer-events-none absolute inset-0 overflow-hidden"><div class="absolute -left-12 -top-24 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,.15),transparent_70%)] blur-[30px]"></div><div class="absolute -bottom-20 -right-8 h-[250px] w-[250px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.12),transparent_70%)] blur-[30px]"></div></div><div class="relative z-10"><div class="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[.08] px-4 py-1.5 text-xs font-medium text-emerald-500"><span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>Disponível para freelance e full-time</div><h2 class="mb-4 font-bold tracking-[-.03em] [font-size:clamp(2rem,5vw,3.5rem)]">Vamos construir algo <span class="gradient-text">incrível</span></h2><p class="mx-auto mb-10 max-w-xl leading-relaxed text-white/55">Tenho interesse em projetos desafiadores, oportunidades de tech lead e colaborações com times de alta performance. Se você tem um problema complexo, quero ouvir.</p><div class="mb-12 flex flex-wrap justify-center gap-4"><a href="mailto:alex@alexsantos.dev" class="rounded-full bg-gradient-to-br from-blue-500 to-violet-500 px-8 py-4 font-semibold shadow-[0_0_40px_rgba(139,92,246,.4)] transition-transform hover:scale-105">alex&#64;alexsantos.dev</a><a href="#" class="rounded-full border border-white/15 bg-white/[.05] px-8 py-4 font-semibold text-white/80 transition-all hover:scale-105 hover:border-white/25">Agendar conversa</a></div><div class="flex flex-wrap justify-center gap-6 border-t border-white/[.06] pt-8">@for(info of infos;track info){<div class="flex items-center gap-2 text-sm text-white/45"><span class="h-1.5 w-1.5 rounded-full bg-violet-400"></span>{{info}}</div>}</div></div></div></div></section>`,
})
export class CtaComponent {
  readonly infos = [
    "Resposta em até 24h",
    "Trabalho 100% remoto",
    "GMT-3 · São Paulo",
  ]
}
