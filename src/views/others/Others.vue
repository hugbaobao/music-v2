<template>
  <div id="Others">
    <Head>
      <template v-slot:center><span class="left">推荐</span><span>故事</span></template>
      <template v-slot:right><img :src="Add" alt=""></template>
    </Head>
    <h1>Others插件</h1>
  </div>
</template>

<script>
// 导入自定义的头部
import Head from '@/components/head/Head.vue'
import Add from '@/assets/icon/jiahao-tianchong.png'
export default {
  name : 'Others',
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
span {
  display: inline-block;
  font-weight: 700;
  margin-top: 16px;
}
.left {
  margin-right: 10px;
}
</style>