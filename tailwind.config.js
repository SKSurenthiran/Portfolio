/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :
      {
      "primary" : "#000000",
      "secondary" : "#FC8A19",
      "tertiary" : "#31F6CF",
      }
    },
    screens: {
      'lg': {'max': '2023px'},
      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}