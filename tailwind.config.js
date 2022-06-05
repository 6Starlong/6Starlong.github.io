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
      white: '#fff',
      black: '#000',
      vt: {
        1: 'var(--vt-c-text-1)',
        2: 'var(--vt-c-text-2)',
        3: 'var(--vt-c-text-3)',
        4: 'var(--vt-c-text-4)',
        bg: {
          DEFAULT: 'var(--vt-c-bg)',
          soft: 'var(--vt-c-bg-soft)'
        },
        divider: 'var(--vt-c-divider)',
        brand: 'var(--vt-c-brand)'
      }
    },
    extend: {
      boxShadow: {
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
