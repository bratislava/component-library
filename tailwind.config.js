/** @type {import('tailwindcss').Config} */
import themeConfig from "./lib/tailwind"

export default {
  presets: [themeConfig()],
  jit: true,
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './node_modules/vite-component-library-test/**/*.js',
  ],
}
