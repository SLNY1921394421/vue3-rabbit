import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Layout,
      component: Layout,
      children: [
        {
          path: '',
          name: Home,
          component: Home,
        }, {
          path: '/category',
          name: Category,
          component: Category,
        }
      ]
    }, {
      path: '/Login',
      name: Login,
      component: Login,
    }
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

export default router
