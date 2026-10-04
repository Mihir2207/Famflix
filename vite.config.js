import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build works on GitHub Pages under /<repo-name>/
  base: './',
  plugins: [react()],
})
