import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vitepress'
import baseConfig from '@vue/theme/config'

const nav = [
  {
    text: '首页',
    link: '/',
    activeMatch: ``
  },
  {
    text: '前端开发笔记',
    activeMatch: `^/frontend/`,
    items: [
      { text: 'Vue', link: '/frontend/vuejs/' },
      { text: 'Vite', link: '/frontend/vitejs/' },
      { text: 'VitePress', link: '/frontend/vitepress/' },
      { text: 'Node', link: '/frontend/nodejs/pnpm' },
      { text: '构建部署', link: '/frontend/build-deploy/' },
      { text: '其他', link: '/frontend/other/git.md' }
    ]
  },
  {
    text: '⭐ Stars',
    link: '/stars/developer',
    activeMatch: `^/stars/`
  },
  {
    text: '关于',
    link: '/about/',
    activeMatch: `^/about/`
  }
]

export const sidebar = {
  '/frontend/': [
    {
      text: 'Vue',
      items: []
    },
    {
      text: 'Vite',
      items: [{ text: 'Vite 笔记', link: '/frontend/vitejs/' }]
    },
    {
      text: 'VitePress',
      items: [
        { text: 'VitePress 笔记', link: '/frontend/vitepress/' },
        { text: '@vue/theme 主题', link: '/frontend/vitepress/theme' },
        { text: '主题美化', link: '/frontend/vitepress/beautify' }
      ]
    },
    {
      text: 'Node',
      items: [{ text: 'pnpm 包管理器', link: '/frontend/nodejs/pnpm' }]
    },
    {
      text: '构建部署',
      items: [
        { text: '代码提交规范化', link: '/frontend/build-deploy/git-hook' },
        { text: 'verify-commit', link: '/frontend/build-deploy/verify-commit' },
        { text: 'changelog 生成日志', link: '/frontend/build-deploy/changelog' },
        { text: 'eslint 代码检查工具', link: '/frontend/build-deploy/eslint' }
      ]
    },
    {
      text: '其他',
      items: [
        { text: 'Git 笔记', link: '/frontend/other/git' },
        { text: 'VsCode', link: '/frontend/other/vscode' }
      ]
    }
  ],
  '/stars/': [
    {
      text: 'Stars',
      items: [
        { text: 'Developer', link: '/stars/developer' },
        { text: 'WebSite', link: '/stars/website' },
        { text: 'Windows 系统', link: '/stars/windows' },
        { text: 'Chrome 拓展', link: '/stars/chrome' },
        { text: '应用程序', link: '/stars/app' }
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
  outDir: 'dist',
  lastUpdated: true,

  // 从head引入
  head: [
    [
      'script', // 阿里字体图标 https://www.iconfont.cn/
      {
        src: 'https://at.alicdn.com/t/font_2779014_a932u7n2hl.js?spm=a313x.7781069.1998910419.88&file=font_2779014_a932u7n2hl.js'
      }
    ],
    [
      'script', // L2Dwidget https://l2dwidget.js.org/lib/L2Dwidget.min.js
      {},
      fs.readFileSync(path.resolve(__dirname, './lib/live2d-widget/L2Dwidget.min.js'), 'utf8')
    ],
    [
      'script', // L2Dwidget https://l2dwidget.js.org/lib/L2Dwidget.0.min.js
      {},
      fs.readFileSync(path.resolve(__dirname, './lib/live2d-widget/L2Dwidget.0.min.js'), 'utf8')
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
      apiKey: '09722d8e15c686b4057e13ec2b7b0970',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },
    // 首页链接
    homeLinks: [
      { icon: 'github', link: 'https://github.com/6Starlong' },
      { icon: 'blog', link: '/', default: true }
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
    // 定义 public 目录
    publicDir: path.resolve(__dirname, '../public'),
    // 设置vite目录别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, ''), // .vitepress
        '@src': path.resolve(__dirname, '../src')
      }
    }
  }
})
