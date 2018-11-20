import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Page3 from './views/page3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/1',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/2',
      name: 'Page3',
      component: Page3
    }
  ]
})
