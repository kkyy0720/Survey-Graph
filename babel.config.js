module.exports = {
  presets: ['next/babel', '@emotion/babel-preset-css-prop'],
  env: {
    production: {
      plugins: ['react-remove-properties'],
    },
  },
};
