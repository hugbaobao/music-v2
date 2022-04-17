<template>
  <div id="Square">
    <Head>
      <template v-slot:center><Search></Search></template>
      <template v-slot:right><img :src="Add" alt=""></template>
    </Head>
    
    <!-- 顶部标签 -->
    <van-tabs v-model="active" swipeable animated>
  <van-tab title="歌房">
    <van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>

  </van-tab>
  <van-tab title="广场">
    <van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>
  </van-tab>
  <van-tab title="热门">
    <van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>
  </van-tab>
  <van-tab title="现场">
    <van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>
  </van-tab>
  <van-tab title="情感">
    <van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>
  </van-tab>
  <van-tab title="ACG">
    <van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>
  </van-tab>
  <van-tab title="明星">
<van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>
  </van-tab>
  <van-tab title="舞蹈">
    <van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>
  </van-tab>
  <van-tab title="影视">
    <van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>
  </van-tab>
  <van-tab title="知识">
    <van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>
  </van-tab>
  <van-tab title="MV">
    <van-row type="flex" justify="space-around">
  <van-col span="10">
    <van-icon name="wap-home" color="#FE5252"/>
      创建房间
  </van-col>
  <van-col span="10" >
     <van-icon name="music" color="#FE5252"/>
      排行榜
  </van-col>
</van-row>
  </van-tab>
</van-tabs>

<h6>猜你喜欢</h6>
<div class="bgurl">
  <img src="../../assets/图层 3.png" alt="">
</div>
<div class="bgimg">
  <van-tabs v-model="active1">
  <van-tab title="全部">
    <img src="../../assets/图层 4.png" alt="">
  </van-tab>
  <van-tab title="最新"></van-tab>
  <van-tab title="嗨唱房"></van-tab>
  <van-tab title="听歌房"></van-tab>
  <van-tab title="热点房"></van-tab>
  <van-tab title="游戏房"></van-tab>
</van-tabs>
</div>
 
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
  active:0,
  active1:0,
}
  },
  methods:{
    sendd(){
bus.$emit('sending',this.count)
    }
  },
  components:{
    Head,
    Search
  }
}
</script>

<style scoped>
#Square .van-row {
margin-top: .3333rem;
}
#Square .van-row .van-col{
background-color: rgb(207, 207, 207);
height: 0.55rem;
line-height:0.55rem;
font-size: 0.25rem;
border-radius: .1rem;
}
#Square h6 {
  font-size: 0.25rem;
  margin: .4rem 0 .2rem;
  text-align: left;
  padding-left: 0.267rem;
}
#Square .bgurl img {
  height: 1.8rem;
}
#Square .bgimg img {
  width: 5.5rem;
}
</style>