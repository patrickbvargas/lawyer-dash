import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        layout: 'auto 1fr',
      },
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
      colors: {
        accent: '#AC8B46',
      },
    },
  },
  plugins: [],
};
export default config;
