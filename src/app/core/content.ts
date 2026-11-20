export type MissionStatus = 'production' | 'current' | 'playable';
export type Lang = 'es' | 'en';

export interface Mission {
  id: string;
  code: string;
  status: MissionStatus;
  liveUrl?: string;
  preview: 'clinic' | 'erp' | 'game' | 'party';
  tech: string[];
  es: {
    title: string;
    blurb: string;
    statusLabel: string;
  };
  en: {
    title: string;
    blurb: string;
    statusLabel: string;
  };
}

export interface Jump {
  id: string;
  year: string;
  place?: string;
  es: { title: string; signal: string };
  en: { title: string; signal: string };
}

export const EMAIL = 'peter.calcina1221@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/peter-c12';
export const WHATSAPP = '+591 68451539';
export const WHATSAPP_URL = 'https://wa.me/59168451539';

export const MISSIONS: Mission[] = [
  {
    id: 'smartstep',
    code: 'SS-02',
    status: 'current',
    preview: 'erp',
    tech: ['React', 'Tailwind', 'NestJS', 'Supabase', 'Prisma'],
    es: {
      title: 'Smart Step',
      blurb:
        'Desarrollo integral del portal académico y del ERP: arquitectura frontend y backend, base de datos, despliegue y consultoría operativa.',
      statusLabel: 'Actual',
    },
    en: {
      title: 'Smart Step',
      blurb:
        'End-to-end development of the academic portal and ERP: frontend and backend architecture, database, deploy, and operational consulting.',
      statusLabel: 'Current',
    },
  },
  {
    id: 'trauma',
    code: 'TR-01',
    status: 'production',
    liveUrl: 'https://www.traumaregenerativa.com',
    preview: 'clinic',
    tech: ['Astro', 'CSS'],
    es: {
      title: 'Trauma Regenerativa',
      blurb:
        'Landing page para una clínica de traumatología y medicina regenerativa. Presenta especialistas, sedes y canales de contacto de forma clara.',
      statusLabel: 'En producción',
    },
    en: {
      title: 'Trauma Regenerativa',
      blurb:
        'Landing page for a trauma and regenerative medicine clinic. Presents specialists, locations, and contact channels clearly.',
      statusLabel: 'In production',
    },
  },
  {
    id: 'impostor',
    code: 'GM-03',
    status: 'playable',
    liveUrl: 'https://mds-impostor-game.vercel.app',
    preview: 'game',
    tech: ['Astro', 'React', 'CSS'],
    es: {
      title: 'Impostor',
      blurb:
        'Juego social para grupos presenciales. Configura participantes, selecciona categoría y pasa el dispositivo por turnos.',
      statusLabel: 'Demo jugable',
    },
    en: {
      title: 'Impostor',
      blurb:
        'A social game for in-person groups. Set players, pick a category, and pass the device in turns.',
      statusLabel: 'Playable demo',
    },
  },
  {
    id: 'funnyzone',
    code: 'GM-04',
    status: 'playable',
    liveUrl: 'https://funnygamezone.netlify.app',
    preview: 'party',
    tech: ['HTML', 'JS', 'CSS'],
    es: {
      title: 'Funny Game Zone',
      blurb:
        'Hub de dinámicas y minijuegos para reuniones y fiestas. Entra al navegador, elige una partida y empieza al instante.',
      statusLabel: 'Demo jugable',
    },
    en: {
      title: 'Funny Game Zone',
      blurb:
        'A hub of party games and icebreakers. Open the browser, pick a game, and start right away.',
      statusLabel: 'Playable demo',
    },
  },
];

export const JUMPS: Jump[] = [
  {
    id: 'smart',
    year: 'Actual',
    place: 'Cochabamba, Bolivia',
    es: {
      title: 'Desarrollador · Smart Step',
      signal:
        'Responsable del desarrollo integral de la plataforma digital: diseño y construcción del sitio web académico y evolución continua del sistema interno (ERP).',
    },
    en: {
      title: 'Developer · Smart Step',
      signal:
        'Responsible for the full digital platform: design and build of the academic website and ongoing evolution of the internal system (ERP).',
    },
  },
  {
    id: 'trauma',
    year: 'Cliente',
    place: 'Cochabamba / Oruro',
    es: {
      title: 'Diseño y Desarrollo Web · Trauma Regenerativa',
      signal:
        'Creación del sitio web oficial de la clínica para presentar a sus especialistas, servicios y canales de atención en Cochabamba y Oruro.',
    },
    en: {
      title: 'Web Design & Development · Trauma Regenerativa',
      signal:
        'Built the clinic’s official website to present specialists, services, and contact channels in Cochabamba and Oruro.',
    },
  },
  {
    id: 'univalle',
    year: '2019 — 2024',
    place: 'Bolivia',
    es: {
      title: 'Ingeniería de Sistemas · Univalle',
      signal:
        'Formación en ingeniería de software, diseño de sistemas y arquitectura de datos en la Universidad del Valle.',
    },
    en: {
      title: 'Systems Engineering · Univalle',
      signal:
        'Training in software engineering, systems design, and data architecture at Universidad del Valle.',
    },
  },
];

