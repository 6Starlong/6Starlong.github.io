import { VPTheme } from '@vue/theme'
import ThemeLayout from './components/ThemeLayout.vue'
import ThemeBlog from './components/ThemeBlog.vue'
import YiYan from './components/YiYan.vue'
import './styles/index.css'

export default {
  ...VPTheme,
  Layout: ThemeLayout,
  enhanceApp: ({ app }) => {
    // 注册全局组件
    app.component('ThemeBlog', ThemeBlog)
    app.component('YiYan', YiYan)
  }
}
