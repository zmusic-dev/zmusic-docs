import { navbar } from 'vuepress-theme-hope'

const navbarZh = navbar([
  { text: '首页', link: '/', icon: 'home' },
  { text: '指南', link: '/guide/README.md', icon: 'lightbulb' },
  { text: '常见问题', link: '/faq.md', icon: 'circle-question' },
  {
    text: 'QQ群',
    link: 'https://jq.qq.com/?_wv=1027&k=9Xs1RMt5',
    icon: 'fa-brands fa-qq'
  }
])

const navbarEn = navbar([
  { text: 'Home', link: '/en/', icon: 'home' },
  { text: 'Guide', link: '/en/guide/README.md', icon: 'lightbulb' },
  { text: 'FAQ', link: '/en/faq.md', icon: 'circle-question' },
  {
    text: 'Discord',
    link: 'https://discord.gg/twQgJNufYn',
    icon: 'fa-brands fa-discord'
  }
])

const navbarZhTw = navbar([
  { text: '首頁', link: '/zh-tw/', icon: 'home' },
  { text: '指南', link: '/zh-tw/guide/README.md', icon: 'lightbulb' },
  { text: '常見問題', link: '/zh-tw/faq.md', icon: 'circle-question' },
  {
    text: 'Discord',
    link: 'https://discord.gg/twQgJNufYn',
    icon: 'fa-brands fa-discord'
  }
])

const navbarJa = navbar([
  { text: 'ホーム', link: '/ja/', icon: 'home' },
  { text: 'ガイド', link: '/ja/guide/README.md', icon: 'lightbulb' },
  { text: 'よくある質問', link: '/ja/faq.md', icon: 'circle-question' },
  {
    text: 'Discord',
    link: 'https://discord.gg/twQgJNufYn',
    icon: 'fa-brands fa-discord'
  }
])

export { navbarZh, navbarEn, navbarZhTw, navbarJa }
