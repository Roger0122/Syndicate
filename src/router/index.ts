import { createRouter, createWebHistory } from 'vue-router'
import Award from '@/page/Award.vue'
import Content from '@/page/Content.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Award',
      component: Award,
    },
    {
      path: '/Content',
      name: 'Content',
      component: Content,
    },
  ],
})

export default router
