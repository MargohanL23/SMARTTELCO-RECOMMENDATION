// SmartTelco-FrontEnd\vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    // Konfigurasi Proxy
    proxy: {
      // Setiap request yang dimulai dengan /api
      '/api': {
        // Akan diarahkan ke backend Flask di port 5000
        target: 'http://127.0.0.1:5000',
        // Mengubah origin header
        changeOrigin: true,
      },
    },
  },
})