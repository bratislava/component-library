/** @type {import('tailwindcss').Config} */

const toRem = (px: number) => `${px / 16}rem`
const getFontSize = (size: [number, number]) => [toRem(size[0]), toRem(size[1])]

export default {
  jit: true,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './node_modules/vite-component-library-test/**/*.js',
  ],
  theme: {
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '800',
    },

    // We are using bcl (bratislava-component-library) prefix, due to some conflicting classes with same name in at least konto
    fontSize: {
      'size-button-large': getFontSize([16, 24]), // this is probably not used in OLO ?
      'size-button-default': getFontSize([14, 24]),

      'size-p-large': getFontSize([20, 28]),
      'size-p-large-r': getFontSize([18, 28]),
      'size-p-default': getFontSize([18, 28]),
      'size-p-default-r': getFontSize([16,24]),
      'size-p-small': getFontSize([16, 24]),
      'size-p-tiny': getFontSize([14, 20]),

      'size-h6': getFontSize([16, 24]),
      'size-h6-r': getFontSize([16, 24]),
      'size-h5': getFontSize([20, 28]),
      'size-h5-r': getFontSize([16, 24]),
      'size-h4': getFontSize([24, 32]),
      'size-h4-r': getFontSize([18, 26]),
      'size-h3': getFontSize([28, 36]),
      'size-h3-r': getFontSize([20, 28]),
      'size-h2': getFontSize([32, 40]),
      'size-h2-r': getFontSize([24, 32]),
      'size-h1': getFontSize([40, 48]),
      'size-h1-r': getFontSize([28, 36]),
      'size-h1-hero': getFontSize([56, 64]),
      'size-h1-hero-r': getFontSize([32, 40]),
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'rgb(var(--color-grey-0))',
      background: {
        primary: 'rgb(var(--token-background-primary))',
        secondary: 'rgb(var(--token-background-secondary))',
        tertiary: 'rgb(var(--token-background-tertiary))',
        primaryInverted: 'rgb(var(--token-background-primary-inverted))',
        disabled: 'rgb(var(--token-background-disabled))',
      },
      border: {
        default: 'rgb(var(--token-border-default))',
        hover: 'rgb(var(--token-border-hover))',
        dark: 'rgb(var(--token-border-dark))',
      },
      content: {
        primary: 'rgb(var(--token-content-primary))',
        secondary: 'rgb(var(--token-content-secondary))',
        tertiary: 'rgb(var(--token-content-tertiary))',
        primaryInverted: 'rgb(var(--token-content-primary-inverted))',
        secondaryInverted: 'rgb(var(--token-content-secondary-inverted))',
        tertiaryInverted: 'rgb(var(--token-content-tertiary-inverted))',
        disabled: 'rgb(var(--token-content-disabled))',
        link: {
          default: 'rgb(var(--token-content-link-default))',
          hover: 'rgb(var(--token-content-link-hover))',
          pressed: 'rgb(var(--token-content-link-pressed))',
        },
      },
      action: {
        content: {
          default: 'rgb(var(--token-action-content-default))',
          hover: 'rgb(var(--token-action-content-hover))',
          pressed: 'rgb(var(--token-action-content-pressed))',
        },
        background: {
          default: 'rgb(var(--token-action-background-default))',
          hover: 'rgb(var(--token-action-background-hover))',
          pressed: 'rgb(var(--token-action-background-pressed))',
        },
        softBackground: {
          hover: 'rgb(var(--token-action-soft-background-hover))',
          pressed: 'rgb(var(--token-action-soft-background-pressed))',
        },
        border: {
          default: 'rgb(var(--token-action-border-default))',
          hover: 'rgb(var(--token-action-border-hover))',
          pressed: 'rgb(var(--token-action-border-pressed))',
        },
      },
      success: {
        background: {
          default: 'rgb(var(--token-success-background-default))',
        },
        content: {
          default: 'rgb(var(--token-success-content-default))',
        },
      },
      warning: {
        background: {
          default: 'rgb(var(--token-warning-background-default))',
        },
        softBackground: {
          default: 'rgb(var(--token-warning-soft-background-default))',
        },
      },
      error: {
        content: {
          default: 'rgb(var(--token-error-content-default))',
        },
      },
    },

    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
