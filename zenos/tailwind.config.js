/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors : {
        'custom-blue': '#244855',
        'custom-orange': '#E64833'
      }
    },
  },
  plugins: [],
}

