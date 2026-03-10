import { hopeTheme } from 'vuepress-theme-hope'
import { navbarEn, navbarZh, navbarZhTw, navbarJa } from './navbar'
import { sidebarEn, sidebarZh, sidebarZhTw, sidebarJa } from './sidebar'

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
    },
    '/zh-tw/': {
      navbar: navbarZhTw,
      sidebar: sidebarZhTw
    },
    '/ja/': {
      navbar: navbarJa,
      sidebar: sidebarJa
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
        },
        '/zh-tw/': {
          placeholder: '搜尋文件'
        },
        '/ja/': {
          placeholder: 'ドキュメントを検索'
        }
      }
    },
    sitemap: {
      hostname: 'https://zmusic.zhenxin.me'
    }
  }
})
