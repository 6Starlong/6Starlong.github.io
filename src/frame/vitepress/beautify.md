# 主题美化

## 添加看板娘卡通动画

- [API](https://l2dwidget.js.org/docs/index.html)
- [Github](https://github.com/xiazeyu/live2d-widget.js)

### 用法 {#live2d-usage}

1. 引入 L2Dwidget.min.js
2. 引入模板文件 live2d-widget-model-shizuku
3. 初始化

```js
L2Dwidget.init({
  model: {
    jsonPath: 'packages/live2d-widget-model-shizuku/assets/shizuku.model.json'
  }
})
```

效果：
![An Image](./images/live2d-widget-model-shizuku.png)

#### 引入地址 {#live2d-import}

- 从 live2d 官网引入 [L2Dwidget.min.js](https://l2dwidget.js.org/lib/L2Dwidget.min.js)

- 使用 unpkg 引入 [L2Dwidget.min.js](https://unpkg.com/browse/live2d-widget@3.1.4/lib/L2Dwidget.min.js)

- 使用 unpkg 引入模型 [live2d-widget-model-shizuku](https://unpkg.com/browse/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json)

在 [Github](https://github.com/search?q=live2d-widget-model) 或 [NPM](https://www.npmjs.com/search?q=live2d-widget-model) 上查找更多 live2d-widget-models 模型。

### 配置 {#live2d-config}

```js
L2Dwidget.init({
  // 模型
  model: { json: '', scale: 0.5 },
  // 定位
  display: { position: 'left', width: 240, height: 480, hOffset: 50, vOffset: -50 },
  // 移动端兼容
  mobile: { show: true, scale: 0.5 },
  // 对话框
  dialog: {
    enable: true,
    script: { 'tap body': '哎呀！别碰我！' }
  }
})
L2Dwidget.on('*', (name) => {
  console.log('事件为： ' + name)
})
```

### 添加到当前站点 {#live2d-of-current-site}

在 `.vitepress/lib/live2d-widget` 目录下创建 `L2Dwidget.min.js` 和 `L2Dwidget.min.0.js` 两个文件，复制源码到这两个文件中。

使用本地引用的方式加载 `L2Dwidget.min.js`，通过修改去除源码中的打印及报错信息，并且可以避免文件丢失。模型通过 cdn 加载方便更换模型，本地引用模型文件需要放在 `public` 目录中，确保不会被转换。

```js
// .vitepress/config.js
defineConfig({
  head: [
    [
      'script',
      {},
      fs.readFileSync(path.resolve(__dirname, './lib/live2d-widget/L2Dwidget.min.js'), 'utf8')
    ],
    [
      'script',
      {},
      fs.readFileSync(path.resolve(__dirname, './lib/live2d-widget/L2Dwidget.0.min.js'), 'utf8')
    ]
  ]
})
```

```js
onMounted(() => {
  L2Dwidget.init({
    model: {
      // 使用 live2d-widget-model-violet 的模型
      jsonPath: 'https://unpkg.com/live2d-widget-model-violet@1.0.0/assets/14.json',
      scale: 1.5
    },
    display: { position: 'left', width: 240, height: 480, hOffset: 50, vOffset: -50 },
    mobile: { show: false }
  })
})
```

## 鼠标点击特效 {#click-effect}

创建 `.vitepress/lib/cursor-effects.js` 文件，复制[源码](https://blog-static.cnblogs.com/files/axqa/cursor-effects.js)。

该特效插件使用浏览器 API 创建 DOM，由于 Vitepress 应用程序[浏览器 API 访问限制](/frame/vitepress/#browser-api-access-restrictions)，在 `mounted` 钩子中动态导入：

```js
onMounted(() => {
  import('@/lib/cursor-effects')
})
```
