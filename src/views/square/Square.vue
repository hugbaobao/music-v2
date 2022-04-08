<template>
  <div id="Square">
    <Head>
      <template v-slot:center><Search></Search></template>
      <template v-slot:right><img :src="Add" alt=""></template>
    </Head>
    <h1>Square插件</h1>
  </div>
</template>

<script>
// 导入自定义的头部
import Head from '@/components/head/Head.vue'
import Add from '@/assets/icon/jiahao-tianchong.png'
// 导入搜索框
import Search from '@/components/search/Search.vue'
export default {
  name : 'Square',
  data(){
return {
  Add,
}
  },
  components:{
    Head,
    Search
  }
}
</script>

<style scoped>

</style>