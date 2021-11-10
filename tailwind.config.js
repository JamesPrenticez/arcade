module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "500px": "500px"
      },
      width: {
        "500px": "500px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
