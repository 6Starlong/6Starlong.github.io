import { VPTheme } from '@vue/theme'
import './styles/index.css'

import ThemeLayout from './components/ThemeLayout.vue'

export default {
  ...VPTheme,
  Layout: ThemeLayout
}

// 禁用img标签的原生drag功能
document.body.addEventListener('dragstart', (e) => {
  if (e.target.nodeName.toLowerCase() === 'img') {
    e.preventDefault()
  }
})
