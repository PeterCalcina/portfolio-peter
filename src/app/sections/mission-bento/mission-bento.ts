import { Component, inject } from '@angular/core';
import { MISSIONS, missionCopy, type Mission } from '../../core/content';
import { Deck } from '../../core/deck';
import { TiltCard } from '../../shared/tilt';

@Component({
  selector: 'app-mission-bento',
  imports: [TiltCard],
  templateUrl: './mission-bento.html',
  styleUrl: './mission-bento.css',
})
export class MissionBento {
  readonly deck = inject(Deck);
  readonly missions = MISSIONS;

  local(mission: Mission) {
    return missionCopy(mission, this.deck.lang());
  }
}
