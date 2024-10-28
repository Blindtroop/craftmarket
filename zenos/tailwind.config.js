/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],  theme: {
    extend: {
      colors : {
        'custom-blue': '#28282B	',
        'custom-orange': '#E64833'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

