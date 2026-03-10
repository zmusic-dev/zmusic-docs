<template>
  <div class="hint-container warning">
    <p class="hint-container-title" v-html="t.warning" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { usePageLang } from 'vuepress/client'

const lang = usePageLang()

const i18n = {
  '/': {
    warning: '<strong>您当前正在查看的文档为 V4 版本文档</strong><br><strong>此版本仍在开发中，可能存在错误或不完善的地方</strong><br><strong>当前长期支持版本为 V2，您可以查看 <a href="/v2/README.md">V2 文档</a></strong>'
  },
  '/en/': {
    warning: '<strong>You are currently viewing the V4 documentation</strong><br><strong>This version is still under development and may contain errors or incomplete features</strong><br><strong>The current long-term support version is V2, you can view <a href="/en/v2/">V2 Docs</a></strong>'
  }
}

const t = computed(() => i18n[lang.value === 'en-US' ? '/en/' : '/'])
</script>
