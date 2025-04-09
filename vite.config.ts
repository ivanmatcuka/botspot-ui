import react from '@vitejs/plugin-react';
import path from 'path';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';

const subModules = ['index', 'theme', 'storybook', 'standalone'];

export default defineConfig({
  plugins: [react(), preserveDirectives()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'botspot-ui',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@emotion/react',
        '@emotion/styled',
      ],
    },
  },
});
