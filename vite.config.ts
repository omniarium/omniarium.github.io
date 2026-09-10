import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// This is a GitHub Pages user site, so assets are served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
