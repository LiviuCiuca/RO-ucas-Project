import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// 
//With this configuration, if the target server at http://localhost:3000 is not reachable, 
//the requests will be redirected to http://server:3000. 

export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
        onProxyReq: (proxyReq, req, res) => {
          // Check if the target is reachable
          proxyReq.on('error', (err) => {
            console.log(`Error: ${err.message}`);
            // Redirect to fallback URL if the target is not reachable
            res.writeHead(302, { Location: 'http://server:3000' });
            res.end();
          });
        },
      },
    },
  },
};
//npm install -g npm@9.6.6







