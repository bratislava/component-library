import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      jsx: 'automatic',
    },
  },
  plugins: [svgr({ include: '**/*.svg' }), react(), dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: (externalDependency) =>
        Object.keys(peerDependencies).some(
          (peerDependency) =>
            // Exclude peerDependencies or their subpaths (e.g. react/jsx-runtime) from the build
            externalDependency === peerDependency ||
            externalDependency.startsWith(`${peerDependency}/`),
        ),
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
