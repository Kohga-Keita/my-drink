import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'cofee-float',
      component: () => import('./views/CoffeeFloat.vue')
    },
    {
      path: '/milk-tea',
      name: 'milk-tea',
      component: () => import('./views/MilkTea.vue')
    },
    {
      path: '/banana-shake',
      name: 'banana-shake',
      component: () => import('./views/BananaShake.vue')
    },
    {
      path: '/vanilla-frappuccino',
      name: 'vanilla-frappuccino',
      component: () => import('./views/VanillaFrappuccino.vue')
    },
    {
      path: '/beyond-education',
      name: 'beyond-education',
      component: () => import('./views/BeyondEducation.vue')
    },
    {
      path: '/kokokara2017',
      name: 'kokokara2017',
      component: () => import('./views/kokokara2017.vue')
    },
    {
      path: '/kokokara2018',
      name: 'kokokara2018',
      component: () => import('./views/kokokara2018.vue')
    },
    {
      path: '/leaper',
      name: 'leaper',
      component: () => import('./views/Leaper.vue')
    },
    {
      path: '/taliki',
      name: 'taliki',
      component: () => import('./views/taliki.vue')
    },
    {
      path: '/chiachia',
      name: 'chiachia',
      component: () => import('./views/chiachia.vue')
    },
    {
      path: '/tripleone',
      name: '/tripleone',
      component: () => import('./views/tripleone.vue')
    },
    {
      path: '/hamburger-boys',
      name: '/hamburger-boys',
      component: () => import('./views/HamburgerBoys.vue')
    },
    {
      path: '/my-holiday',
      name: '/my-holiday',
      component: () => import('./views/MyHoliday.vue')
    },


  ]
})
