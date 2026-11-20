export type MissionStatus = 'production' | 'current' | 'playable';

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
  es: { title: string; signal: string; source: string };
  en: { title: string; signal: string; source: string };
}

export const EMAIL = 'peter.calcina1221@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/peter-c12';

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
        'Único desarrollador del stack (front, back, DB, despliegue) y consultor. Armé la infraestructura del sitio web académico y apoyo el ERP.',
      source: 'Rol full-stack + consultoría. Un solo punto técnico para web y sistemas internos.',
    },
    en: {
      title: 'Developer · Smart Step',
      signal:
        'Sole developer across the stack (front, back, DB, deploy) and consultant. Built the academic website infrastructure and support the ERP.',
      source: 'Full-stack role + consulting. One technical owner for web and internal systems.',
    },
  },
  {
    id: 'trauma',
    year: 'Cliente',
    place: 'Cochabamba / Oruro',
    es: {
      title: 'Landing · Trauma Regenerativa',
      signal: 'Sitio público de la clínica: información del equipo médico y contacto. En vivo en traumaregenerativa.com.',
      source: 'Entrega de producto para cliente real. Landing informativa con conversión a contacto.',
    },
    en: {
      title: 'Landing · Trauma Regenerativa',
      signal: 'Public clinic site: medical team info and contact. Live at traumaregenerativa.com.',
      source: 'Delivery for a real client. Informational landing with contact conversion.',
    },
  },
  {
    id: 'univalle',
    year: '2019 — 2024',
    place: 'Bolivia',
    es: {
      title: 'Ingeniería de Sistemas · Univalle',
      signal: 'Formación en Universidad del Valle. Base para el trabajo full-stack que hago hoy.',
      source: 'Ingeniería de Sistemas, Universidad del Valle (BO), 2019–2024.',
    },
    en: {
      title: 'Systems Engineering · Univalle',
      signal: 'Degree path at Universidad del Valle. Foundation for the full-stack work I do now.',
      source: 'Systems Engineering, Universidad del Valle (BO), 2019–2024.',
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
    role: 'Desarrollador web',
    name: 'Peter Calcina',
    status: 'Cochabamba, Bolivia',
    signalLead: 'Diseño interfaces claras. Construyo sistemas sólidos.',
    sourceLead: '',
    signalBody:
      'Me encargo de que tu sitio o sistema no solo se vea profesional, sino que funcione rápido, sin errores y sea fácil de usar para tus clientes y tu equipo.',
    sourceBody: '',
    termTitle: 'consola',
    termHint: 'escribe help',
    missionsKicker: 'PROYECTOS',
    missionsTitleSignal: 'Mis proyectos',
    missionsTitleSource: '',
    missionsSubSignal:
      'Proyectos en producción y experimentos interactivos. Explora el resultado en vivo.',
    missionsSubSource: '',
    openLive: 'Ver sitio',
    labKicker: 'PRUEBA ESTO',
    labTitleSignal: 'Escribe y mira qué pasa',
    labTitleSource: '',
    labSubSignal:
      'Escribe. Lo de la izquierda cambia ya. Lo de la derecha espera a que pares. Así un sitio no se satura.',
    labSubSource: '',
    labInput: 'Escribe un query',
    labDelay: 'debounce',
    labRaw: 'crudo',
    labSettled: 'asentado',
    labKeys: 'teclas',
    labEmits: 'emits',
    logKicker: 'EXPERIENCIA',
    logTitleSignal: 'Experiencia',
    logTitleSource: '',
    logSubSignal: 'Trabajo actual, un cliente en vivo y la formación. Sin relleno.',
    logSubSource: '',
    txKicker: 'CONTACTO',
    txTitleSignal: 'Hablemos',
    txTitleSource: '',
    txSubSignal: 'Escribe como en un chat. Enter abre tu correo. O copia el email en un click.',
    txSubSource: '',
    txPlaceholder: 'Cuéntame qué necesitas, para cuándo y cualquier límite…',
    txSend: 'enviar',
    txCopy: 'copiar email',
    txCopied: 'copiado',
    txSystem: 'listo · peter.calcina1221@gmail.com',
    footer: 'PETER CALCINA',
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
    role: 'Web developer',
    name: 'Peter Calcina',
    status: 'Cochabamba, Bolivia',
    signalLead: 'I design clear interfaces. I build solid systems.',
    sourceLead: '',
    signalBody:
      'I make sure your site or system does not just look professional — it runs fast, stays reliable, and is easy to use for your clients and your team.',
    sourceBody: '',
    termTitle: 'console',
    termHint: 'type help',
    missionsKicker: 'PROJECTS',
    missionsTitleSignal: 'My projects',
    missionsTitleSource: '',
    missionsSubSignal:
      'Production projects and interactive experiments. Explore the live result.',
    missionsSubSource: '',
    openLive: 'Open site',
    labKicker: 'TRY THIS',
    labTitleSignal: 'Type and watch what happens',
    labTitleSource: '',
    labSubSignal:
      'Type. The left side updates now. The right side waits until you pause. That is how a site stays calm.',
    labSubSource: '',
    labInput: 'Type a query',
    labDelay: 'debounce',
    labRaw: 'raw',
    labSettled: 'settled',
    labKeys: 'keys',
    labEmits: 'emits',
    logKicker: 'EXPERIENCE',
    logTitleSignal: 'Experience',
    logTitleSource: '',
    logSubSignal: 'Current role, one live client, and school. No filler.',
    logSubSource: '',
    txKicker: 'CONTACT',
    txTitleSignal: 'Let’s talk',
    txTitleSource: '',
    txSubSignal: 'Write it like chat. Enter opens your mail app. Or copy the email in one click.',
    txSubSource: '',
    txPlaceholder: 'What you need, when you need it, any limit…',
    txSend: 'send',
    txCopy: 'copy email',
    txCopied: 'copied',
    txSystem: 'ready · peter.calcina1221@gmail.com',
    footer: 'PETER CALCINA',
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
};

export function missionCopy(mission: Mission, lang: 'es' | 'en') {
  return lang === 'es' ? mission.es : mission.en;
}

export function jumpCopy(jump: Jump, lang: 'es' | 'en') {
  return lang === 'es' ? jump.es : jump.en;
}

export function blurbFor(mission: Mission, lang: 'es' | 'en') {
  return missionCopy(mission, lang).blurb;
}
