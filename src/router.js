import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home/Home')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search/Search')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order/Order')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('./views/personal/personal')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
