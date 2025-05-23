<template>
  <div>
    <table>
      <thead>
        <th>渠道</th>
        <th>版本</th>
        <th>发布</th>
        <th>下载</th>
      </thead>
      <tbody>
        <tr v-for="item in list">
          <td><a target="_blank" :href="item.source.link">{{ item.source.name }}</a></td>
          <td>{{ item.version }}</td>
          <td><a target="_blank" :href="item.release">点击查看</a></td>
          <td>
            <span v-for="download in item.download">
              <a target="_blank" :href="download.link">{{ download.name }}</a>
              <br />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <ul></ul>
  </div>
</template>

<script lang="ts" setup>
import { Ref, onMounted, ref } from 'vue'

interface DownloadItem {
  source: {
    name: string,
    link: string
  }
  version: string
  release: string
  download: [
    {
      name: string,
      link: string
    }
  ]
}

const list: Ref<DownloadItem[]> = ref([])

const githubLatestRelease = async () => {
  const res = await fetch('https://api.github.com/repos/zmusic-dev/zmusic-server/releases/latest')
  const data = await res.json()
  return {
    source: {
      name: 'Github Releases',
      link: 'https://github.com/zmusic-dev/zmusic-server/releases'
    },
    version: data.tag_name,
    release: data.html_url,
    download: data.assets.map((item: any) => {
      return {
        name: item.name,
        link: item.browser_download_url
      }
    })
  }
}

const githubRunartifacts = async (run: any) => {
  const res = await fetch(`https://api.github.com/repos/zmusic-dev/zmusic-server/actions/runs/${run.id}/artifacts`)
  const data = await res.json()
  return data.artifacts.map((item: { name: any; id: any; }) => {
    return {
      name: `${item.name}.zip`,
      link: `https://github.com/zmusic-dev/zmusic-server/actions/runs/${run.id}/artifacts/${item.id}`
    }
  })
}

const githubLatestBuild = async () => {
  const res = await fetch('https://api.github.com/repos/zmusic-dev/zmusic-server/actions/workflows/dev.yml/runs?per_page=1')
  const data = await res.json()
  const run = data.workflow_runs[0]
  return {
    source: {
      name: 'Github Actions',
      link: 'https://github.com/zmusic-dev/zmusic-server/actions/workflows/dev.yml'
    },
    version: `v4.0.0-dev.${run.head_sha.substring(0, 7)}`,
    release: run.html_url,
    download: await githubRunartifacts(run)
  }
}

const giteeLatestRelease = async () => {
  const res = await fetch('https://gitee.com/api/v5/repos/zmusic-dev/zmusic-server/releases/latest')
  const data = await res.json()
  return {
    source: {
      name: 'Gitee 发行版',
      link: 'https://gitee.com/zmusic-dev/zmusic-server/releases'
    },
    version: data.tag_name,
    release: `https://gitee.com/zmusic-dev/zmusic-server/releases/tag/${data.tag_name}`,
    download: data.assets.filter((item: any) => item.name).map((item: any) => {
      return {
        name: item.name,
        link: item.browser_download_url
      }
    })
  }
}

const spigotmcLatestUpdate = async () => {
  const res = await fetch('https://api.spiget.org/v2/resources/83027/updates/latest')
  const data = await res.json()
  return `https://www.spigotmc.org/resources/83027/update?update=${data.id}`
}

const spigotmcLatestVersion = async () => {
  const res = await fetch('https://api.spiget.org/v2/resources/83027/versions/latest')
  const data = await res.json()
  return {
    source: {
      name: 'SpigotMC',
      link: 'https://www.spigotmc.org/resources/83027/'
    },
    version: `${data.name}`,
    release: await spigotmcLatestUpdate(),
    download: [
      {
        name: 'ZMusic Latest',
        link: `https://www.spigotmc.org/resources/83027/download?version=${data.id}`
      }
    ] as any
  }
}

onMounted(async () => {
  let data = await githubLatestRelease()
  list.value.push(data)
  data = await githubLatestBuild()
  list.value.push(data)
  data = await giteeLatestRelease()
  list.value.push(data)
  data = await spigotmcLatestVersion()
  list.value.push(data)
})
</script>

<style lang="scss" scoped></style>
