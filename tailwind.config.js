/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{html,js}",
    "./index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
  darkMode: "class"
}

