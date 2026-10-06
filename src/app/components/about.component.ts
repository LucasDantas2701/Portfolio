import { ChangeDetectionStrategy, Component } from "@angular/core"
import { RevealDirective } from "../directives/reveal.directive"

@Component({
  selector: "app-about",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section id="sobre" class="px-6 py-32"><div class="mx-auto max-w-6xl"><div class="grid items-center gap-16 md:grid-cols-2">
  <div appReveal [revealThreshold]=".1" class="reveal-left relative"><div class="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl border border-white/[.06] bg-gradient-to-br from-[#131720] to-[#0e1119] md:mx-0"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&auto=format" alt="Alex Santos" class="h-full w-full object-cover opacity-80"><div class="absolute inset-0 bg-gradient-to-t from-[#090b11]/80 to-transparent"></div><div class="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-xl border border-white/10 bg-[#090b11]/80 p-3 backdrop-blur-xl"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 font-mono">&lt;/&gt;</div><div><div class="text-xs font-semibold text-white/90">5+ anos de código</div><div class="font-mono text-xs text-white/40">São Paulo, BR → Remote</div></div></div></div><div class="absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15"></div><div class="absolute -bottom-4 -left-4 -z-10 h-16 w-16 rounded-xl border border-emerald-500/20 bg-emerald-500/10"></div></div>
  <div appReveal class="reveal"><span class="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-xs font-medium text-blue-400">01 — Sobre</span><h2 class="mb-6 mt-6 font-bold leading-tight tracking-[-.02em] [font-size:clamp(2rem,4vw,2.8rem)]">Engenheiro que <span class="gradient-text-blue-purple">pensa em produto</span></h2><div class="space-y-4 leading-relaxed text-white/60"><p>Olá! Sou Alex Santos, desenvolvedor full-stack apaixonado por criar experiências digitais que combinam performance técnica com design intuitivo. Atuo desde 2019 no ecossistema JavaScript/TypeScript, com foco em React, Node.js e arquiteturas cloud-native.</p><p>Minha abordagem vai além do código: entendo o negócio, questiono os requisitos e entrego soluções que realmente movem o ponteiro. Já contribuí para produtos com milhões de usuários e liderado times de até 8 pessoas.</p><p>Fora do trabalho, contribuo para open source, escrevo sobre engenharia de software e experimento com IA aplicada a ferramentas para devs.</p></div><div class="mt-8 flex flex-wrap gap-2">@for(tag of tags; track tag){<span class="rounded-lg border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs font-medium text-white/65">{{tag}}</span>}</div><div class="mt-8 flex gap-4"><a href="#" class="text-sm font-medium text-white/70 transition-colors hover:text-white">GitHub ↗</a><a href="#" class="text-sm font-medium text-white/70 transition-colors hover:text-white">LinkedIn ↗</a></div></div>
</div></div></section>`,
})
export class AboutComponent {
  readonly tags = [
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
    "PostgreSQL",
    "System Design",
  ]
}
