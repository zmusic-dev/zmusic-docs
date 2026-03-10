<template>
  <div class="hint-container warning">
    <p class="hint-container-title" v-html="t.warning" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { usePageLang } from 'vuepress/client'

const lang = usePageLang()

const i18n: Record<string, { warning: string }> = {
  '/': {
    warning: '<strong>您当前正在查看的文档为 V4 版本文档</strong><br><strong>此版本仍在开发中，可能存在错误或不完善的地方</strong><br><strong>当前长期支持版本为 V2，您可以查看 <a href="/v2/README.md">V2 文档</a></strong>'
  },
  '/en/': {
    warning: '<strong>You are currently viewing the V4 documentation</strong><br><strong>This version is still under development and may contain errors or incomplete features</strong><br><strong>The current long-term support version is V2, you can view <a href="/en/v2/">V2 Docs</a></strong>'
  },
  '/zh-tw/': {
    warning: '<strong>您目前正在查看的文件為 V4 版本文件</strong><br><strong>此版本仍在開發中，可能存在錯誤或不完善的地方</strong><br><strong>目前長期支援版本為 V2，您可以查看 <a href="/zh-tw/v2/README.md">V2 文件</a></strong>'
  },
  '/ja/': {
    warning: '<strong>現在表示しているドキュメントは V4 バージョンです</strong><br><strong>このバージョンはまだ開発中であり、エラーや不完全な部分がある可能性があります</strong><br><strong>現在の長期サポートバージョンは V2 です。<a href="/ja/v2/README.md">V2 ドキュメント</a>をご覧ください</strong>'
  }
}

const getLocale = () => {
  if (lang.value === 'en-US') return '/en/'
  if (lang.value === 'zh-TW') return '/zh-tw/'
  if (lang.value === 'ja-JP') return '/ja/'
  return '/'
}

const t = computed(() => i18n[getLocale()])
</script>
