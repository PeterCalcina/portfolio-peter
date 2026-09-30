import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Deck } from '../../core/deck';

@Component({
  selector: 'app-instrument-lab',
  templateUrl: './instrument-lab.html',
  styleUrl: './instrument-lab.css',
})
export class InstrumentLab implements OnDestroy {
  readonly deck = inject(Deck);
  readonly raw = signal('');
  readonly settled = signal('');
  readonly delay = signal(220);
  readonly keys = signal(0);
  readonly emits = signal(0);
  private timer: ReturnType<typeof setTimeout> | undefined;

  title(): string {
    return this.deck.copy().labTitleSignal;
  }

  sub(): string {
    return this.deck.copy().labSubSignal;
  }

  onType(value: string): void {
    this.raw.set(value);
    this.keys.update((n) => n + 1);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.settled.set(value);
      this.emits.update((n) => n + 1);
    }, this.delay());
  }

  onDelay(value: string): void {
    this.delay.set(Number(value) || 0);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
