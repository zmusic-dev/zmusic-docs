<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>{{ t.channel }}</th>
          <th>{{ t.version }}</th>
          <th>{{ t.release }}</th>
          <th>{{ t.download }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.source.link">
          <td><a target="_blank" :href="item.source.link">{{ item.source.name }}</a></td>
          <td>{{ item.version }}</td>
          <td><a target="_blank" :href="item.release">{{ t.viewRelease }}</a></td>
          <td class="download-links">
            <a v-for="dl in item.download" :key="dl.link" target="_blank" :href="dl.link">
              {{ dl.name }}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { usePageLang } from 'vuepress/client'

const lang = usePageLang()

const i18n = {
  '/': {
    channel: '渠道',
    version: '版本',
    release: '发布',
    download: '下载',
    viewRelease: '点击查看'
  },
  '/en/': {
    channel: 'Channel',
    version: 'Version',
    release: 'Release',
    download: 'Download',
    viewRelease: 'View'
  }
}

const t = computed(() => i18n[lang.value === 'en-US' ? '/en/' : '/'])

interface DownloadFile {
  name: string
  link: string
}

interface DownloadItem {
  source: { name: string; link: string }
  version: string
  release: string
  download: DownloadFile[]
}

const list = ref<DownloadItem[]>([])

const safeFetch = async <T,>(fn: () => Promise<T>): Promise<T | null> => {
  try {
    return await fn()
  } catch (e) {
    console.error(e)
    return null
  }
}

const GITHUB_REPO = 'zmusic-dev/zmusic-server'

const githubLatestRelease = async (): Promise<DownloadItem> => {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`)
  const data = await res.json()
  return {
    source: {
      name: 'Github Releases',
      link: `https://github.com/${GITHUB_REPO}/releases`
    },
    version: data.tag_name,
    release: data.html_url,
    download: data.assets.map((item: { name: string; browser_download_url: string }) => ({
      name: item.name,
      link: item.browser_download_url
    }))
  }
}

const githubLatestBuild = async (): Promise<DownloadItem> => {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/actions/workflows/dev.yml/runs?per_page=1&status=success`)
  const data = await res.json()
  const run = data.workflow_runs[0]

  const artifactsRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/actions/runs/${run.id}/artifacts`)
  const artifactsData = await artifactsRes.json()

  return {
    source: {
      name: 'Github Actions',
      link: `https://github.com/${GITHUB_REPO}/actions/workflows/dev.yml`
    },
    version: `v4.0.0-dev.${run.head_sha.substring(0, 7)}`,
    release: run.html_url,
    download: artifactsData.artifacts.map((item: { name: string; id: number }) => ({
      name: `${item.name}.zip`,
      link: `https://github.com/${GITHUB_REPO}/actions/runs/${run.id}/artifacts/${item.id}`
    }))
  }
}

const giteeLatestRelease = async (): Promise<DownloadItem> => {
  const res = await fetch(`https://gitee.com/api/v5/repos/${GITHUB_REPO}/releases/latest`)
  const data = await res.json()
  return {
    source: {
      name: 'Gitee',
      link: `https://gitee.com/${GITHUB_REPO}/releases`
    },
    version: data.tag_name,
    release: `https://gitee.com/${GITHUB_REPO}/releases/tag/${data.tag_name}`,
    download: data.assets
      .filter((item: { name: string }) => item.name.endsWith('.jar'))
      .map((item: { name: string; browser_download_url: string }) => ({
        name: item.name,
        link: item.browser_download_url
      }))
  }
}

const spigotmcLatestVersion = async (): Promise<DownloadItem> => {
  const [versionRes, updateRes] = await Promise.all([
    fetch('https://api.spiget.org/v2/resources/83027/versions/latest'),
    fetch('https://api.spiget.org/v2/resources/83027/updates/latest')
  ])
  const versionData = await versionRes.json()
  const updateData = await updateRes.json()

  return {
    source: {
      name: 'SpigotMC',
      link: 'https://www.spigotmc.org/resources/83027/'
    },
    version: versionData.name,
    release: `https://www.spigotmc.org/resources/83027/update?update=${updateData.id}`,
    download: [{
      name: 'ZMusic Latest',
      link: `https://www.spigotmc.org/resources/83027/download?version=${versionData.id}`
    }]
  }
}

onMounted(async () => {
  const results = await Promise.all([
    safeFetch(githubLatestRelease),
    safeFetch(githubLatestBuild),
    safeFetch(giteeLatestRelease),
    safeFetch(spigotmcLatestVersion)
  ])
  list.value = results.filter((item): item is DownloadItem => item !== null)
})
</script>

<style lang="scss" scoped>
.download-links {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
