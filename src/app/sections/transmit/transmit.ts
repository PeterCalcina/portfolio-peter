import { Component, inject, signal } from '@angular/core';
import { EMAIL, LINKEDIN } from '../../core/content';
import { Deck } from '../../core/deck';

@Component({
  selector: 'app-transmit',
  templateUrl: './transmit.html',
  styleUrl: './transmit.css',
})
export class Transmit {
  readonly deck = inject(Deck);
  readonly email = EMAIL;
  readonly linkedin = LINKEDIN;
  readonly draft = signal('');
  readonly copied = signal(false);
  readonly thread = signal<string[]>([]);

  title(): string {
    return this.deck.copy().txTitleSignal;
  }

  sub(): string {
    return this.deck.copy().txSubSignal;
  }

  send(): void {
    const text = this.draft().trim();
    if (!text) return;
    this.thread.update((t) => [...t, text]);
    this.draft.set('');
    const subject = encodeURIComponent('Peter Calcina');
    const body = encodeURIComponent(text);
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
  }

  async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
    } catch {
      const el = document.createElement('textarea');
      el.value = this.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      el.remove();
    }
    this.copied.set(true);
    window.setTimeout(() => this.copied.set(false), 1600);
  }
}
