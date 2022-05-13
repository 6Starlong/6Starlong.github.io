module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    browser: true,
    'vue/setup-compiler-macros': true
  },
  // 通用规则集
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/eslint-config-prettier'],
  // 覆盖/新增规则
  rules: {
    // 'vue-unused-vars': 'error'
    // 'no-console': 'warn'
  },
  globals: {
    L2Dwidget: true
  }
}
