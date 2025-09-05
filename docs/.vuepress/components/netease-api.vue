<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>API 地址</th>
          <th>位置</th>
          <th>提供者</th>
          <th>版本</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(api, index) in neteaseApiList">
          <td>{{ api.link }}</td>
          <td>{{ api.location }}</td>
          <td>
            <a target="_blank" :href="api.provider.link">{{
              api.provider.name
              }}</a>
          </td>

          <td>
            <img :src="apiVersions[index]" v-if="!loading" />
          </td>
        </tr>
      </tbody>
    </table>
    <ul></ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import neteaseApiList from '../data/netease-api'

const loading = ref(true)
const apiVersions = ref<string[]>([])

const getApiVersion = async (link: string) => {
  try {
    const res = await fetch(`${link}/inner/version`)
    const result = await res.json()
    const data = result.data
    const image = `https://img.shields.io/badge/inner-v${data.version}-blue`
    return image
  } catch (e) {
    const image = `https://img.shields.io/badge/error-${e.message}-red`
    return image
  }
}

onMounted(async () => {
  neteaseApiList.forEach(async (api, index) => {
    apiVersions.value[
      index
    ] = `https://img.shields.io/badge/status-Fetching-lightgray`
    const result = await getApiVersion(api.link)
    apiVersions.value[index] = result
  })
  loading.value = false
})
</script>

<style lang="scss" scoped></style>
