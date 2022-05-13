import { VPTheme } from '@vue/theme'
import './styles/index.css'

import ThemeLayout from './components/ThemeLayout.vue'

export default {
  ...VPTheme,
  Layout: ThemeLayout
}
