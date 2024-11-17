/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/bg-intro-mobile.png')",
        desktop: "url('/bg-intro-desktop.png')",
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '80%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 1s ease-in-out',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
      violet: 'hsl(248, 32%, 49%)',
      grey: 'hsl(249, 10%, 26%)',
      pale: 'hsl(246, 25%, 77%)',
      white: '#fff',
    },
  },
  plugins: [],
};

/*
- Mobile: 375px
- Desktop: 1440px
*/
