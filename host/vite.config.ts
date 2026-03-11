import { defineConfig } from 'vite';
import { withZephyr } from 'vite-plugin-zephyr';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host_app',
      remotes: {
        remote_main_app:
          process.env.VITE_REMOTE_MAIN_APP_URL ||
          'http://localhost:5175/remoteEntry.js',
        remote_sidebar_app:
          process.env.VITE_REMOTE_SIDEBAR_APP_URL ||
          'http://localhost:5176/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'zustand'],
    }),
    withZephyr(),
  ],
  server: {
    port: 5173,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'zustand'],
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,
    assetsDir: '',
  },
});
