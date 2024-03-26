import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "public/tg-mini-app/",
    emptyOutDir: true,
  },
  base: "/tg-mini-app/",
})
