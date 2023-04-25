import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js or vite.config.ts
export default {
  // ...
  server: {
    proxy: {
      '/api': {
        target: 'http://server:3000',
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  
}

