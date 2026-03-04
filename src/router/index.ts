import { createRouter, createWebHistory } from 'vue-router'
import Award from '@/page/Award.vue'
import Content from '@/page/Content.vue'
import Homepage from '@/views/Homepage.vue'
import Chapter from '@/page/Chapter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/Award',
      name: 'Award',
      component: Award,
    },
    {
      path: '/Content',
      name: 'Content',
      component: Content,
    },
    {
      path: '/Chapter',
      name: 'Chapter',
      component: Chapter,
    },
  ],
})

export default router
