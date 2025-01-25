/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '2px 68px 10px lightblue',
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'toggle': 'toggle 1s',
      },
      keyframes: {
        'bounce-horizontal': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(25px)' },
        },
      },
      colors: {
        customGray: 'rgb(229, 231, 235)',
      },
      
      borderColor: {
        cusBorder: '#e5e7eb',
      }
      
    },
  },
  plugins: [],
};
