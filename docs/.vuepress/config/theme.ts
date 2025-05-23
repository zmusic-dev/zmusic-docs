import { hopeTheme } from 'vuepress-theme-hope'
import { navbarEn, navbarZh } from './navbar'
import { sidebarEn, sidebarZh } from './sidebar'

export default hopeTheme({
  repo: 'zmusic-dev/zmusic-server',
  docsRepo: 'zmusic-dev/zmusic-docs',
  docsDir: 'docs',
  darkmode: 'enable',
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
    }
  }
})
