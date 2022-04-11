import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Sᴛᴀʀʟᴏɴɢ💫',
  description: '我们只能耸耸肩说“好吧”！',
  srcDir: 'src',

  themeConfig: {
    logo: '/avatar.png',
    repo: '6Starlong/6Starlong.github.io',

    nav: getNav(),
    sidebar: getSidebar()
  }
})

function getNav() {
  return [
    {
      text: '前端开发笔记',
      link: '/frontend/',
      activeMatch: `^/frontend/`
    },
    {
      text: 'Playground',
      link: 'https://sfc.vuejs.org'
    }
  ]
}

function getSidebar() {
  return {
    '/frontend/': [
      {
        text: '前端开发笔记',
        children: [
          { text: 'JavaScript', link: '/frontend/javascript' },
          { text: 'Html', link: '/frontend/html' },
          { text: 'Css', link: '/frontend/css' },
          { text: 'Git', link: '/frontend/git' }
        ]
      }
    ]
  }
}
