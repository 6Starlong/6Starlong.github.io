module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    browser: true,
    // vue 3 requires this
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/eslint-config-prettier'],
  rules: {},
  globals: {
    $: true,
    $ref: true,
    L2Dwidget: true
  }
}
