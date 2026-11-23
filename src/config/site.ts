export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Emanuel',
  title: 'Emanuel Enriquez - Desarrollador Full Stack',
  description:
    'Emanuel Enriquez es Desarrollador Full Stack con más de 1.5 años de experiencia construyendo productos digitales completos, desde la base de datos hasta la interfaz. Proyectos y trayectoria.',
  siteUrl: 'https://example.com',
  language: 'es',
  locale: 'es_AR',
  dateLocale: 'es-AR',
  socialImage: '/og-image.png',

  author: {
    name: 'Emanuel Enriquez',
    role: 'Desarrollador Full Stack',
    location: 'Argentina',
    email: 'emaenriquez1985@gmail.com',
  },

  /** The pill above the homepage headline. Set `enabled: false` to remove it. */
  availability: {
    enabled: true,
    label: 'Disponible para nuevos proyectos',
  },

  /** The button at the end of the header and in the mobile menu. */
  action: { label: 'Contacto', href: '/#contacto' },

  /** A PDF in `public/`, offered on the resume page. Leave empty to hide the button. */
  resumePdf: '',

  /** The banner and preferences dialog. Set `enabled: false` to remove both. */
  cookieConsent: {
    enabled: true,
  },

  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/emaenriquez' },
    { label: 'GitHub', href: 'https://github.com/emaenriquez' },
  ] satisfies NavLink[],
};

export const navigation: NavLink[] = [
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Contacto', href: '/#contacto' },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacidad', href: '/privacy/' },
  { label: 'Términos', href: '/terms/' },
  { label: 'Cookies', href: '/cookies/' },
];
