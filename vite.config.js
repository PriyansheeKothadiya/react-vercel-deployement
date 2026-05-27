import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative asset paths so the app works when served from subpaths or static hosts
  base: './',
  plugins: [react()]
})
