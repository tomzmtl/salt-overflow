module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    mocha: true,
  },
  globals: {
    expect: true,
  },
  rules: {
    'jsx-a11y/img-has-alt': 'off',
    'react/forbid-prop-types': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'warn',
  },
};
