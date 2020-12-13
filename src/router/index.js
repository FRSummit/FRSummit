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
    path: '/cv-v01',
    name: 'Curriculum Vitate',
    component: () => import('../views/public/cv/CV_V01.vue')
  },
  {
    path: '/port-v1',
    name: 'F R Summit Portfolio v1',
    component: () => import('../views/public/portfolio/portfolio-v1/Index.vue')
  },
  // Private
  {
    path: '/update-frs-cv-v01',
    name: 'FRSummit CV Update',
    component: () => import('../views/private/UpdateCV/cv_v01/Update_CV.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
