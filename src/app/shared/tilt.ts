import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[tiltCard]',
})
export class TiltCard {
  private readonly reduce =
    typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  @HostListener('mousemove', ['$event'])
  onMove(event: MouseEvent): void {
    if (this.reduce) return;
    const el = event.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const x = (event.clientX - r.left) / r.width - 0.5;
    const y = (event.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
  }

  @HostListener('mouseleave', ['$event'])
  onLeave(event: MouseEvent): void {
    (event.currentTarget as HTMLElement).style.transform = 'rotateY(0) rotateX(0)';
  }
}
