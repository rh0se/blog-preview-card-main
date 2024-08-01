/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '28rem'
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

