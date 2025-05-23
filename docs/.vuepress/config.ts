import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
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
    [
      'script',
      {
        async: true,
        src: 'https://umami.zhenxin.me/script.js',
        'data-website-id': 'a799e189-cf7e-4f5a-ac98-71de364f3637'
      }
    ],
    ['script', { src: 'https://cdn.armoe.cn/static/js/autoGray.js' }]
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
    })
  ]
})
