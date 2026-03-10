const neteaseApiList: NeteaseApiData[] = [
  {
    link: 'https://ncm.zhenxin.me',
    location: {
      '/': '上海',
      '/en/': 'Shanghai'
    },
    provider: {
      name: '真心',
      link: 'https://github.com/RealHeart'
    }
  },
  {
    link: 'https://zm.i9mr.com',
    location: {
      '/': '扬州',
      '/en/': 'Yangzhou'
    },
    provider: {
      name: '墨染云',
      link: 'https://i9mr.com'
    }
  },
  {
    link: 'https://music.mcseekeri.com',
    location: {
      '/': '美国',
      '/en/': 'USA'
    },
    provider: {
      name: 'MCSeekeri',
      link: 'https://github.com/MCSeekeri'
    }
  },
  {
    link: 'https://zm.wwoyun.cn',
    location: {
      '/': '宁波',
      '/en/': 'Ningbo'
    },
    provider: {
      name: '蓝钦',
      link: 'https://github.com/LanQin996'
    }
  }
]

export interface NeteaseApiData {
  link: string
  location: Record<string, string>
  provider: {
    name: string
    link: string
  }
}

export default neteaseApiList
