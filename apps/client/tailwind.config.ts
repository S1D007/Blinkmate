import { nextui } from '@nextui-org/react';

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        thin: ['Gilroy-Thin', 'sans-serif'],
        normal: ['Gilroy-Normal', 'sans-serif'],
        regular: ['Gilroy-Regular', 'sans-serif'],
        medium: ['Gilroy-Medium', 'sans-serif'],
        semibold: ['Gilroy-Semibold', 'sans-serif'],
        bold: ['Gilroy-Bold', 'sans-serif'],
        extrabold: ['Gilroy-ExtraBold', 'sans-serif'],
        black: ['Gilroy-Black', 'sans-serif'],
        heavy: ['Gilroy-Heavy', 'sans-serif'],
      },
      animation: {
        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
      },
      keyframes: {
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
