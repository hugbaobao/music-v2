<template>
  <div id="Follow">
    <Head>
      <template v-slot:center><h4>动态</h4></template>
      <template v-slot:right><img :src="Add" alt=""></template>
    </Head>
    <h1>Follow插件</h1>
  </div>
</template>

<script>
// 导入自定义的头部
import Head from '@/components/head/Head.vue'
import Add from '@/assets/icon/jiahao-tianchong.png'
export default {
  name : 'Follow',
  data(){
return {
  Add,
}
  },
  components:{
    Head,
  }
}
</script>

<style scoped>
h4 {
  height: 50px;
  line-height: 50px;
}
</style>