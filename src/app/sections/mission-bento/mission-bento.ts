import { Component, inject } from '@angular/core';
import { blurbFor, MISSIONS, missionCopy } from '../../core/content';
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

  title(): string {
    return this.deck.copy().missionsTitleSignal;
  }

  sub(): string {
    return this.deck.copy().missionsSubSignal;
  }

  local(id: string) {
    const mission = this.missions.find((m) => m.id === id);
    return mission ? missionCopy(mission, this.deck.lang()) : null;
  }

  blurb(id: string) {
    const mission = this.missions.find((m) => m.id === id);
    return mission ? blurbFor(mission, this.deck.lang()) : '';
  }
}
