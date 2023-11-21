import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'
// import plugin from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      jsx: 'automatic',
    },
  },
  plugins: [react(), dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: 'React',
        },
        assetFileNames: 'assets/[name][extname]',
        //   entryFileNames: '[name].[format].js',
      },
    },
    lib: {
      entry: [resolve(__dirname, 'lib/main.ts'), resolve(__dirname, 'lib/tailwind.ts')],
      name: '@bratislava/component-library',
      // fileName: `main`,
      // formats: ['es', 'umd'],
    },
  },
})
