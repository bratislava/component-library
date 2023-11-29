/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  jit: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {
        'background-color': 'rgb(229, 229, 229)',
        negative: {
          50: 'rgb(253 242 242)',
          100: 'rgb(250 229 229)',
          700: 'rgb(208 0 0)',
        },
        gray: {
          0: 'rgb(255 255 255)',
          100: 'rgb(235 235 235)',
          700: 'rgb(51 51 51)',
          800: 'rgb(31 31 31)',
        },
        success: {
          50: 'rgb(242 249 245)',
          700: 'rgb(1 132 61)',
        },
        warning: {
          50: 'rgb(253 248 242)',
          700: 'rgb(224 123 4)',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
