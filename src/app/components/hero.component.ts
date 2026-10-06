import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from "@angular/core"

@Component({
  selector: "app-hero",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div class="pointer-events-none absolute inset-0"><div class="orb absolute -left-52 -top-24 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,.12),transparent_70%)] blur-[40px]"></div><div class="orb absolute -right-36 top-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.12),transparent_70%)] blur-[40px] [animation-delay:2s]"></div><div class="absolute bottom-20 left-[30%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.08),transparent_70%)] blur-[30px]"></div></div>
      <div class="hero-grid pointer-events-none absolute inset-0"></div>
      <div class="relative z-10 max-w-4xl text-center">
        <div class="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-500 transition-all duration-700" [class.opacity-0]="!mounted" [class.translate-y-4]="!mounted"><span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>Disponível para novos projetos</div>
        <h1 class="mb-4 font-bold leading-none tracking-[-.03em] transition-all delay-200 duration-700 [font-size:clamp(3rem,8vw,6.5rem)]" [class.opacity-0]="!mounted" [class.translate-y-6]="!mounted">Alex Santos</h1>
        <div class="mb-6 flex items-center justify-center transition-all delay-[350ms] duration-700" [class.opacity-0]="!mounted" [class.translate-y-6]="!mounted"><span class="min-w-[280px] bg-gradient-to-br from-blue-400 to-violet-400 bg-clip-text text-center font-semibold text-transparent [font-size:clamp(1.1rem,2.5vw,1.6rem)]">{{ displayed }}<span class="cursor-blink ml-0.5 inline-block h-6 w-0.5 align-middle bg-violet-400"></span></span></div>
        <p class="mx-auto mb-12 max-w-lg font-light leading-relaxed text-white/50 transition-all delay-[450ms] duration-700 [font-size:clamp(1rem,1.8vw,1.15rem)]" [class.opacity-0]="!mounted" [class.translate-y-6]="!mounted">Transformo ideias complexas em produtos digitais elegantes — do conceito ao deploy, com código limpo e experiências que importam.</p>
        <div class="flex flex-wrap justify-center gap-4 transition-all delay-[550ms] duration-700" [class.opacity-0]="!mounted" [class.translate-y-6]="!mounted"><a href="#projetos" class="group flex items-center gap-2 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 px-7 py-3.5 text-sm font-semibold shadow-[0_0_30px_rgba(139,92,246,.35)] transition-transform hover:scale-105">Ver projetos <span class="transition-transform group-hover:translate-x-1">→</span></a><a href="#contato" class="rounded-full border border-white/15 bg-white/[.04] px-7 py-3.5 text-sm font-semibold text-white/80 transition-all hover:scale-105 hover:border-white/30">Entre em contato</a></div>
        <div class="mt-20 flex flex-wrap justify-center gap-8 transition-all delay-700 duration-700" [class.opacity-0]="!mounted" [class.translate-y-6]="!mounted">@for (stat of stats; track stat.label) { <div class="text-center"><div class="bg-gradient-to-br from-blue-400 to-violet-400 bg-clip-text text-2xl font-bold text-transparent">{{ stat.value }}</div><div class="mt-0.5 text-xs font-medium text-white/40">{{ stat.label }}</div></div> }</div>
      </div>
      <div class="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity delay-[900ms] duration-700" [class.opacity-0]="!mounted"><span class="text-xs uppercase tracking-widest text-white/25">Scroll</span><div class="relative h-12 w-px overflow-hidden bg-white/10"><div class="scroll-line absolute top-0 h-2/5 w-full bg-gradient-to-b from-violet-500 to-transparent"></div></div></div>
    </section>`,
  styles: [
    `.hero-grid{background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:60px 60px;mask-image:radial-gradient(ellipse 80% 60% at 50% 50%,black,transparent)} @keyframes scrollLine{from{transform:translateY(-100%)}to{transform:translateY(300%)}} .scroll-line{animation:scrollLine 2s ease-in-out infinite}`,
  ],
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly roles = [
    "Full-Stack Developer",
    "UI/UX Engineer",
    "Tech Lead",
    "Open Source Contributor",
  ]
  readonly stats = [
    { value: "5+", label: "Anos de experiência" },
    { value: "40+", label: "Projetos entregues" },
    { value: "12+", label: "Tecnologias dominadas" },
  ]
  mounted = false
  displayed = ""
  private roleIndex = 0
  private typing = true
  private timer?: ReturnType<typeof setTimeout>
  private readonly cdr = inject(ChangeDetectorRef)
  ngOnInit(): void {
    this.timer = setTimeout(() => {
      this.mounted = true
      this.cdr.markForCheck()
      this.tick()
    }, 100)
  }
  private tick(): void {
    const current = this.roles[this.roleIndex] ?? ""
    let delay = 55
    if (this.typing && this.displayed.length < current.length)
      this.displayed = current.slice(0, this.displayed.length + 1)
    else if (this.typing) {
      this.typing = false
      delay = 2200
    } else if (this.displayed.length) {
      this.displayed = this.displayed.slice(0, -1)
      delay = 28
    } else {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length
      this.typing = true
    }
    this.cdr.markForCheck()
    this.timer = setTimeout(() => this.tick(), delay)
  }
  ngOnDestroy(): void {
    clearTimeout(this.timer)
  }
}
