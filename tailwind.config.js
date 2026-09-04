/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0A14',
        accent: '#7B61FF',
        'accent-light': '#9D86FF',
        ghost: '#F0EFF4',
        graphite: '#18181B',
        'graphite-light': '#27272A',
        muted: '#71717A',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
