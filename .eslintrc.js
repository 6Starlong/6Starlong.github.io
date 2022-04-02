module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    browser: true
  },
  // 通用规则集
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  // 覆盖/新增规则
  rules: {
    // 'vue-unused-vars': 'error'
    // 'no-console': 'warn'
  }
}
