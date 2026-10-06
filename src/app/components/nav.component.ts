import { ChangeDetectionStrategy, Component, HostListener } from "@angular/core"

@Component({
  selector: "app-nav",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="fixed inset-x-0 top-0 z-50 transition-all duration-500" [style.background]="scrolled ? 'rgba(9,11,17,.85)' : 'transparent'" [style.backdrop-filter]="scrolled ? 'blur(20px)' : 'none'" [style.border-bottom]="scrolled ? '1px solid rgba(255,255,255,.06)' : 'none'">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" class="group flex items-center gap-2"><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-bold">AS</span><span class="text-sm font-semibold tracking-wide text-white/90 transition-colors group-hover:text-white">alexsantos.dev</span></a>
        <div class="hidden items-center gap-8 md:flex">
          @for (link of links; track link.href) { <a [href]="link.href" class="text-sm font-medium text-white/50 transition-colors hover:text-white">{{ link.label }}</a> }
          <a href="#contato" class="rounded-full bg-gradient-to-br from-blue-500 to-violet-500 px-4 py-1.5 text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,.3)] transition-transform hover:scale-105">Hire me</a>
        </div>
        <button type="button" class="text-white/70 transition-colors hover:text-white md:hidden" (click)="open = !open" aria-label="Alternar menu" [attr.aria-expanded]="open">
          <span class="flex w-5 flex-col gap-1.5"><span class="block h-px bg-current transition-all" [class.translate-y-2]="open" [class.rotate-45]="open"></span><span class="block h-px bg-current transition-all" [class.opacity-0]="open"></span><span class="block h-px bg-current transition-all" [class.-translate-y-2]="open" [class.-rotate-45]="open"></span></span>
        </button>
      </div>
      <div class="overflow-hidden bg-[rgba(9,11,17,.95)] backdrop-blur-xl transition-all duration-300 md:hidden" [style.max-height]="open ? '300px' : '0'">
        <div class="flex flex-col gap-4 border-t border-white/5 px-6 py-4">@for (link of links; track link.href) { <a [href]="link.href" (click)="open = false" class="text-sm font-medium text-white/60 transition-colors hover:text-white">{{ link.label }}</a> }</div>
      </div>
    </nav>`,
})
export class NavComponent {
  readonly links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Projetos", href: "#projetos" },
    { label: "Jornada", href: "#jornada" },
    { label: "Contato", href: "#contato" },
  ]
  scrolled = false
  open = false
  @HostListener("window:scroll") onScroll(): void {
    this.scrolled = window.scrollY > 40
  }
}
