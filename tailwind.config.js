/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './theme.config.tsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '80ch',
            'code::before': { content: '""' },
            'code::after': { content: '""' }
          }
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.neutral[300]'),
            '--tw-prose-headings': theme('colors.neutral[100]'),
            '--tw-prose-code': theme('colors.violet[300]')
          }
        }
      })
    }
  },
  plugins: []
}
