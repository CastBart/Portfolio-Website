import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-Website/', // Replace with your repository name
  plugins: [react()],
  css:{
    postcss: {
      plugins:[tailwindcss()],
    }
  }
})
