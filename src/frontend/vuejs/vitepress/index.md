# VitePress

- [文档](https://vitepress.vuejs.org/)
- [Github](https://github.com/vuejs/vitepress)
- [VuePress](https://v2.vuepress.vuejs.org/zh/guide/)

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
