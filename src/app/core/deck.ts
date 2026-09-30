import { computed, Injectable, signal } from '@angular/core';
import { COPY } from './content';

export type Lang = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class Deck {
  readonly lang = signal<Lang>('es');
  readonly copy = computed(() => COPY[this.lang()]);

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}
