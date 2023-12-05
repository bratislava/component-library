import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      jsx: 'automatic',
    },
  },
  plugins: [react(), dts({ include: ['lib'] }), svgr()],
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
  }
})
