import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vitepress'
import baseConfig from './VPTheme/vitepress/config/baseConfig.js'

const nav = [
  {
    text: '前端开发笔记',
    activeMatch: `^/frontend/`,
    items: [
      { text: 'Web', link: '/frontend/index' },
      { text: 'Vue', link: '/frontend/vuejs/' },
      { text: 'Node', link: '/frontend/nodejs/' },
      { text: '其他', link: '/frontend/other/' }
    ]
  },
  {
    text: '⭐ Stars',
    link: '/stars/',
    activeMatch: `^/stars/`
  },
  {
    text: '关于',
    link: '/about/custom-theme',
    activeMatch: `^/about/`
  }
]

const sidebar = {
  '/frontend/': [
    {
      text: 'Web',
      items: [
        { text: 'JavaScript', link: '/frontend/javascript' },
        { text: 'Html', link: '/frontend/html' },
        { text: 'Css', link: '/frontend/css' }
      ]
    },
    {
      text: 'Vue',
      items: [{ text: 'VitePress 踩坑笔记', link: '/frontend/vuejs/vitepress' }]
    },
    {
      text: 'Node',
      items: [{ text: '生成日志（Changelog ）', link: '/frontend/nodejs/changelog' }]
    },
    {
      text: '其他',
      items: [{ text: 'Git 笔记', link: '/frontend/other/' }]
    }
  ],
  '/stars/': [
    {
      text: 'Stars',
      items: [
        { text: 'VsCode 编辑器', link: '/stars/vscode' },
        { text: 'Windows 系统', link: '/stars/windows' },
        { text: 'Chrome 拓展', link: '/stars/chrome' },
        { text: '网站推荐', link: '/stars/website' },
        { text: '应用程序', link: '/stars/app' }
      ]
    }
  ],
  '/about/': [
    {
      text: '关于',
      items: [{ text: '本站主题', link: '/about/custom-theme' }]
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
    // 首页链接
    homeLinks: [
      { icon: 'github', link: 'https://github.com/6Starlong' },
      { icon: 'blog', link: '/frontend/', default: true }
    ],
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
