// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'], // Adjust the paths to match your project structure
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false,
//   theme: {
//     extend: {},
//   },
//   variants: {},
//   plugins: [],
// };
