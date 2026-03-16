/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso:   '#1a0f0a',
        velvet:     '#2d1810',
        deep:       '#3d2214',
        terracotta: '#b05c3a',
        terra_lt:   '#c97452',
        moss:       '#4a5c3a',
        moss_lt:    '#6b7f5a',
        oat:        '#e8d9c4',
        cream:      '#f4ede3',
        parchment:  '#faf6f0',
        gold:       '#c9a46e',
        gold_lt:    '#dbb98a',
      },
      fontFamily: {
        // Brand: Cormorant Garamond — selectively for "Aether & Soil" title only
        brand:   ['Cormorant Garamond', 'serif'],
        // Display: Syne — for large display headings (stats, etc.)
        display: ['Syne', 'sans-serif'],
        // Serif: Instrument Serif — for editorial/section headings
        serif:   ['Instrument Serif', 'Georgia', 'serif'],
        // Body / mono: Space Grotesk — replaces JetBrains Mono and body text
        sans:    ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono:    ['Space Grotesk', 'system-ui', 'sans-serif'],
        body:    ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee':   'marquee 24s linear infinite',
        'fade-up':   'fade-up 0.9s ease forwards',
        'ping-slow': 'ping-slow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'ping-slow': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.4', transform: 'scale(1.6)' },
        },
      },
      transitionTimingFunction: {
        silk:   'cubic-bezier(0.16, 1, 0.3, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
