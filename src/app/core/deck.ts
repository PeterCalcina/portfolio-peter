import { computed, Injectable, signal } from '@angular/core';
import { COPY, type Lang } from './content';

export type { Lang };

@Injectable({ providedIn: 'root' })
export class Deck {
  readonly lang = signal<Lang>('es');
  readonly copy = computed(() => COPY[this.lang()]);

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}
