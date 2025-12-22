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
      id: '275aafc6-4a33-4a94-84d0-43907ab56013',
      link: 'https://umami.zhenxin.me/script.js'
    })
  ]
})
