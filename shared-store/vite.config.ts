import { defineConfig } from 'vite';
import { withZephyr } from 'vite-plugin-zephyr';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shared-store',
      filename: 'remoteEntry.js',
      exposes: {
        './Store': './src/index.ts',
      },
      shared: ['react', 'react-dom', 'zustand'],
    }),
    withZephyr(),
  ],
  server: {
    port: 5178,
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
