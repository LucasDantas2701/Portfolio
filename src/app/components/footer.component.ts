import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
  selector: "app-footer",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<footer class="border-t border-white/[.05] px-6 py-10"><div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-bold">AS</span><span class="text-sm font-medium text-white/50">alexsantos.dev</span></div><p class="order-last font-mono text-xs text-white/30 sm:order-none">© {{year}} Alex Santos · Feito com Angular</p><div class="flex items-center gap-3">@for(social of socials;track social.name){<a [href]="social.href" [title]="social.name" class="flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/[.07] bg-white/[.04] px-2 text-xs text-white/40 transition-all hover:scale-110 hover:text-white">{{social.label}}</a>}</div></div></footer>`,
})
export class FooterComponent {
  readonly year = new Date().getFullYear()
  readonly socials = [
    { name: "GitHub", label: "GH", href: "#" },
    { name: "LinkedIn", label: "IN", href: "#" },
    { name: "Twitter / X", label: "X", href: "#" },
    { name: "Email", label: "Mail", href: "mailto:alex@alexsantos.dev" },
  ]
}
