import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { parseCommand } from '../../core/command';
import { Deck } from '../../core/deck';

@Component({
  selector: 'app-hero-deck',
  templateUrl: './hero-deck.html',
  styleUrl: './hero-deck.css',
})
export class HeroDeck {
  readonly deck = inject(Deck);
  readonly lines = signal<string[]>(['peter calcina', '']);
  readonly draft = signal('');
  private history: string[] = [];
  private histIdx = -1;
  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('termInput');

  lead(): string {
    return this.deck.copy().signalLead;
  }

  body(): string {
    return this.deck.copy().signalBody;
  }

  onKey(event: KeyboardEvent): void {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!this.history.length) return;
      this.histIdx = this.histIdx < 0 ? this.history.length - 1 : Math.max(0, this.histIdx - 1);
      this.draft.set(this.history[this.histIdx] ?? '');
      return;
    }
    if (event.key === 'Enter') {
      this.run();
    }
  }

  run(): void {
    const raw = this.draft().trim();
    this.draft.set('');
    this.histIdx = -1;
    if (!raw) return;
    this.history.push(raw);
    const cmd = parseCommand(raw);
    const c = this.deck.copy();
    this.lines.update((ls) => [...ls, `> ${raw}`]);

    if (cmd.kind === 'clear') {
      this.lines.set([]);
      return;
    }
    if (cmd.kind === 'help') {
      this.push(c.help);
      return;
    }
    if (cmd.kind === 'whoami') {
      this.push(c.whoami);
      return;
    }
    if (cmd.kind === 'stack') {
      this.push(c.stack);
      return;
    }
    if (cmd.kind === 'focus') {
      this.push([c.focus]);
      return;
    }
    if (cmd.kind === 'nav') {
      this.push([`${c.jumped} ${cmd.href}`]);
      document.querySelector(cmd.href)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    this.push([c.unknown]);
  }

  focusTerm(): void {
    this.inputEl()?.nativeElement.focus();
  }

  private push(extra: string[]): void {
    this.lines.update((ls) => [...ls, ...extra, '']);
  }
}
