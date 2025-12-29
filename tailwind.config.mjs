import flyonui from 'flyonui';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: {
          900: '#0b0c0f',
          850: '#111318',
          800: '#151821',
          700: '#1e2230',
          600: '#2a2f3f',
          500: '#3a4154'
        }
      },
      boxShadow: {
        soft: '0 24px 60px -40px rgba(0, 0, 0, 0.7)'
      }
    }
  },
  plugins: [flyonui]
};
