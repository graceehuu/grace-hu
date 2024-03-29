import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('./views/Art.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: () => import('./views/Error.vue')
  }]
})
