import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'
import { llmsPlugin } from '@vuepress/plugin-llms'
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
    ['script', { src: 'https://cdn.zhenxin.me/static/js/autoGray.js' }],
    ['meta', { name: 'author', content: 'ZhenXin' }],
    ['meta', { name: 'keywords', content: 'ZMusic, Minecraft, Plugin, Music, 点歌插件, 网易云音乐, BungeeCord, Spigot, Velocity' }],
    ['meta', { name: 'description', content: 'ZMusic - 多功能、易上手的 Minecraft 跨平台点歌插件，支持 Spigot、BungeeCord、Velocity' }]
  ],
  title: 'ZMusic',
  locales: {
    '/': {
      title: 'ZMusic 使用文档',
      lang: 'zh-CN',
      description: 'ZMusic - 多功能、易上手的 Minecraft 跨平台点歌插件'
    },
    '/en/': {
      title: 'ZMusic Docs',
      lang: 'en-US',
      description: 'ZMusic - Versatile, easy-to-use cross-platform music player plugin for Minecraft'
    }
  },
  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    umamiAnalyticsPlugin({
      id: 'c5a252ad-badb-488e-80c8-81c366119027',
      link: 'https://umami.zhenxin.me/script.js'
    }),
    llmsPlugin({
      domain: 'https://zmusic.zhenxin.me',
      locale: 'all'
    })
  ]
})
