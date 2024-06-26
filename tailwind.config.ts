import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif']
      },
      boxShadow: {
        customGaryShadow: '0px 0px 16px 0px #35042214'
      },
      fontSize: {
        brandSize: '18px'
      },
      colors: {
        card1: '#FFFBFD',
        card2: '#FFFEF9',
        card3: '#FFFBF8',
        brand: '#FFF5FB',
        newgray: '#777777',
        'font-gray': '#636363',
        'custom-gray200': '#EFEFEF',
        'brand-200': '#FA98D3',
        'brand-300': '#F571C0',
        'brand-400': '#ED52AF',
        'brand-500': '#E33A9F',
        'brand-600': '#D52990'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      height: {
        '548': '548px'
      }
    }
  },
  plugins: [
    nextui({
      layout: {},
      themes: {
        light: {
          colors: {
            secondary: {
              DEFAULT: '#E33A9F'
            }
          }
        },
        dark: {}
      }
    })
  ]
};
export default config;
