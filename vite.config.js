import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  // dedupe guards against two React copies when the dep optimizer re-bundles mid-session
  resolve: { dedupe: ['react', 'react-dom', 'react-router-dom'] },
  optimizeDeps: { include: ['react', 'react-dom', 'react-dom/client', 'react-router-dom', 'matter-js', 'lottie-web'] },
  server: { port: 5180, strictPort: true },
})
