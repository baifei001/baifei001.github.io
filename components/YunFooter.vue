<script lang="ts" setup xmlns="http://www.w3.org/1999/html">
import {useScriptTag} from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <div class="flex justify-center flex-wrap z-index-0">
      <VCLiveTime start-time="2025-04-26">
        <template #live-time-before>
          <span>🏃♀️本站已运行</span>
        </template>
        <template #live-time-after>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </template>
      </VCLiveTime>

      <div class="flex items-center">
        <div>&nbsp;&nbsp;🌐 <span id="busuanzi_value_site_pv"/> 次访问</div>
        <div>&nbsp;&nbsp;👥 <span id="busuanzi_value_site_uv"/> 位访客</div>
      </div>
    </div>
  </YunFooter>
</template>
