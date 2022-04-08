import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入路由模块
import Find from '@/views/find/Find.vue'
import Follow from '@/views/follow/Follow.vue'
import Mine from '@/views/mine/Mine.vue'
import Others from '@/views/others/Others.vue'
import Square from '@/views/square/Square.vue'

// 安装为Vue的插件
Vue.use(VueRouter)

// 定义路由规则
const routes = [
  // {path:'/',redirect:'/Find'},
  {path:'/',component:Find},
  {path:'/Follow',component:Follow},
  {path:'/Mine',component:Mine},
  {path:'/Others',component:Others},
  {path:'/Square',component:Square},
]

// 创建路由对象
const router = new VueRouter({
  routes
})

// 共享
export default router