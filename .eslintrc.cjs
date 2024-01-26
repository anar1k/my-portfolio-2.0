module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreHTMLAttributeValues: true,
      ignoreRegExpLiterals: true,
      ignoreHTMLTextContents: true
    }],

    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 1 },
      multiline: { max: 1 }
    }],

    'semi': ['error', 'always'],
  }
};
