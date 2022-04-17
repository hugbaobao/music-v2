<template>
  <div id="find">

    <!-- 顶部 -->
    <Head>
      <template v-slot:center><Search></Search></template>
      <template v-slot:right><img :src="picright" alt=""></template>
      </Head>

      <!-- 轮播图 -->
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in picList" :key="item.index">
    <img :src= item.pic  alt="">
  </van-swipe-item>
</van-swipe>
    </div>

    <!-- 圆形图标 -->
    <van-tabs v-model="active" :line-height="0">
  <van-tab v-for="item in pageList" :key="item.index">
    <template #title>
      <li class="page"><span class="ico"><img :src= item.iconUrl alt=""></span><p>{{item.name}}</p></li>
    </template>
  </van-tab>
</van-tabs>

<!-- 推荐歌单 -->
<div class="content">
<Slide :fatherList="personalize" :key="11">
  <template v-slot:Fleft>推荐歌单</template>
</Slide>
</div>

 <!-- 精品歌单 -->
 <div class="content">
<Slide :fatherList="quality" :key="22">
  <template v-slot:Fleft>精品歌单</template>
</Slide>
</div>

<!-- 新碟、专辑 -->
<div class="new">
  <span @click.prevent="blackleft">
    <router-link to="/index/find/dis">新碟</router-link></span>
  <span>|</span>
  <span @click.prevent="blackleft">
    <router-link to="/index/find/alb">数字专辑</router-link></span>
</div>
<!-- 内容部分 -->

<div class="or">
  <router-view></router-view>
</div>

  </div>
</template>

<script>
// 导入自定义的头部
import Head from '@/components/head/Head.vue'
// 导入搜索框
import Search from '@/components/search/Search.vue'

import Slide from '@/components/slide/Slide.vue'

// 导入图片
import picright from '@/assets/222.jpg'
// 引入Api接口
import { getSongList,homepage,personalized,classify } from '@/uticls/findApi.js'

export default {
  name : 'Find',
 async created(){
// 获取轮播图  
const { data:res } = await getSongList()
 this.picList = res.data.blocks[0].extInfo.banners

//  获取圆形图标
const { data:res2 } = await homepage()
 this.pageList = res2.data

 // 获取推荐歌单
const { data:res3 } = await personalized()
 this.personalize = res3.result

// 获取精品歌单
const { data:res4 } = await classify()
// 取部分值并重新附属性名
this.quality = res4.playlists.map(iterator => {
	return {
		picUrl: iterator.coverImgUrl,
    name:iterator.name
	}
})
  },
  data(){
    return {
      picright,
      picList:[],
      active:1,
      pageList:[],
      personalize:[],
      quality:[],
      current:'current',
    }
  },
  components:{
    Head,
    Search,
    Slide
  },
  methods:{
blackleft(e){
  e.target.classList.add(this.current)
}
  },
}
</script>

<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#find {
  padding-bottom: 0.6667rem;
}
.swipe {
  height: 2.8rem;
  width: 93%;
  margin: 0 auto;
  border-radius: .3rem;
   overflow: hidden;
   margin-bottom: .2667rem;
}
.my-swipe .van-swipe-item {
    color: #fff;
    text-align: center;
    height: 2.8rem;
  }
  .my-swipe .van-swipe-item img{
height: 100%;
width: 100%;
  }
  .van-tabs {
    height: 1.5rem;
    border-bottom: 1px solid #F0F0F0;
    margin-bottom: 0.1333rem;
  }
  /deep/ .van-tabs--line .van-tabs__wrap {
    height: 1.5rem;
}
/deep/ .van-tabs--line .van-tabs__wrap .van-tabs__nav {
    height: 1.418rem;
    padding-bottom: .0667rem;
}
/deep/ .van-tab{
  width: 2rem;
  height: 1.5rem;
  padding: 0 .0667rem;
}
  .page {
    list-style: none;
    width: 1.3rem;
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .page .ico {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    background-color: #FEF5F5;
    position: relative;
    overflow: hidden;
  }
  .page .ico img /deep/ {
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    left: -0.4rem;
    filter: drop-shadow(.4rem 0px 0rem #FE5454);
  }
  .page p {
    font-size: .16rem;
    color: #646566;
  }
  // 新碟、专辑
.new {
  height: 0.7rem;
  padding: .05rem .2rem;
}
.new span {
  height: 0.7rem;
  line-height:0.7rem;
  float: left;
  font-size: .3rem;
  margin-right: .1333rem;
}
.new span a {
  color: #2C3E50;

}
.new span:nth-child(2) {
  line-height:0.66rem;
}
// 防止切换二级路由屏幕下坠
  .or {
    height: 3.9rem;
  }
.current {
  font-weight:700;
}

.content {
      height: 3.7rem;
      margin-bottom: 0.45rem;
    }
</style>

