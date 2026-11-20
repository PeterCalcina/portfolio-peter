import { Component, inject } from '@angular/core';
import { JUMPS, jumpCopy, type Jump } from '../../core/content';
import { Deck } from '../../core/deck';

@Component({
  selector: 'app-route-log',
  templateUrl: './route-log.html',
  styleUrl: './route-log.css',
})
export class RouteLog {
  readonly deck = inject(Deck);
  readonly jumps = JUMPS;

  local(jump: Jump) {
    return jumpCopy(jump, this.deck.lang());
  }
}
