import { ChangeDetectionStrategy, Component } from "@angular/core"
import { RevealDirective } from "../directives/reveal.directive"

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section id="habilidades" class="relative px-6 py-32"><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(59,130,246,.04),transparent_70%)]"></div><div class="relative mx-auto max-w-6xl">
<div appReveal class="reveal mb-20 text-center"><span class="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-xs font-medium text-blue-400">02 — Habilidades</span><h2 class="mt-3 font-bold tracking-[-.02em] [font-size:clamp(2rem,4vw,2.8rem)]">Stack & <span class="gradient-text-blue-purple">ferramentas</span></h2><p class="mx-auto mt-4 max-w-lg leading-relaxed text-white/45">Tecnologias que uso no dia a dia para construir produtos sólidos, escaláveis e bonitos.</p></div>
<div class="grid gap-16 lg:grid-cols-2"><div class="stagger grid gap-4 sm:grid-cols-2">@for(cat of categories; track cat.label){<article appReveal [revealThreshold]=".1" class="reveal-scale card-hover rounded-2xl border border-white/[.06] bg-white/[.02] p-5"><div class="mb-4 flex items-center gap-3"><div class="flex h-8 w-8 items-center justify-center rounded-lg border text-sm" [style.background]="cat.color + '20'" [style.border-color]="cat.color + '35'" [style.color]="cat.color">{{cat.icon}}</div><span class="text-sm font-semibold text-white/80">{{cat.label}}</span></div><div class="flex flex-wrap gap-1.5">@for(skill of cat.skills; track skill){<span class="badge-shine rounded-lg border px-2.5 py-1 text-xs font-medium" [style.background]="cat.color + '10'" [style.border-color]="cat.color + '22'" [style.color]="cat.color">{{skill}}</span>}</div></article>}</div>
<div class="space-y-5"><div class="reveal mb-8 font-mono text-xs tracking-widest text-white/50">// nível de domínio</div>@for(skill of featuredSkills; track skill.name; let i=$index){<div appReveal [revealThreshold]=".3" class="reveal" [style.transition-delay.ms]="i*80"><div class="mb-2 flex justify-between"><span class="text-sm font-medium text-white/80">{{skill.name}}</span><span class="font-mono text-xs text-white/40">{{skill.level}}%</span></div><div class="h-1.5 overflow-hidden rounded-full bg-white/[.06]"><div class="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-1000" [style.width.%]="skill.level" [style.transition-delay.ms]="i*80+300"></div></div></div>}</div></div>
<div class="mt-16 border-t border-white/[.05] pt-12"><p class="mb-6 text-center font-mono text-xs uppercase tracking-widest text-white/35">Também trabalhei com</p><div class="flex flex-wrap justify-center gap-2">@for(tool of tools; track tool){<span class="cursor-default rounded-full border border-white/[.07] bg-white/[.03] px-3 py-1.5 text-xs font-medium text-white/50 transition-colors hover:border-white/20">{{tool}}</span>}</div></div>
</div></section>`,
})
export class SkillsComponent {
  readonly categories = [
    {
      label: "Frontend",
      icon: "FE",
      color: "#3b82f6",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "GraphQL",
      ],
    },
    {
      label: "Backend",
      icon: "BE",
      color: "#8b5cf6",
      skills: [
        "Node.js",
        "Fastify",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "REST APIs",
      ],
    },
    {
      label: "Infraestrutura",
      icon: "IF",
      color: "#10b981",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Vercel"],
    },
    {
      label: "Ferramentas",
      icon: "DX",
      color: "#f59e0b",
      skills: ["Git", "Jest", "Vitest", "Figma", "Storybook", "Datadog"],
    },
  ]
  readonly featuredSkills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "AWS & Cloud", level: 80 },
    { name: "System Design", level: 78 },
    { name: "PostgreSQL", level: 82 },
  ]
  readonly tools = [
    "Vue.js",
    "Python",
    "Go",
    "MongoDB",
    "Prisma",
    "tRPC",
    "Stripe",
    "Supabase",
    "Firebase",
    "Cloudflare Workers",
    "Turborepo",
    "Nx",
    "Playwright",
    "Cypress",
  ]
}
