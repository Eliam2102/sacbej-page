import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('@vueuse')) {
              return 'vue-vendor';
            }
            if (id.includes('fontawesome') || id.includes('@iconify')) {
              return 'icons-vendor';
            }
            return 'vendor';
          }
        }
      },
      onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
        warn(warning)
      }
    },
    chunkSizeWarningLimit: 1000
  }
})