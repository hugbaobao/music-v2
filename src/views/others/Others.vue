<template>
  <div id="Others">
    <Head>
      <template v-slot:center><div class="cent"><span class="left">推荐</span><span>故事</span></div></template>
      <template v-slot:right><img :src="Add" alt=""></template>
    </Head>
    
    <!-- 搜索框 -->
    <div class="search">
      <Search></Search>
    </div>

    <!-- 推荐电台 -->
    <Slide :fatherList="djList" :key="22">
  <template v-slot:Fleft>推荐电台</template>
</Slide>

<!-- 推荐节目 -->
<Slide :fatherList="recomList" :key="33">
  <template v-slot:Fleft>推荐节目</template>
</Slide>

  </div>
</template>

<script>
// 导入自定义的头部
import Head from '@/components/head/Head.vue'
import Add from '@/assets/icon/jiahao-tianchong.png'
// 导入搜索框
import Search from '@/components/search/Search.vue'
// 导入Api
import { getdjprogram,getrecommend } from '@/uticls/othersApi.js'
// 导入常用组件
import Slide from '@/components/slide/Slide.vue'


export default {
  name : 'Others',
  async created(){
// 获取轮播图  
const { data:res } = await getdjprogram()
 this.djList = res.result

//  获取推荐节目
const { data:res2 } = await getrecommend()
// console.log(ress);
 const newlist = res2.programs.slice(0,6)
 this.recomList = newlist.map(iterator => {
	return {
		picUrl: iterator.coverUrl,
    name:iterator.name
	}
})
  },
  data(){
return {
  Add,
  djList:[],
  recomList:[],
}
  },
  components:{
    Head,
    Slide,
    Search
  }
}
</script>

<style lang="less" scoped>
/deep/ .cent {
  width: 5rem;
  height: 0.6667rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  font-weight: 700;
  font-size:0.24rem ;
}
.left {
  margin-right: 0.2666rem;
}
.search {
  width: 80%;
  margin: 2rem 0 0.2rem 0.8rem;
}
</style>