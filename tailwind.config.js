const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['.vitepress/theme/components/*.{vue,js}', 'src/**/*.{vue,js}'],
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1376px'
    },
    container: ({ theme }) => ({
      center: true,
      screens: { ...theme('screens') }
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: 'var(--vt-c-white)',
        soft: 'var(--vt-c-white-soft)'
      },
      black: {
        DEFAULT: 'var(--vt-c-black)',
        soft: 'var(--vt-c-black-soft)',
        pure: 'var(--vt-c-black-pure)'
      },
      vt: {
        DEFAULT: 'var(--vt-c-bg)',
        soft: 'var(--vt-c-bg-soft)',
        mute: 'var(--vt-c-bg-mute)',
        1: 'var(--vt-c-text-1)',
        2: 'var(--vt-c-text-2)',
        3: 'var(--vt-c-text-3)',
        4: 'var(--vt-c-text-4)',
        code: 'var(--vt-c-text-code)',
        divider: 'var(--vt-c-divider)',
        brand: 'var(--vt-c-brand)',
        green: {
          DEFAULT: 'var(--vt-c-green)',
          dark: 'var(--vt-c-green-dark)',
          light: 'var(--vt-c-green-light)'
        }
      }
    },
    extend: {
      fontFamily: {
        'Roboto-Slab': 'Roboto Slab,Times New Roman,serif',
        Roboto: 'Roboto,Helvetica,Arial,sans-serif',
        Georgia: 'Georgia, Cambria, "Times New Roman", Times, serif'
      },
      boxShadow: {
        sm: '0 5px 10px 0 rgb(0 0 0 / 15%)',
        md: '0 5px 15px -8px rgb(0 0 0 / 24%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
        lg: '0 16px 24px 2px rgb(0 0 0 / 15%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
        1: 'var(--vt-shadow-1)',
        2: 'var(--vt-shadow-2)',
        3: 'var(--vt-shadow-3)',
        4: 'var(--vt-shadow-4)',
        5: 'var(--vt-shadow-5)'
      }
    }
  },
  corePlugins: {
    translate: false
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        'translate-x': (value) => ({ transform: `translateX(${value})` }),
        'translate-y': (value) => ({ transform: `translateY(${value})` })
      })
    })
  ]
}
