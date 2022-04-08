<template>
  <div id="app">

    <!-- 根组件下显示的部分 -->
   <router-view></router-view>

   <!-- babbar标签栏 -->
   <van-tabbar route>
  <van-tabbar-item icon="music-o" to="/">发现</van-tabbar-item>
  <van-tabbar-item icon="service-o" to="/Follow">关注</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/Mine">我的</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/Others">播客</van-tabbar-item>
   <van-tabbar-item icon="good-job-o" to="/Square">云村</van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
