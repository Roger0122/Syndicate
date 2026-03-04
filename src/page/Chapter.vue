<template>
  <div class="max-w-5xl mx-auto space-y-10">
    <details
      v-for="chapter in chapters"
      :key="chapter.id"
      class="bg-white rounded-xl shadow-lg p-6"
    >
      <summary class="cursor-pointer font-bold text-lg">
        {{ chapter.title }}
      </summary>

      <ul class="relative border-l border-gray-600 ml-4 space-y-6">
        <li v-for="task in chapter.tasks" :key="task.id" class="ml-6">
          <span class="absolute -left-2 w-3 h-3 bg-yellow-400 rounded-full"></span>

          <div>
            <span class="font-semibold text-2xl">{{ task.area }}</span>

            <div class="text-sm text-amber-700">
              {{ task.content }}
            </div>
          </div>
        </li>
      </ul>
    </details>
  </div>
</template>

<script setup lang="ts" name="Award">
import { usechapterstore } from '@/stores/chapter'

const { chapters } = usechapterstore()
</script>

<style scoped></style>
