# VitePress

- [文档](https://vitepress.vuejs.org/)
- [Github](https://github.com/vuejs/vitepress)
- [VuePress](https://v2.vuepress.vuejs.org/zh/guide/)

## 配置 {#config}

### 配置文件 {#config-file}

VitePress 站点的基本配置文件是 `.vitepress/config.js `，基础的配置文件是这样的：

```js
module.exports = {
  lang: 'zh-CN',
  title: 'Hello Vitepress',
  description: '这是一个 Vitepress 站点'
}
```

::: tip
目前 VitePress 包含的所有配置可以查看 [config.ts](https://github.com/vuejs/vitepress/blob/main/src/node/config.ts)
:::

## Markdown 扩展 {#markdown-extension}

### 目录 {#toc}

使用 `##` 的目录会在主题右侧 `ON THIS PAGE` 下显示。
如果包含中文字符，切换目录时会有如下报错：

![An image](./images/切换目录报错.png)

这是因为目录中的中文字符会被作为描点应用到 URL 中，主题无法识别导致报错。<br/>
使用如下写法把中文字符转换为英文描点：

```md
## 目录 {#toc}
```
