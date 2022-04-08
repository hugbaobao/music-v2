<template>
  <div id="Mine">
    <Head>
      <template v-slot:center><div><div class="cet">+ 添加状态</div></div></template>
      <template v-slot:right><img :src="Search" alt=""></template>
    </Head>
    <h1>Mine插件</h1>
  </div>
</template>

<script>
// 导入自定义的头部
import Head from '@/components/head/Head.vue'
import Search from '@/assets/icon/搜索.png'
export default {
  name : 'Mine',
  data(){
return {
  Search,
}
  },
  components:{
    Head,
  }
}
</script>

<style scoped>
.cet{
  width: 90px;
  margin: 14px auto;
  border-radius: 10px;
  background-color: #F5F4F4;
}
</style>