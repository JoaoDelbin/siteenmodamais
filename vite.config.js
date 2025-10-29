// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',          // importante para deploy em raiz do domínio
  build: { outDir: 'dist' }
})