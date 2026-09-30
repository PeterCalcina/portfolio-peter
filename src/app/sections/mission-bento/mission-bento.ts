import { NgClass } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { blurbFor, Layer, metricFor, MISSIONS, missionCopy } from '../core/content';
import { Deck } from '../core/deck';
import { TiltCard } from '../shared/tilt';

@Component({
  selector: 'app-mission-bento',
  imports: [TiltCard, NgClass],
  templateUrl: './mission-bento.html',
  styleUrl: './mission-bento.css',
})
export class MissionBento {
  readonly deck = inject(Deck);
  readonly missions = MISSIONS;
  readonly openId = signal<string | null>(null);
  readonly layer = signal<Layer>('front');
  readonly layers: Layer[] = ['front', 'back', 'infra'];

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

  metrics(id: string) {
    const local = this.local(id);
    return local?.metrics.map((m) => metricFor(m)) ?? [];
  }

  layerText(): string {
    const id = this.openId();
    const mission = this.missions.find((m) => m.id === id);
    if (!mission) return '';
    return mission.layers[this.layer()][this.deck.lang()];
  }

  open(id: string): void {
    this.openId.set(id);
    this.layer.set('front');
  }

  close(): void {
    this.openId.set(null);
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.close();
  }
}
