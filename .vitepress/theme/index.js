import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/Layout.vue'
import './styles/index.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout
}
