/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#2E2E2E',
        'primary-purple': '#BB86FC',
      },
    },
  },
  plugins: [],
}