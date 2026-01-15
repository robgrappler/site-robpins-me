export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'site.title': 'Rob Pins',
        'site.description': 'Public links and projects.',
        'nav.home': 'Home',
        'nav.start': 'Start Here',
        'nav.twitter': 'Twitter',
        'hero.title': 'Robgrappler\'s',
        'hero.subtitle': 'Grappling, Tech and Digital Archiving. (Work in Progress)',
    },
    es: {
        'site.title': 'Rob Pins (ES)',
        'site.description': 'Enlaces y proyectos públicos.',
        'nav.home': 'Inicio',
        'nav.start': 'Empieza Aquí',
        'nav.twitter': 'Twitter',
        'hero.title': 'Robgrappler\'s',
        'hero.subtitle': 'Grappling, Tecnología y Archivo Digital. (En Progreso)',
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
