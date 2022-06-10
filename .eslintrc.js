module.exports = {
  root: true,

  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/prettier'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'linebreak-style': ['error', 'windows'],
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
