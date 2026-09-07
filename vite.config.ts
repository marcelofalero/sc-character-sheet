import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app.bundle.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/app.bundle.[ext]'
      }
    }
  },
  server: {
    port: 5173,
    open: false,
    host: true
  }
});
