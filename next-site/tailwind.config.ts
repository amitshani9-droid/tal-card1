import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:      { DEFAULT: 'var(--color-primary)',      dark: 'var(--color-primary-dark)' },
        accent:       { DEFAULT: 'var(--color-accent)',       dark: 'var(--color-accent-dark)' },
        background:   'var(--color-background)',
        surface:      { DEFAULT: 'var(--color-surface)',      muted: 'var(--color-surface-muted)' },
        foreground:   'var(--color-text)',
        muted:        'var(--color-text-muted)',
      },
      fontFamily: {
        sans:  ['var(--font-heebo)', 'Heebo', 'sans-serif'],
        serif: ['var(--font-frank)', 'Frank Ruhl Libre', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'curtain': '0 -24px 80px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
}

export default config
