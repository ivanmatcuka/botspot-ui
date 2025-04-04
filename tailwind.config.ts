import type { Config } from 'tailwindcss';

import { palette } from './src/theme/palette';

const config: Config = {
  plugins: [],
  safelist: ['object-cover', 'object-contain'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: palette,
    },
  },
};

export default config;
