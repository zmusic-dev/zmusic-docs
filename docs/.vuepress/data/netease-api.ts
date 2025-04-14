const neteaseApiList: NeteaseApiData[] = [
  {
    link: 'https://zm.armoe.cn', // API地址
    location: '上海', // 位置
    provider: {
      name: '真心', // 提供者名称
      link: 'https://github.com/RealHeart' // 提供者链接
    }
  },
  {
    link: 'https://zm.i9mr.com',
    location: '扬州',
    provider: {
      name: '墨染云',
      link: 'https://i9mr.com'
    }
  },
  {
    link: 'https://music.mcseekeri.com',
    location: '美国',
    provider: {
      name: 'MCSeekeri',
      link: 'https://github.com/MCSeekeri'
    }
  }
]

export interface NeteaseApiData {
  link: string
  location: string
  provider: {
    name: string
    link: string
  }
}

export default neteaseApiList
