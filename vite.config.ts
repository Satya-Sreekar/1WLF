import { defineConfig } from 'vite'
import type { IncomingMessage } from 'http'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'tms-rewrite',
      configureServer(server) {
        server.middlewares.use((req: IncomingMessage, _res, next) => {
          if (req.url === '/tms' || req.url === '/tms/') {
            req.url = '/tms.html'
          }
          next()
        })
      },
    },
  ],
  base: '/',
})
