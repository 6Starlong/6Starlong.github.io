# Vite

- [文档](https://cn.vitejs.dev/)
- [Github](https://github.com/vitejs/vite)

## 静态资源处理 {#static-asset-handling}

- 相关：[文档](https://cn.vitejs.dev/guide/assets.html#static-asset-handling)
- 相关：[公共基础路径](https://cn.vitejs.dev/guide/build.html#public-base-path)

### 资源引入 {#asset-import}

静态资源在生产构建后会被转换，行为类似于 Webpack 的 `file-loader`。例如，开发时的 `/img.png` 文件在生产构建后会是 `/assets/img.2d8efhg.png`。

服务时引入一个静态资源会返回解析后的公共路径：

```js
import imgUrl from './img.png'
document.getElementById('hero-img').src = imgUrl
```

- `url()` 在 CSS 中的引用、Vue SFC 模板中的资源引用都将自动转换为导入。

- 常见的图像、媒体和字体文件类型被自动检测为资源。可以使用 `assetsInclude` [配置项](https://cn.vitejs.dev/config/#assetsinclude)扩展内部列表。

- 较小的资源体积小于 assetsInlineLimit [选项值](https://cn.vitejs.dev/config/#build-assetsinlinelimit)则会被内联为 base64 data URL。

### 显式 URL 引入 {#url-import}

未被包含在内部列表或 `assetsInclude` 中的资源，可以使用 `?url` 后缀显式导入为一个 URL。

```js
import workletURL from 'extra-scalloped-border/worklet.js?url'
CSS.paintWorklet.addModule(workletURL)
```

### 将资源引入为字符串 {#asset-import-as-string}

```js
import shaderString from './shader.glsl?raw'
```

### public 目录 {#public-directory}

一些不需要被源码引用、必须保持原文件名，或者只想得到其 URL 的文件，可以放到 `public` 目录中。

该目录中的资源在开发时能直接通过 `/` 根路径访问到，并且打包时会被完整复制到目标目录的根目录下。`public/icon.png` 应该在源码中被引用为 `/icon.png`

目录默认是 `<root>/public`，但可以通过 publicDir [选项](https://cn.vitejs.dev/config/#publicdir)来配置。

### new URL(url，import.meta.url)

[import.meta.url](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import.meta) 是一个 ESM 的原生功能，会暴露当前模块的 URL。
在一个 JavaScript 模块中，通过相对路径我们就能得到一个被完整解析的静态资源 URL：

```js
const imgUrl = new URL('./img.png', import.meta.url).href
document.getElementById('hero-img').src = imgUrl
```

这个模式可以通过字符串模板支持动态 URL，开发过程中可以封装成一个工具函数，便于在其他地方调用：

```js
function getAssetsUrl(name) {
  return new URL(`./assets/${name}`, import.meta.url).href
}
```
