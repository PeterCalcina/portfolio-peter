export type Layer = 'front' | 'back' | 'infra';

export interface Mission {
  id: string;
  code: string;
  year: string;
  href?: string;
  preview: 'deck' | 'lab' | 'work';
  layers: Record<Layer, { es: string; en: string }>;
  es: {
    title: string;
    signal: string;
    source: string;
    metrics: { signal: string; source: string }[];
  };
  en: {
    title: string;
    signal: string;
    source: string;
    metrics: { signal: string; source: string }[];
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
    id: 'deck',
    code: 'SD-01',
    year: '2026',
    href: '#deck',
    preview: 'deck',
    layers: {
      front: {
        es: 'Angular 22. La página, la consola y los proyectos viven en el mismo sitio. Tailwind y un poco de movimiento al pasar el cursor.',
        en: 'Angular 22. The page, the console, and the projects live in the same site. Tailwind and a little motion on hover.',
      },
      back: {
        es: 'No hay API. El deck es un cliente estático. El estado vive en un servicio root. Mentir con un backend inventado sería más fácil. No lo hice.',
        en: 'No API. The deck is a static client. State lives in a root service. Inventing a backend would be easier. I did not.',
      },
      infra: {
        es: 'Build de @angular/build, assets hasheados, listo para cualquier host estático. El lab entra con @defer.',
        en: '@angular/build, hashed assets, ready for any static host. The lab loads behind @defer.',
      },
    },
    es: {
      title: 'Este portafolio',
      signal: 'Esta página. Puedes cambiar de vista, escribir en la consola y abrir cada proyecto. Hecho para que se entienda, no solo para que se mire.',
      source: 'Standalone, OnPush por defecto, provideZonelessChangeDetection. El toggle no recarga: remapea computed().',
      metrics: [
        { signal: 'Se usa, no solo se mira', source: '0 Zone.js' },
        { signal: 'Español e inglés', source: '1 signal de vista' },
      ],
    },
    en: {
      title: 'This portfolio',
      signal: 'This page. Flip the view, type in the console, open each project. Built to be used, not just looked at.',
      source: 'Standalone, OnPush by default, provideZonelessChangeDetection. The toggle does not reload — it remaps computed().',
      metrics: [
        { signal: 'Built to be used', source: '0 Zone.js' },
        { signal: 'Spanish and English', source: '1 view signal' },
      ],
    },
  },
  {
    id: 'explora',
    code: 'EX-02',
    year: '2024–25',
    href: '#experiencia',
    preview: 'work',
    layers: {
      front: {
        es: 'Interfaces web con Angular, React, TypeScript y Tailwind. El foco público: pantallas claras y mantenibles.',
        en: 'Web UIs with Angular, React, TypeScript, and Tailwind. The public focus: clear, maintainable screens.',
      },
      back: {
        es: 'Integración con APIs REST y bases de datos. NestJS y Supabase figuran en el stack del perfil.',
        en: 'REST APIs and databases. NestJS and Supabase are on the public stack.',
      },
      infra: {
        es: 'LinkedIn no publica el detalle de servidores. No lo invento.',
        en: 'LinkedIn does not publish the server setup. I will not invent it.',
      },
    },
    es: {
      title: 'Explora Soft',
      signal: 'Seis meses como desarrollador web en Tarija. Interfaces, APIs y trabajo en equipo. El puesto está en mi LinkedIn.',
      source: 'Desarrollador web · jul 2024 – ene 2025 · Tarija, Bolivia. Angular, TypeScript, APIs REST.',
      metrics: [
        { signal: '6 meses', source: 'Angular + APIs' },
        { signal: 'Tarija, Bolivia', source: 'jul 2024 – ene 2025' },
      ],
    },
    en: {
      title: 'Explora Soft',
      signal: 'Six months as a web developer in Tarija. Interfaces, APIs, teamwork. The role is on my LinkedIn.',
      source: 'Web developer · Jul 2024 – Jan 2025 · Tarija, Bolivia. Angular, TypeScript, REST APIs.',
      metrics: [
        { signal: '6 months', source: 'Angular + APIs' },
        { signal: 'Tarija, Bolivia', source: 'Jul 2024 – Jan 2025' },
      ],
    },
  },
  {
    id: 'lab',
    code: 'LB-03',
    year: 'Demo',
    href: '#lab',
    preview: 'lab',
    layers: {
      front: {
        es: 'Una caja de búsqueda que espera a que termines de escribir antes de “buscar”. La puedes probar más abajo.',
        en: 'A search box that waits until you stop typing before it “searches”. You can try it below.',
      },
      back: {
        es: 'No llama a ningún servidor. Sirve para ver por qué un sitio no debería buscar en cada tecla.',
        en: 'It does not call a server. It shows why a site should not search on every keystroke.',
      },
      infra: {
        es: 'Se carga solo cuando llegas a esa parte de la página, para que el inicio sea liviano.',
        en: 'It loads only when you reach that part of the page, so the start stays light.',
      },
    },
    es: {
      title: 'Demo para probar',
      signal: 'Escribe en el laboratorio de abajo. Verás la diferencia entre “cada tecla” y “cuando paras”.',
      source: 'input() + settled() + un setTimeout. Sin librería de estado. El código que ves es el que corre.',
      metrics: [
        { signal: 'Se puede tocar', source: '2 signals' },
        { signal: 'Sin servidor falso', source: '1 timer' },
      ],
    },
    en: {
      title: 'A demo you can try',
      signal: 'Type in the lab below. You will see the difference between “every key” and “when you pause”.',
      source: 'input() + settled() + one setTimeout. No state library. The code on screen is the code that runs.',
      metrics: [
        { signal: 'Hands-on', source: '2 signals' },
        { signal: 'No fake server', source: '1 timer' },
      ],
    },
  },
];

