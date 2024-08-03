/** @type {import('tailwindcss').Config} */

const defaultTheme  = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['"Figtree"', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        '3xl': '8px 8px 0 rgba(0, 0, 0)',
      }, 
      spacing: {
        '128': '23rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '14': '14px',
        '16': '16px',
        "10": "10px"
      },
      height: {
        '128': '30rem'
      },
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white:" hsl(0, 0%, 100%)",
        gray500: "hsl(0, 0%, 42%)",
        gray950: "hsl(0, 0%, 7%)"
      }
    },
  },
  plugins: [],
}

