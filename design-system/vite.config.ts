import { defineConfig } from 'vite';
import { withZephyr } from 'vite-plugin-zephyr';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'design_system',
    }),
    withZephyr(),
  ],
});
