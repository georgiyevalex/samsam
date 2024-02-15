// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3000,
    host: 'localhost',
    open: true,
  },
  build: {
    outDir: 'dist',
    minify: true,
    brotli: false,
    sourcemap: false,
  },
  resolve: {
    alias: {
      '/html/': resolve(__dirname, 'html/'),
      '/src/assets/': resolve(__dirname, 'src/assets/'),
    },
  },
});
