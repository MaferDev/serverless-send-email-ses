module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: false
  },
  plugins: [],
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
  }
};
