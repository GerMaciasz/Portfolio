import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  tailwindcss()
],
  build: {
    outDir: 'build', // Cambia la carpeta de salida de dist a build
    assetsDir: 'assets', // Opcional: Mantiene organizados los assets
  }
})
