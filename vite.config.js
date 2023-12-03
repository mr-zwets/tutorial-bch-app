import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills()
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
