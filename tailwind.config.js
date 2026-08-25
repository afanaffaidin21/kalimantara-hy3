/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0f2e1c',
        emeraldAccent: '#10b981',
        charcoal: '#18181b',
        slateSmoke: '#3f3f46',
        ember: '#ea580c',
        emberRed: '#b91c1c',
        sage: '#2d6a4f',
        mint: '#6ee7b7',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'ember-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'scroll-bounce': 'scroll-bounce 1.6s ease-in-out infinite',
        'ember-pulse': 'ember-pulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
