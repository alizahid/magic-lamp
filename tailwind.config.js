const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  plugins: [],
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
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
