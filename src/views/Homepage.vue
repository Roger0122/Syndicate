<template>
<!-- 標題 -->
<div>
  <h1 class="text-5xl text-center mt-5">POE小工具</h1>
  <div class="flex justify-center gap-3 py-2 px-2">
  <RouterLink to="/Award">獎勵一覽</RouterLink>
  <RouterLink to="/Content">模擬獎勵</RouterLink>
   <RouterLink to="/chapter">章節通關</RouterLink>
  </div>
  <RouterView />
  
</div>
</template>

<script setup lang="ts" name:="App">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped></style>
