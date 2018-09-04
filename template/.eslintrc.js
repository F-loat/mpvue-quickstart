// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    parser: 'babel-eslint'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  'extends': [
    'plugin:vue/recommended',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  'rules': {
    "vue/max-attributes-per-line": ["error", {
      "multiline": {
        "allowFirstLine": true
      }
    }],
    "vue/html-indent": ["error", 2, {
      "alignAttributesVertically": false
    }],
    'prettier/prettier': ['error', {
      'semi': false,
      'singleQuote': true
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true
  }
}