export const JUMPS: Jump[] = [
  {
    id: 'explora',
    year: 'Jul 2024 — Ene 2025',
    place: 'Tarija, Bolivia',
    es: {
      title: 'Desarrollador web · Explora Soft',
      signal: 'Seis meses creando y cuidando pantallas, conectándolas a APIs y trabajando en equipo.',
      source: 'Angular, TypeScript, CSS/Tailwind. Integración con APIs REST. Puesto público en LinkedIn.',
    },
    en: {
      title: 'Web developer · Explora Soft',
      signal: 'Six months building and keeping screens, wiring them to APIs, and working with a team.',
      source: 'Angular, TypeScript, CSS/Tailwind. REST API integration. Public role on LinkedIn.',
    },
  },
  {
    id: 'smart',
    year: 'Cochabamba',
    place: 'Bolivia',
    es: {
      title: 'Smart Step',
      signal: 'Smart Step, en Cochabamba. En LinkedIn aparece esta empresa; el perfil público no muestra cargo ni fechas.',
      source: 'Afiliación pública: Smart Step · Cochabamba. Sin título ni rango de fechas en el perfil abierto.',
    },
    en: {
      title: 'Smart Step',
      signal: 'Company listed on my LinkedIn, in Cochabamba. The public profile does not show a title or dates — I will not invent them.',
      source: 'Public affiliation: Smart Step · Cochabamba. No public title or date range in the open scrape.',
    },
  },
  {
    id: 'now',
    year: 'Ahora',
    place: 'Cochabamba, Bolivia',
    es: {
      title: 'Disponible',
      signal: 'Abierto a un siguiente proyecto. Si tienes una idea o un equipo, escríbeme.',
      source: 'Frontend / software engineer. Angular, React, NestJS, TypeScript, Tailwind, Supabase.',
    },
    en: {
      title: 'Available',
      signal: 'Open for the next project. If you have an idea or a team, write me.',
      source: 'Frontend / software engineer. Angular, React, NestJS, TypeScript, Tailwind, Supabase.',
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
    status: 'DISPONIBLE',
    signalLead: 'Diseño pantallas claras y las conecto a lo que hay detrás. Cochabamba, Bolivia.',
    sourceLead:
      'Angular 22 zoneless. El toggle SOURCE / SIGNAL es un signal. Toda la página es un computed de ese valor.',
    signalBody:
      'Me importa que el trabajo quede bien, que el equipo se entienda y que las cosas no se rompan a la primera. Si juegas con esta página, ya viste cómo trabajo.',
    sourceBody:
      'Standalone, signals, Tailwind v4, CSS 3D, i18n en un mapa. Sin Zone.js, sin PrimeNG, sin rutas de mentira.',
    termTitle: 'consola',
    termHint: 'escribe help',
    missionsKicker: 'PROYECTOS',
    missionsTitleSignal: 'Mis proyectos',
    missionsTitleSource: 'Cómo están hechos',
    missionsSubSignal: 'Cosas que puedes abrir y entender. El detalle técnico está en “Cómo está hecho”.',
    missionsSubSource: 'Tres superficies, un store, un corte en 3 capas. Click para Front / Back / Infra.',
    openArch: 'Cómo está hecho',
    closeArch: 'Cerrar',
    layers: { front: 'Pantalla', back: 'Servidor', infra: 'Infra' } satisfies Record<Layer, string>,
    labKicker: 'PRUEBA ESTO',
    labTitleSignal: 'Escribe y mira qué pasa',
    labTitleSource: 'input → quietud → emit',
    labSubSignal: 'Escribe. Lo de la izquierda cambia ya. Lo de la derecha espera a que pares. Así un sitio no se satura.',
    labSubSource: 'Dos signals, un timer. El bloque de la derecha es el código que está corriendo.',
    labInput: 'Escribe un query',
    labDelay: 'debounce',
    labRaw: 'crudo',
    labSettled: 'asentado',
    labKeys: 'teclas',
    labEmits: 'emits',
    logKicker: 'EXPERIENCIA',
    logTitleSignal: 'Experiencia laboral',
    logTitleSource: 'Roles públicos, sin relleno',
    logSubSignal: 'Lo que está en mi LinkedIn. Si un dato no es público, no aparece inventado.',
    logSubSource: 'Explora Soft (jul 2024 – ene 2025) · Smart Step (afiliación pública) · ahora disponible.',
    txKicker: 'CONTACTO',
    txTitleSignal: 'Hablemos',
    txTitleSource: 'mailto + clipboard. Sin endpoint teatro.',
    txSubSignal: 'Escribe como en un chat. Enter abre tu correo. O copia el email en un click.',
    txSubSource: 'El form no finge un 200. Abre tu cliente. El email es el protocolo.',
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
      'disponible',
    ],
    stack: ['Angular 22', 'TypeScript', 'React', 'NestJS', 'Tailwind', 'Supabase'],
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
    status: 'AVAILABLE',
    signalLead: 'I build clear screens and connect them to what sits behind. Cochabamba, Bolivia.',
    sourceLead:
      'Angular 22 zoneless. The SOURCE / SIGNAL toggle is a signal. The page is a computed of that value.',
    signalBody:
      'I care about doing the work well, talking clearly with the team, and not breaking on the first odd case. If you play with this page, you already saw how I work.',
    sourceBody:
      'Standalone, signals, Tailwind v4, CSS 3D, i18n as a map. No Zone.js, no PrimeNG, no fake routes.',
    termTitle: 'console',
    termHint: 'type help',
    missionsKicker: 'PROJECTS',
    missionsTitleSignal: 'My projects',
    missionsTitleSource: 'How they are built',
    missionsSubSignal: 'Things you can open and understand. The technical cut is behind “How it is built”.',
    missionsSubSource: 'Three surfaces, one store, one 3-layer cut. Click for Front / Back / Infra.',
    openArch: 'How it is built',
    closeArch: 'Close',
    layers: { front: 'Screen', back: 'Server', infra: 'Infra' } satisfies Record<Layer, string>,
    labKicker: 'TRY THIS',
    labTitleSignal: 'Type and watch what happens',
    labTitleSource: 'input → quiet → emit',
    labSubSignal: 'Type. The left side updates now. The right side waits until you pause. That is how a site stays calm.',
    labSubSource: 'Two signals, one timer. The block on the right is the code that is running.',
    labInput: 'Type a query',
    labDelay: 'debounce',
    labRaw: 'raw',
    labSettled: 'settled',
    labKeys: 'keys',
    labEmits: 'emits',
    logKicker: 'EXPERIENCE',
    logTitleSignal: 'Work experience',
    logTitleSource: 'Public roles, no filler',
    logSubSignal: 'What is on my LinkedIn. If a fact is not public, it is not invented here.',
    logSubSource: 'Explora Soft (Jul 2024 – Jan 2025) · Smart Step (public affiliation) · available now.',
    txKicker: 'CONTACT',
    txTitleSignal: 'Let’s talk',
    txTitleSource: 'mailto + clipboard. No theatre endpoint.',
    txSubSignal: 'Write it like chat. Enter opens your mail app. Or copy the email in one click.',
    txSubSource: 'The form does not fake a 200. It opens your client. Email is the protocol.',
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
      'available',
    ],
    stack: ['Angular 22', 'TypeScript', 'React', 'NestJS', 'Tailwind', 'Supabase'],
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

export function metricFor(metric: { signal: string; source: string }) {
  return metric.signal;
}

export function blurbFor(mission: Mission, lang: 'es' | 'en') {
  return missionCopy(mission, lang).signal;
}
