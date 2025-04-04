import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'botspot-ui',
      fileName: (format) => `botspot-ui.${format}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[ext]`,
        chunkFileNames: `assets/[name].js`,
        entryFileNames: `assets/[name].js`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
