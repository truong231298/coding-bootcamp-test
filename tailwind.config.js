/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'DarkBlue': 'hsl(240, 38%, 20%)',
        'GrayishBlue': 'hsl(240, 18%, 77%)'

      },
      backgroundImage:{
        "bg-pattern": "url('/images/pattern-bg.svg')",
        "pattern-curve": "url('/images/pattern-curve.svg')",
        "pattern-quotes": "url('/images/pattern-quotes.svg')",
      }
    },
  },
  plugins: [],
}