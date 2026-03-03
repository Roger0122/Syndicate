<template>
  <h1>密教小工具</h1>
  <div>
  <RouterLink to="/">獎勵一覽</RouterLink>
  </div>
  <RouterLink to="/Content">模擬獎勵</RouterLink>
  <RouterView />
</template>

<script setup lang="ts" name:="App">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped></style>
