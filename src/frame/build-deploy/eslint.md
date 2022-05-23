# eslint

## 配置 eslint {#config-eslint}

Vue 3 项目推荐配置

```sh
> pnpm add -D eslint eslint-plugin-vue eslint-config-prettier
```

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/eslint-config-prettier']
}
```

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
