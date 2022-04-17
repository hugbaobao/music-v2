import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'

// 导入want所有组件
import Vant from 'vant';
import 'vant/lib/index.css';


import 'lib-flexible/flexible.js'


Vue.use(Vant)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
