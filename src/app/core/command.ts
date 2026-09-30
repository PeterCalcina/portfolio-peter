export type Command =
  | { kind: 'help' }
  | { kind: 'whoami' }
  | { kind: 'stack' }
  | { kind: 'focus' }
  | { kind: 'clear' }
  | { kind: 'nav'; href: string }
  | { kind: 'unknown'; raw: string };

const NAV: Record<string, string> = {
  deck: '#deck',
  inicio: '#deck',
  home: '#deck',
  missions: '#proyectos',
  proyectos: '#proyectos',
  projects: '#proyectos',
  lab: '#lab',
  probar: '#lab',
  log: '#experiencia',
  experiencia: '#experiencia',
  experience: '#experiencia',
  transmit: '#transmit',
  contacto: '#transmit',
  contact: '#transmit',
};

export function parseCommand(raw: string): Command {
  const c = raw.trim().toLowerCase();
  if (!c) return { kind: 'unknown', raw };
  if (c === 'help' || c === '?') return { kind: 'help' };
  if (c === 'whoami') return { kind: 'whoami' };
  if (c === 'stack') return { kind: 'stack' };
  if (c === 'focus') return { kind: 'focus' };
  if (c === 'clear' || c === 'cls') return { kind: 'clear' };
  if (NAV[c]) return { kind: 'nav', href: NAV[c] };
  return { kind: 'unknown', raw };
}
