const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  plugins: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    extend: {
      maxHeight: {
        sidebar: '50vh'
      }
    }
  },
  variants: {
    extend: {
      margin: ['first']
    }
  }
}
