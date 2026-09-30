import { Component, inject } from '@angular/core';
import { JUMPS, jumpCopy } from '../../core/content';
import { Deck } from '../../core/deck';

@Component({
  selector: 'app-route-log',
  templateUrl: './route-log.html',
  styleUrl: './route-log.css',
})
export class RouteLog {
  readonly deck = inject(Deck);
  readonly jumps = JUMPS;

  title(): string {
    return this.deck.copy().logTitleSignal;
  }

  sub(): string {
    return this.deck.copy().logSubSignal;
  }

  local(id: string) {
    const jump = this.jumps.find((j) => j.id === id);
    return jump ? jumpCopy(jump, this.deck.lang()) : null;
  }

  body(id: string): string {
    const local = this.local(id);
    return local?.signal ?? '';
  }
}
