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
        'db.title': 'Match Database',
        'db.subtitle': 'Searchable match notes & references. Organized. Updated over time.',
        'db.back': 'Back to Matroom',
        'db.searchPlaceholder': 'Search titles, notes, or sources',
        'db.empty': 'No matches found for this search.',
        'db.backToDb': 'Back to Database',
        'db.viewSource': 'View Source',
    },
    es: {
        'site.title': 'Rob Pins (ES)',
        'site.description': 'Enlaces y proyectos públicos.',
        'nav.home': 'Inicio',
        'nav.start': 'Empieza Aquí',
        'nav.twitter': 'Twitter',
        'hero.title': 'Robgrappler\'s',
        'hero.subtitle': 'Grappling, Tecnología y Archivo Digital. (En Progreso)',
        'db.title': 'Base de Datos',
        'db.subtitle': 'Notas de combates y referencias buscables. Organizado. Actualizado.',
        'db.back': 'Volver al Matroom',
        'db.searchPlaceholder': 'Buscar títulos, notas o fuentes',
        'db.empty': 'No se encontraron combates para esta búsqueda.',
        'db.backToDb': 'Volver a la Base de Datos',
        'db.viewSource': 'Ver Fuente',
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
