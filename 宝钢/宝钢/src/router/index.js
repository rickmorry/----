import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('../views/home3.vue')
  },
  {
    path: '/rh',
    name: 'RH详情',
    component: () => import('../views/RH.vue')
  },
  {
    path: '/xrq',
    name: '蓄热器详情',
    component: () => import('../views/XRQ.vue')
  },
  {
    path: '/dyzq',
    name: '低压总管',
    component: () => import('../views/DY.vue')
  },
  {
    path: '/zyzg',
    name: '中压总管',
    component: () => import('../views/ZYZG.vue')
  },
  {
    path: '/zlxq',
    name: '转炉详情',
    component: () => import('../views/ZLXQ2.vue')
  },
  {
    path: '/hz',
    name: '汇总',
    component: () => import('../views/HZ.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active"
})

router.afterEach(route => {
  document.title = route.name
})
export default router
