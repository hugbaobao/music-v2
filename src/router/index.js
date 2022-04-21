import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入路由模块
import Find from '@/views/find/Find.vue'
import Follow from '@/views/follow/Follow.vue'
import Mine from '@/views/mine/Mine.vue'
import Others from '@/views/others/Others.vue'
import Square from '@/views/square/Square.vue'
import Area from '@/views/searchArea/searcharea.vue'
// 导入二级路由模块
import Dis from '@/views/disalb/Dis.vue'
import Alb from '@/views/disalb/Alb.vue'

// 导入登录模块
import Login from '@/views/login/Login.vue'
// 导入首页
import Index from '@/views/index/index.vue'
// 导入播放页
import Play from '@/views/play/Play.vue'


// 安装为Vue的插件
Vue.use(VueRouter)

// 定义路由规则
const routes = [
  {path:'/',redirect:'/Login'},
  {path:'/Login',component:Login},
  {path:'/Index',component:Index,children:[
    {path:'/',redirect:'Find'},
    {path:'Find',component:Find,children:[
      {path:'',redirect:'dis'},
      {path:'dis',component:Dis},
      {path:'alb',component:Alb},
    ]},
    {path:'Follow',component:Follow},
    {path:'Mine',component:Mine},
    {path:'Others',component:Others},
    {path:'Square',component:Square},
    {path:'Area',component:Area},
  ]},
  {path:'/Play',component:Play},
]

// 创建路由对象
const router = new VueRouter({
  routes
})

// 共享
export default router