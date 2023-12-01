/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const toRem = (px) => `${px / 16}rem`
const getFontSize = (size) => [toRem(size[0]), toRem(size[1])]

export default {
  jit: true,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './node_modules/vite-component-library-test/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },

    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
    },

    // We are using bcl (bratislava-component-library) prefix, due to some conflicting classes with same name in at least konto
    fontSize: {
      // headings desktop
      'bcl-h1-hero': getFontSize([56, 64]),
      'bcl-h1-form': getFontSize([40, 48]), // TODO: Needs to be modified according to figma, so far leaving h1
      'bcl-h1': getFontSize([40, 48]),
      'bcl-h2': getFontSize([32, 40]),
      'bcl-h3': getFontSize([28, 36]),
      'bcl-h4': getFontSize([24, 32]),
      'bcl-h5': getFontSize([20, 28]),
      'bcl-h6': getFontSize([16, 24]),

      // headings responsive
      'bcl-h1-hero-r': getFontSize([32, 40]),
      'bcl-h1-form-r': getFontSize([24, 32]), 
      'bcl-h1-r': getFontSize([28, 36]),
      'bcl-h2-r': getFontSize([24, 32]),
      'bcl-h3-r': getFontSize([20, 28]),
      'bcl-h4-r': getFontSize([18, 26]),
      'bcl-h5-r': getFontSize([16, 24]),
      'bcl-h6-r': getFontSize([16, 24]),

      // paragraphs
      'bcl-p-sm': getFontSize([14, 20]),
      'bcl-p-base': getFontSize([16, 24]),
      'bcl-p-md': getFontSize([20, 28]),
      'bcl-p-md-r': getFontSize([16, 24]),

      // span
      'bcl-span-base': getFontSize([16, 24]),
      'bcl-span-large': getFontSize([20, 32]),
      'bcl-span-small': getFontSize([14, 20]),
    },

    extend: {
      colors: {
        font: {
          DEFAULT: 'rgb(var(--font-color))',
          contrast: 'rgb(var(--font-contrast-color))',
        },

        transparent: 'transparent',
        current: 'currentColor',
        white: 'rgb(var(--color-gray-0))',
        defaultBlack: 'rgb(var(--color-gray-700))',
        main: 'rgb(var(--color-main-700))',
        environment: 'rgb(var(--color-environment-700))',
        transport: 'rgb(var(--color-transport-700))',
        social: 'rgb(var(--color-social-700))',
        education: 'rgb(var(--color-education-700))',
        culture: 'rgb(var(--color-culture-700))',
        disabledOrHover: 'rgb(var(--color-gray-200))',
      },
    },
  },
  plugins: [require('tailwindcss-react-aria-components')],
  corePlugins: {
    preflight: false,
  },
}
