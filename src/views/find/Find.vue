<template>
  <div id="find">
    <Head>
      <template v-slot:center><Search></Search></template>
      <template v-slot:right><img :src="picright" alt=""></template>
      </Head>
    <h1>Find插件1111</h1>
  </div>
</template>

<script>
// 导入自定义的头部
import Head from '@/components/head/Head.vue'
// 导入搜索框
import Search from '@/components/search/Search.vue'

// 导入图片
import picright from '@/assets/222.jpg'
export default {
  name : 'Find',
  data(){
    return {
      picright,
    }
  },
  components:{
    Head,
    Search,
  }
}
</script>

<style lang='less' scoped>
#find {
  padding-bottom: 50px;
}
.search{
  border-width: 1px;
  height: 100%;
}
.search img {
  width: 20px;
  height: 20px;
}
</style>

