import { Component, effect, HostListener, inject, signal } from '@angular/core';
import { Deck } from './core/deck';
import { HeroDeck } from './sections/hero-deck/hero-deck';
import { InstrumentLab } from './sections/instrument-lab/instrument-lab';
import { MissionBento } from './sections/mission-bento/mission-bento';
import { RouteLog } from './sections/route-log/route-log';
import { Transmit } from './sections/transmit/transmit';

@Component({
  selector: 'app-root',
  imports: [HeroDeck, MissionBento, InstrumentLab, RouteLog, Transmit],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly deck = inject(Deck);
  readonly menuOpen = signal(false);

  constructor() {
    effect(() => {
      document.documentElement.lang = this.deck.lang();
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeMenu();
  }
}
