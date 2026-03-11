import { defineConfig } from 'vite';
import { withZephyr } from 'vite-plugin-zephyr';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_main_app',
      filename: 'remoteEntry.js',
      exposes: {
        './MainPage': './src/presentation/pages/main-page.tsx',
      },
      remotes: {
        shared_store:
          'https://oliveira-caco-h-gmail-com-5-shared-store-zephyr-t-fc13a8e35-ze.zephyrcloud.app/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'zustand'],
    }),
    withZephyr(),
  ],
  server: {
    port: 5175,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    fs: {
      allow: ['..'],
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
