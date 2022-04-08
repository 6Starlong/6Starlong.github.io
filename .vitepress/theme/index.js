import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/Layout.vue'
import 'https://at.alicdn.com/t/font_2779014_a932u7n2hl.js?spm=a313x.7781069.1998910419.88&file=font_2779014_a932u7n2hl.js'
import './styles/index.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout
}
