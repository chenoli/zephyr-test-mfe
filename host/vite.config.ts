import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host_app',
      remotes: {
        remote_main_app: 'http://localhost:5175/remoteEntry.js',
        remote_sidebar_app: 'http://localhost:5176/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'zustand'],
    }),
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
