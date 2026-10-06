import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  inject,
} from "@angular/core"

@Directive({ selector: "[appReveal]", standalone: true })
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealThreshold = 0.15
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef)
  private observer?: IntersectionObserver

  ngAfterViewInit(): void {
    if (!("IntersectionObserver" in window)) {
      this.element.nativeElement.classList.add("visible")
      return
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          this.element.nativeElement.classList.add("visible")
          this.observer?.unobserve(this.element.nativeElement)
        }
      },
      { threshold: this.revealThreshold },
    )
    this.observer.observe(this.element.nativeElement)
  }

  ngOnDestroy(): void {
    this.observer?.disconnect()
  }
}
