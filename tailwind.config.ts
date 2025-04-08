import type { Config } from 'tailwindcss';

import { palette } from './src/theme/palette';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  safelist: ['object-cover', 'object-contain'],
  theme: {
    extend: {
      colors: palette,
    },
  },
};

export default config;
