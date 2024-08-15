/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark : "hsl(207, 26%, 17%) ",
        elementDark : "hsl(209, 23%, 22%) ",
        bgLight : " hsl(0, 0%, 98%)"
      }
    },
  },
  plugins: [],
}