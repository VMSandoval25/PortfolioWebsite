// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'hero-name': ['clamp(3rem, 6vw, 8rem)', { lineHeight: '1', fontWeight: '800' }],
        'hero-subtitle': ['clamp(2.2rem, 3vw, 4rem)', { lineHeight: '1', fontWeight: '600' }],
        'section-title': ['clamp(1.75rem, 2.2vw, 3.25rem)', { lineHeight: '1', fontWeight: '550' }],
        'section-text': ['clamp(1.5rem, 2vw, 1.75rem)', { lineHeight: '1.2' }],
        'caption': ['clamp(1.25rem, 1.75vw, 1.5rem)', { lineHeight: '1.5' }],
        'small-caption': ['clamp(0.7rem, 1.25vw, 1.25rem)', { lineHeight: '1.5', fontWeight: '600' }],
        'skill-label': ['clamp(0.7rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],

      },
      maxWidth: {
        content: '65rem',
      },
      colors: {
        primary: '#7777cdff',
        secondary: '#23313ac0',
        secondary_alt: '#1c2b35c0',
        muted: '#9CA3AF',
        muted_alt: '#3b639fff',
        accent: '#b84522ff',
        accent_alt: '#4a4e91',
        bright_accent: '#f0e9ff',
        highlight: '#b6e1f9'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective': {
          perspective: '1500px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.responsive-section': {
          paddingBlock: 'clamp(5rem, 8vh, 8rem)',  // top and bottom padding
          paddingInline: 'clamp(1rem, 6vw, 5rem)', // left and right padding
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
        },
        '.responsive-about-container': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(2rem, 8vw, 8rem)',
          // maxWidth: 'clamp(960px, 85vw, 1280px)', // Similar to max-w-6xl but flexible
          width: '100%',
        },
        '@screen lg': {
          '.responsive-about-container': {
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 'clamp(0.5rem, 1vw, .75rem)', // slightly smaller gap on large screens
          },
        },
        '.about-image-block': {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          '@screen lg': {
            width: '50%',
          },
        },
        '.responsive-about-image': {
          width: '100%',
          aspectRatio: '3 / 4',
          maxWidth: '80%',
          '@screen sm': { width: '80%' },
          '@screen md': { width: '50%' },
          '@screen lg': { width: '80%' },
          '@screen xl': { width: '60%' },
          '@screen 2xl': { width: '60%' },
        },
        '.about-image': {
          '@apply w-full h-full object-cover rounded-2xl shadow-xl cursor-pointer transition-opacity duration-1000 ease-in-out': {},
          '@apply bg-primary p-2 rounded-2xl shadow-2xl border border-white/20': {},
        },
      });
    },
    function ({ addComponents }) {
      addComponents({
        '.card-face': {
          '@apply absolute w-full h-full backface-hidden rounded-2xl shadow-xl p-8 flex flex-col justify-between': {},
        },
        '.card-front': {
          '@apply bg-white text-black border-2 border-gray-200': {},
        },
        '.card-back': {
          '@apply bg-primary text-white border-2 border-gray-700': {},
          transform: 'rotateY(180deg)',
        },
        '.experience-card': {
          '@apply shrink-0 cursor-pointer transition-all duration-300 w-full h-[500px] sm:w-auto sm:h-auto': {},
          width: 'clamp(260px, 30vw, 520px)',
          height: 'clamp(390px, 42vw, 720px)',
        },
        '.experience-modal': {
          '@apply bg-accent_alt rounded-2xl shadow-2xl p-8': {},

          // Tighter min and max control for better visual balance
          width: 'clamp(320px, 90vw, 680px)',
          height: 'clamp(480px, 85vh, 750px)',

          // Optional: Add subtle inner border or glow for contrast
          border: '1px solid rgba(255, 255, 255, 0.1)',

          // Optional: Enhance depth on light backgrounds
          backdropFilter: 'blur(8px)',

          // Optional: Smooth the appearance
          transition: 'all 0.3s ease',
        },

        '.header': {
          '@apply fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center backdrop-blur-md': {},
        },
        '.header-scrolled': {
          '@apply bg-primary shadow-lg': {},
        },
        '.header-unscrolled': {
          '@apply bg-transparent': {},
        },
        '.logo': {
          '@apply text-xl font-bold': {},
        },
        '.logo-scrolled': {
          '@apply text-white': {},
        },
        '.logo-unscrolled': {
          '@apply text-primary': {},
        },
        '.desktop-nav': {
          '@apply hidden sm:flex gap-6 items-center text-sm': {},
        },
        '.desktop-nav-scrolled': {
          '@apply text-white': {},
        },
        '.desktop-nav-unscrolled': {
          '@apply text-primary': {},
        },
        '.nav-link': {
          '@apply hover:underline': {},
        },
        '.contact-btn-scrolled': {
          '@apply bg-white text-accent hover:bg-gray-100 px-4 py-1 rounded-full transition': {},
        },
        '.contact-btn-unscrolled': {
          '@apply bg-primary text-bright_accent hover:opacity-90 px-4 py-1 rounded-full transition': {},
        },
        '.mobile-toggle': {
          '@apply sm:hidden': {},
        },
        '.mobile-toggle-scrolled': {
          '@apply text-white': {},
        },
        '.mobile-toggle-unscrolled': {
          '@apply text-primary': {},
        },
        '.mobile-menu': {
          '@apply fixed top-0 left-0 w-full h-full bg-primary text-white flex flex-col items-center justify-center gap-8 z-50 px-4 py-8 overflow-y-auto': {},
        },
        '.mobile-link': {
          '@apply text-xl': {},
        },
        '.mobile-contact': {
          '@apply bg-white text-primary px-5 py-2 rounded-full text-xl': {},
        },
        '.responsive-project-width': {
          width: '100%',
          maxWidth: 'clamp(320px, 92vw, 1800px)',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
        '.project-image-frame': {
          '@apply relative rounded-2xl shadow-xl overflow-hidden bg-primary/10 backdrop-blur-sm': {},
          border: '1px solid muted_alt',
          height: 'clamp(400px, 60vh, 700px)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.project-image': {
          '@apply rounded-2xl shadow-xl object-contain h-full max-w-4xl transition duration-500 ease-in-out': {},
        },
        '.arrow-button': {
          '@apply absolute top-1/2 transform -translate-y-1/2 px-4 text-3xl cursor-pointer select-none text-muted hover:text-primary transition-colors duration-200': {},
        },
        '.project-section-title': {
          '@apply text-primary text-section-text font-bold': {},
          paddingTop: 'clamp(0.5rem, 2vw, 1rem)',
        },
        '.project-text-content': {
          '@apply text-secondary text-section-text': {},
          paddingTop: 'clamp(0.25rem, 1vw, 0.75rem)',
        },
      });
    },
  ],
};
