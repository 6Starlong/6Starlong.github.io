import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vitepress'
import baseConfig from './VPTheme/vitepress/config/baseConfig.js'

const nav = [
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

const sidebar = {
  '/frontend/': [
    {
      text: '前端开发笔记',
      items: [
        { text: 'JavaScript', link: '/frontend/javascript' },
        { text: 'Html', link: '/frontend/html' },
        { text: 'Css', link: '/frontend/css' },
        { text: 'Git', link: '/frontend/git' }
      ]
    }
  ]
}

export default defineConfig({
  extends: baseConfig,

  lang: 'zh-CN',
  title: 'Sᴛᴀʀʟᴏɴɢ💫',
  description: '我们只能耸耸肩说“好吧”！',
  srcDir: 'src',

  // 从head引入
  head: [
    [
      // 阿里字体图标 https://www.iconfont.cn/
      'script',
      {
        src: 'https://at.alicdn.com/t/font_2779014_a932u7n2hl.js?spm=a313x.7781069.1998910419.88&file=font_2779014_a932u7n2hl.js'
      }
    ]
  ],

  themeConfig: {
    logo: '/avatar.png',
    repo: '6Starlong/6Starlong.github.io',

    nav,
    sidebar,

    // algolia 搜索
    algolia: {
      indexName: 'vitepress',
      appId: 'RW1NM5N1BT',
      apiKey: '09722d8e15c686b4057e13ec2b7b0970'
      // searchParameters: {
      //   facetFilters: ['version:v3']
      // }
    },
    // 社区链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/6Starlong' }],
    // 底部信息
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()}. Powered by Sᴛᴀʀʟᴏɴɢ💫`
    }
  },
  // markdown插件
  markdown: {},

  vite: {
    // 设置vite目录别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '') // .vitepress
      }
    }
  }
})