export const COPY = {
  es: {
    skip: 'Saltar al inicio',
    brand: 'PORTAFOLIO',
    nav: [
      { href: '#deck', label: 'Inicio' },
      { href: '#proyectos', label: 'Proyectos' },
      { href: '#lab', label: 'Probar' },
      { href: '#experiencia', label: 'Experiencia' },
      { href: '#transmit', label: 'Contacto' },
    ],
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    role: 'Desarrollador web',
    name: 'Peter Calcina',
    status: 'Cochabamba, Bolivia',
    lead: 'Diseño interfaces claras. Construyo sistemas sólidos.',
    body: 'Me encargo de que tu sitio o sistema no solo se vea profesional, sino que funcione rápido, sin errores y sea fácil de usar para tus clientes y tu equipo.',
    termTitle: 'consola',
    termHint: 'escribe help',
    missionsKicker: 'PROYECTOS',
    missionsTitle: 'Mis proyectos',
    missionsSub:
      'Proyectos en producción y experimentos interactivos. Explora el resultado en vivo.',
    openLive: 'Ver sitio',
    labKicker: 'PRUEBA ESTO',
    labTitle: 'Escribe y mira qué pasa',
    labSub:
      'Escribe. Lo de la izquierda cambia ya. Lo de la derecha espera a que pares. Así un sitio no se satura.',
    labInput: 'Escribe un query',
    labDelay: 'debounce',
    labRaw: 'crudo',
    labSettled: 'asentado',
    labKeys: 'teclas',
    labEmits: 'emits',
    logTitle: 'Experiencia',
    logSub: 'Trayectoria profesional, proyectos en producción y formación académica.',
    txKicker: 'CONTACTO',
    txTitle: 'Contáctame',
    txSub:
      'Cuéntame tu idea como en un chat; al enviar se abrirá tu correo listo para mandar. Si prefieres, copia mi dirección con un clic.',
    txPlaceholder: 'Ej: Necesito una web para mi negocio o un sistema a medida para...',
    txSend: 'enviar',
    txCopy: 'copiar email',
    txCopied: 'copiado',
    txSystem: 'Disponible para proyectos · peter.calcina1221@gmail.com',
    txWhatsapp: 'WhatsApp',
    footer: '© 2026 Peter Calcina. Todos los derechos reservados.',
    help: [
      'whoami        quién soy',
      'stack         herramientas',
      'proyectos     mis proyectos',
      'lab           prueba la demo',
      'experiencia   trabajo',
      'contacto      escribirme',
      'clear         limpiar',
    ],
    whoami: [
      'Peter Calcina',
      'Desarrollador web',
      'Cochabamba, Bolivia',
      'Angular · React · NestJS',
    ],
    stack: ['Angular', 'TypeScript', 'React', 'NestJS', 'Tailwind', 'Supabase'],
    focus: 'foco: pantallas + lo que hay detrás. prueba proyectos o experiencia.',
    unknown: 'comando no hallado. prueba help.',
    jumped: 'abriendo',
  },
  en: {
    skip: 'Skip to the start',
    brand: 'PORTFOLIO',
    nav: [
      { href: '#deck', label: 'Home' },
      { href: '#proyectos', label: 'Projects' },
      { href: '#lab', label: 'Try it' },
      { href: '#experiencia', label: 'Experience' },
      { href: '#transmit', label: 'Contact' },
    ],
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    role: 'Web developer',
    name: 'Peter Calcina',
    status: 'Cochabamba, Bolivia',
    lead: 'I design clear interfaces. I build solid systems.',
    body: 'I make sure your site or system does not just look professional — it runs fast, stays reliable, and is easy to use for your clients and your team.',
    termTitle: 'console',
    termHint: 'type help',
    missionsKicker: 'PROJECTS',
    missionsTitle: 'My projects',
    missionsSub: 'Production projects and interactive experiments. Explore the live result.',
    openLive: 'Open site',
    labKicker: 'TRY THIS',
    labTitle: 'Type and watch what happens',
    labSub:
      'Type. The left side updates now. The right side waits until you pause. That is how a site stays calm.',
    labInput: 'Type a query',
    labDelay: 'debounce',
    labRaw: 'raw',
    labSettled: 'settled',
    labKeys: 'keys',
    labEmits: 'emits',
    logTitle: 'Experience',
    logSub: 'Professional path, production projects, and academic training.',
    txKicker: 'CONTACT',
    txTitle: 'Contact me',
    txSub:
      'Tell me your idea like a chat; when you send, your email app opens ready to go. Or copy my address in one click.',
    txPlaceholder: 'Ex: I need a website for my business or a custom system for...',
    txSend: 'send',
    txCopy: 'copy email',
    txCopied: 'copied',
    txSystem: 'Available for projects · peter.calcina1221@gmail.com',
    txWhatsapp: 'WhatsApp',
    footer: '© 2026 Peter Calcina. All rights reserved.',
    help: [
      'whoami        who I am',
      'stack         tools',
      'projects      my projects',
      'lab           try the demo',
      'experience    work',
      'contact       write me',
      'clear         wipe',
    ],
    whoami: [
      'Peter Calcina',
      'Web developer',
      'Cochabamba, Bolivia',
      'Angular · React · NestJS',
    ],
    stack: ['Angular', 'TypeScript', 'React', 'NestJS', 'Tailwind', 'Supabase'],
    focus: 'focus: screens + what sits behind them. try projects or experience.',
    unknown: 'command not found. try help.',
    jumped: 'opening',
  },
} as const;

export function missionCopy(mission: Mission, lang: Lang) {
  return lang === 'es' ? mission.es : mission.en;
}

export function jumpCopy(jump: Jump, lang: Lang) {
  return lang === 'es' ? jump.es : jump.en;
}
