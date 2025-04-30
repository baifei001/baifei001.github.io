<script lang="ts" setup>
import {useScriptTag} from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>


<template>
  <YunFooter>
    <div class="flex justify-center gap-6 flex-wrap">
      <VCLiveTime start-time="2025-04-26" class="flex items-center gap-2">
        <template #live-time-before>
          <span class="mr-1">🏃♀️本站已运行</span>
        </template>
        <template #live-time-after>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </template>
      </VCLiveTime>

      <div class="flex items-center gap-4 text-gray-500">
        <div>🌐 <span id="busuanzi_value_site_pv"/>次访问</div>
        <div class="h-4 w-px bg-gray-200"></div> <!-- 竖线分隔 -->
        <div>👥 <span id="busuanzi_value_site_uv"/>位访客</div>
      </div>
    </div>
  </YunFooter>
</template>

<style>


</style>
