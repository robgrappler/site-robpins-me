import flyonui from 'flyonui';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        b612: ['B612', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        // Primary Palette - User Defined
        main: {
          bg: '#0b0b0e',      // Ultra-dark background
          surface: '#2a102f', // Deep purple surface
          gold: '#f5c265',    // Brand Gold
          bronze: '#8a5a2b',  // Primary accent
        },
        // Secondary Palette - User Defined
        sub: {
          pale: '#e8b98a',    // Pale gold/peach
          red: '#8c1d18',     // Action/Alert
          paper: '#ede6d8',   // Text/Surface light
          grey: '#6f6f75',    // Muted text
        },
        // Legacy mappings for compatibility
        ink: {
          900: '#0b0b0e', // Mapped to new bg
          850: '#111318',
          800: '#151821',
          700: '#1e2230',
          600: '#2a2f3f',
          500: '#3a4154'
        },
        gold: {
          400: '#F8D48C',
          500: '#f5c265',
          600: '#C29230',
          900: '#3D2E0F'
        }
      },
      boxShadow: {
        soft: '0 24px 60px -40px rgba(0, 0, 0, 0.7)'
      }
    }
  },
  plugins: [flyonui]
};
