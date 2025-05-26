import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'
import theme from './config/theme'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  bundler: viteBundler(),
  port: 6480,
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    ['script', { src: 'https://cdn.zhenxin.me/static/js/autoGray.js' }]
  ],
  title: 'ZMusic',
  locales: {
    '/': {
      title: 'ZMusic 使用文档',
      lang: 'zh-CN'
    },
    '/en/': {
      title: 'ZMusic Docs',
      lang: 'en-US'
    }
  },
  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    umamiAnalyticsPlugin({
      id: '16cafa7e-6354-4307-b7b1-b3b3d013b7e2',
      link: 'https://umami.zhenxin.me/script.js'
    })
  ]
})
