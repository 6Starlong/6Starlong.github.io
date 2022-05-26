# eslint

## 配置 eslint {#config-eslint}

### Vue 3 项目推荐配置 {#config-vue3-recommend}

```sh
> npm install -D eslint eslint-plugin-vue eslint-config-prettier
```

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/eslint-config-prettier']
}
```

## 注意事项 {#config-eslint-notice}

ESLint 默认忽略 `.` 开头的目录 (这些路径在 Linux 系统上表示隐藏目录)。列入 `.vitepress` 目录的文件将不会被 ESLint 检查。
你可以尝试在 `.eslintignore` 里加入一条 `!/.vitepress`，`!` 开头表示不排除。

群众们也吐槽过这点，官方没给解释也没有改变这个“feature”。
https://github.com/eslint/eslint/issues/10341 <br/>
https://github.com/eslint/eslint/issues/8429

## eslint-plugin-vue

[官方文档](https://eslint.vuejs.org/)

- `no-undef`

  需要在 ESLint 配置文件中启用编译器宏环境

  require is not defined

```js
module.exports = {
  env: {
    node: true
  }
}
```

      defineProps is not defined

```js
module.exports = {
  env: {
    'vue/setup-compiler-macros': true
  }
}
```

- `vue/require-default-prop`

  Prop should define at least its type

  Prop requires default value to be set

  需要在 props 中定义类型和默认值

```js
// in <script setup>
defineProps({
  title: { type: String, default: '' },
  likes: { type: Number, default: 0 }
})
```
