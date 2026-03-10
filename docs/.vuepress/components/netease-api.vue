<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>{{ t.apiUrl }}</th>
          <th>{{ t.location }}</th>
          <th>{{ t.provider }}</th>
          <th>{{ t.version }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(api, index) in neteaseApiList" :key="api.link">
          <td>{{ api.link }}</td>
          <td>{{ getLocation(api.location) }}</td>
          <td>
            <a target="_blank" :href="api.provider.link">{{ api.provider.name }}</a>
          </td>
          <td>
            <img :src="apiVersions[index]" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { usePageLang } from 'vuepress/client'
import neteaseApiList from '../data/netease-api'

const lang = usePageLang()

const i18n: Record<string, { apiUrl: string; location: string; provider: string; version: string }> = {
  '/': {
    apiUrl: 'API 地址',
    location: '位置',
    provider: '提供者',
    version: '版本'
  },
  '/en/': {
    apiUrl: 'API URL',
    location: 'Location',
    provider: 'Provider',
    version: 'Version'
  },
  '/zh-tw/': {
    apiUrl: 'API 位址',
    location: '位置',
    provider: '提供者',
    version: '版本'
  },
  '/ja/': {
    apiUrl: 'API URL',
    location: '場所',
    provider: '提供者',
    version: 'バージョン'
  }
}

const getLocale = () => {
  if (lang.value === 'en-US') return '/en/'
  if (lang.value === 'zh-TW') return '/zh-tw/'
  if (lang.value === 'ja-JP') return '/ja/'
  return '/'
}

const locale = computed(() => getLocale())

const t = computed(() => i18n[locale.value])

const getLocation = (location: Record<string, string>) => location[locale.value] || location['/']

const FETCHING_BADGE = 'https://img.shields.io/badge/status-Fetching-lightgray'

const apiVersions = ref<string[]>(neteaseApiList.map(() => FETCHING_BADGE))

const getApiVersion = async (link: string): Promise<string> => {
  try {
    const res = await fetch(`${link}/inner/version`)
    const result = await res.json()
    return `https://img.shields.io/badge/inner-v${result.data.version}-blue`
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    return `https://img.shields.io/badge/error-${encodeURIComponent(message)}-red`
  }
}

onMounted(async () => {
  const results = await Promise.all(
    neteaseApiList.map(api => getApiVersion(api.link))
  )
  apiVersions.value = results
})
</script>

<style lang="scss" scoped></style>
