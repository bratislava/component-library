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
  resolve: {
    alias: {
      '@lib': resolve(__dirname, './lib'),
      '@components': resolve(__dirname, './lib/components'),
      '@tools': resolve(__dirname, './lib/tools'),
      '@src': resolve(__dirname, './src'),
      '@showcases': resolve(__dirname, './src/styleguide/showcases'),
    },
  },
  plugins: [react(), dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
  },
})
