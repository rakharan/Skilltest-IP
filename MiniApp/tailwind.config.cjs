/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#13a458",
        "primary-light": "#42b679",
        "primary-dark": "#0f8346",
        "emas": "#f9813a"
      }
    },
  },
  plugins: [],
}