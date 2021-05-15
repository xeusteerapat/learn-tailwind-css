module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover'], // To enable fontsize ob hover. But maybe you don't want to do this, this is just for learning
    },
  },
  plugins: [],
};
