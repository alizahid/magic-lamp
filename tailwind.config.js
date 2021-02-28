const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  plugins: [],
  purge: [],
  theme: {
    colors,
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
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
