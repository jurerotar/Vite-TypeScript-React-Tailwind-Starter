import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['index.html', './app/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        xs: '425px',
        '2xl': '1536px',
      },
    },
  },
} satisfies Config;
