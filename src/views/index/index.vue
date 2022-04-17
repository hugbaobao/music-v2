<template>
  <div id="Index">

    <!-- 根组件下显示的部分 -->
   <router-view></router-view>

   <!-- babbar标签栏 -->
   <van-tabbar route active-color="#FE5454">
  <van-tabbar-item icon="music-o" to="/Index/Find">发现</van-tabbar-item>
  <van-tabbar-item icon="service-o" to="/Index/Follow">关注</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/Index/Mine">我的</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/Index/Others">播客</van-tabbar-item>
   <van-tabbar-item icon="good-job-o" to="/Index/Square">云村</van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>


export default {
  name: 'index',
  components: {
    
  }
}
</script>

<style lang="less">
#Index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>