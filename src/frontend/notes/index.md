# 页面平滑滚动

通常在 HTML 中我们使用 `<a href=""></a>` 来跳转页面，但是这样的跳转会有一个问题，就是滚动条会瞬间定位到目标位置，没有任何反应，以至于显得特别僵硬。

浏览器似乎也意识到了这一点，现在开始已经支持浏览器的原生平滑滚动定位，CSS 的 `scroll-behavior` 属性和 JS 的 `scrollIntoView()` 方法。

## CSS scroll-behavior

`scroll-behavior` 是一个 CSS 属性，默认值为‘auto’。写在滚动元素上，可以实现元素的平滑滚动。

```css
html {
  scroll-behavior: smooth;
}
```

写在 HTML 上，页面跳转时也能实现平滑滚动。此时，使用 JS 的 `window.scrollTo(0, 0)` 方法也有了平滑滚动的效果。

## JS scrollIntoView

DOM 元素的 `scrollIntoView()` 方法是一个 IE6 浏览器也支持的原生 JS API，可以让元素进入视区，触发滚动到容器的定位实现。添加其中的 `behavior` 参数就可以使滚动变得平滑。

```js
document.body.scrollIntoView({
  behavior: 'smooth'
})
```

更多使用方法查看 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)。

## 使用 requestAnimationFrame API

[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame) 告诉浏览器执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。`requestAnimationFrame` 具有更高的性能。

自定义一个 `scrollSmoothTo` 函数，平滑滚动到页面的任意位置。

```js
/**
 * 平滑滚动到页面指定位置
 * position: 滚动到的位置
 * distance: 位移间距
 * stopScroll: 是否停止滚动
 * scrollTop: 滚动条高度
 * scrollUp: 是否向上滚动
 */
const scrollSmoothTo = (position) => {
  let distance = 0
  let stopScroll = false
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollUp = position < scrollTop
  window.addEventListener('wheel', () => (stopScroll = true))
  return (function scroll() {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollUp ? position + distance >= scrollTop : position - distance <= scrollTop) {
      window.scrollTo(0, position)
      distance = 0
      stopScroll = true
    }
    if (stopScroll) return
    distance++
    window.scrollTo(0, scrollUp ? scrollTop - distance : scrollTop + distance)
    window.requestAnimationFrame(scroll)
  })()
}
```

::: tip
如果 CSS 中使用了 `scroll-behavior: smooth;` 属性，该方法不生效，因为浏览器会自动实现平滑滚动。
:::
