/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
      blue: 'hsl(248, 32%, 49%)',
      grey: 'hsl(249, 10%, 26%)',
      white: 'hsl(246, 25%, 77%)',
    },
  },
  plugins: [],
};

/*
- Mobile: 375px
- Desktop: 1440px
*/
