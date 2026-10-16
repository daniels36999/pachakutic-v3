import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' => funciona en GitHub Pages (usuario.github.io/repositorio/) sin configurar nada más.
export default defineConfig({
  //base: './',
  base: '/',
  plugins: [react()],
});
