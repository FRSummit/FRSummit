import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/public/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/public/About.vue')
  },
  {
    path: '/cv-all',
    name: 'Curriculum Vitate',
    component: () => import('../views/public/CV.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
