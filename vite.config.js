import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Absolute base: with BrowserRouter a page like /movie/2 is one level
  // deep, and relative asset paths ('./assets/…') would 404 there.
  base: '/',
})
