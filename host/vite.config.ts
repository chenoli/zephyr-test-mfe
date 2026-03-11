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
          'https://oliveira-caco-h-gmail-com-3-remote-main-zephyr-te-d680cfc1a-ze.zephyrcloud.app/remoteEntry.js',
        remote_sidebar_app:
          'https://oliveira-caco-h-gmail-com-4-remote-sidebar-zephyr-b46fc4afc-ze.zephyrcloud.app/remoteEntry.js',
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
