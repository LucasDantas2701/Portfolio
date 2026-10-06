import { ChangeDetectionStrategy, Component } from "@angular/core"
import { AboutComponent } from "./components/about.component"
import { CtaComponent } from "./components/cta.component"
import { CurrentlyComponent } from "./components/currently.component"
import { FooterComponent } from "./components/footer.component"
import { HeroComponent } from "./components/hero.component"
import { NavComponent } from "./components/nav.component"
import { ProjectsComponent } from "./components/projects.component"
import { SkillsComponent } from "./components/skills.component"
import { TimelineComponent } from "./components/timeline.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    TimelineComponent,
    CurrentlyComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `<main class="min-h-screen bg-[#090b11]"><app-nav /><app-hero /><app-about /><app-skills /><app-projects /><app-timeline /><app-currently /><app-cta /><app-footer /></main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
