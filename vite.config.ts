import path from 'node:path';
import react from '@vitejs/plugin-react';
import { type UserConfig, defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'i18next', 'react-i18next', '@tanstack/react-query'],
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'app'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  test: {
    root: './',
    watch: false,
    globals: false,
    environment: 'happy-dom',
    setupFiles: './vitest-setup.ts',
    reporters: ['default'],
  },
}) satisfies UserConfig;
