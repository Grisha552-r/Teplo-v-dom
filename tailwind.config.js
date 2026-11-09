/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        flame: {
          50: '#fff4ed',
          100: '#ffe6d5',
          200: '#ffc9aa',
          300: '#ffa574',
          400: '#ff7a3c',
          500: '#fb5a17',
          600: '#ec3f0d',
          700: '#c42d0c',
          800: '#9c2512',
          900: '#7e2112',
        },
      },
    },
  },
  plugins: [],
};
