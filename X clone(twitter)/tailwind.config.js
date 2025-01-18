/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'aside-out':'988px', // Custom extra small breakpoint
        'nav-rev':'562px', // Custom extra small breakpoint
      },
    },
  },
};
