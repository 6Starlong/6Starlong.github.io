---
outline: deep
---

# Lodash

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

Lodash 通过消除使用数组、数字、对象、字符串等的麻烦，使 JavaScript 变得更容易。
Lodash 的模块化方法非常适合：

- 迭代数组、对象和字符串
- 操作和测试值
- 创建复合函数

## 安装 {#install}

浏览器环境：

```html
<script src="https://unpkg.com/lodash@4.17.21"></script>
```

使用 npm：

```sh
> npm install lodash
```

Node.js：

```js
// Load the full build.
var _ = require('lodash')
// Load the core build.
var _ = require('lodash/core')
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp')

// Load method categories.
var array = require('lodash/array')
var object = require('lodash/fp/object')

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at')
var curryN = require('lodash/fp/curryN')
```

## 使用方法 {#usage}

```js
import _ from 'lodash'
```

以 Lodash 的 \_.times 和 \_.map 方法为例：

```js
// 原生 js
const arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
  console.log(i)
}
// => 0 1 2

// lodash
_.times(3, String)
// => ['0', '1', '2']
_.times(3, (n) => console.log(n))
// => 0 1 2
```

```js
// Array.prototype.map()
const arr = [1, 2, 3, 4, 5]
arr.map((n) => n * 2)
// => [2, 4, 6, 8, 10]

// lodash
_.map([4, 8], (n) => n * n)
// => [16, 64]
_.map({ a: 4, b: 8 }, (n) => n * n)
// => [16, 64]
_.map([{ user: 'barney' }, { user: 'fred' }], 'user')
// => ['barney', 'fred']
```

Lodash 特点就是一致性、模块化、高性能。使用一个简单的 `_` 符号，直接调用 Lodash 封装好的方法，帮助我们提高开发效率。

<hr/>

相关文档：

- [Lodash 文档](https://lodash.com/docs)
- [中文文档](https://www.lodashjs.com)
