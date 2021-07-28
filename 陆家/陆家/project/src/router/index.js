import Vue from "vue" // 引入vue
import VRouter from 'vue-router'// 引入路由
 // 引入需要用到路由的页面

Vue.use(VRouter) // vue使用路由

export default new VRouter({ // 创建路由
  mode: 'history', // 去掉链接中的#
  routes: [ // 此处写路由
    {
      path: '/', // 链接中的显示路劲
      name: 'HelloWorldfrom', // 名字
      component: () => import('../views/home.vue') // 引入的路由名称，必须与import里的名称一样
    }
  ]
})