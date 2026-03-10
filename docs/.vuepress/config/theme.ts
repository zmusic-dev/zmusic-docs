import { hopeTheme } from 'vuepress-theme-hope'
import { navbarEn, navbarZh } from './navbar'
import { sidebarEn, sidebarZh } from './sidebar'

export default hopeTheme({
  repo: 'zmusic-dev/zmusic-server',
  docsRepo: 'zmusic-dev/zmusic-docs',
  docsDir: 'docs',
  toc: false,
  copyright: `&copy;${new Date().getFullYear()} <a href="https://zhenxin.me" target="_blank">ZhenXin</a> All Rights Reserved.`,
  locales: {
    '/': {
      navbar: navbarZh,
      sidebar: sidebarZh
    },
    '/en/': {
      navbar: navbarEn,
      sidebar: sidebarEn
    }
  },
  plugins: {
    icon: {
      assets: 'fontawesome-with-brands'
    },
    redirect: {
      config: {
        '/zh-cn/deploy-api/netease-api.html': '/netease-api.html'
      }
    },
    // 本地搜索
    slimsearch: {
      isSearchable: (page) => page.path !== '/',
      locales: {
        '/': {
          placeholder: '搜索文档'
        },
        '/en/': {
          placeholder: 'Search docs'
        }
      }
    },
    sitemap: {
      hostname: 'https://zmusic.zhenxin.me'
    }
  }
})
