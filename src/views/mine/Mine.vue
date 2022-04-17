<template>
  <div id="Mine">
    <Head>
      <template v-slot:center><div class="cet">+ 添加状态</div></template>
      <template v-slot:right><img :src="Search" alt=""></template>
    </Head>
    <!-- 名称信息 -->
    <div class="head w">
      <!-- 已登录 -->
     <div v-if="flag">
       <img :src="myInfo.avatarUrl" alt="">
      <h2>{{ myInfo.nickname }}</h2>
      <div>
        <span>{{ myInfo.follows }}</span>关注
        <span>{{ myInfo.followeds }}</span>粉丝 
        </div>
     </div>
     <div v-else>
       <img :src="myhead" alt="">
       <router-link to="/Login"><h2>立即登录 ></h2></router-link>
     </div>
    </div>
    <!-- nav导航 -->
    <div class="nav w">
<van-row>
  <van-col span="6">
    <van-icon name="play-circle" color="#FE5454"/>
    <span>最近播放</span>
  </van-col>
  <van-col span="6">
    <van-icon name="music" color="#FE5454"/>
    <span>本地下载</span>
  </van-col>
  <van-col span="6">
    <van-icon name="column" color="#FE5454"/>
    <span>云盘</span>
  </van-col>
  <van-col span="6">
    <van-icon name="shopping-cart" color="#FE5454"/>
    <span>已购</span>
  </van-col>
  <van-col span="6">
    <van-icon name="friends" color="#FE5454"/>
    <span>我的好友</span>
  </van-col>
  <van-col span="6">
    <van-icon name="star" color="#FE5454"/>
    <span>收藏和赞</span>
  </van-col>
  <van-col span="6">
    <van-icon name="video" color="#FE5454"/>
  <span>我的播客</span>
  </van-col>
  <van-col span="6">
    <van-icon name="gift-card" color="#FE5454"/>
     <span>音乐罐子</span>
  </van-col>
</van-row>
    </div>
    <!-- <button @click="gett">获取状态</button> -->
  </div>
</template>

<script>
// 导入自定义的头部
import Head from '@/components/head/Head.vue'
import Search from '@/assets/icon/搜索.png'
import myhead from '@/assets/个人中心.png'

// 导入获取用户信息接口
import { getMyInfo } from '@/uticls/myApi.js'
// 获取喜欢音乐列表

export default {
  name : 'Mine',
async created(){
this.myUserID = localStorage.getItem('userid');
// 获取用户信息
const { data:res } = await getMyInfo(this.myUserID)
this.myInfo = res.profile

// 获取喜欢音乐列表
/* const ress = await getlikelist(this.myUserID)
this.myInfo = ress.profile
console.log(ress); */
 },
 beforeMount(){
if(localStorage.getItem('userid') == null){
this.flag = false
}else {
  this.flag = true
}
 },
  data(){
return {
  Search,
  myhead,
  myUserID:0,
  flag:true,
  myInfo:{},
}
  },
  methods:{
  /* gett(){
      console.log(localStorage.getItem('token'));
    } */
  },
  components:{
    Head,
  }
}
</script>

<style lang="less" scoped>
.cet{
  width:2.2rem;
  height: 0.4rem;
  font-size:0.24rem ;
  margin: 0.1867rem auto;
  border-radius: 0.2rem;
  background-color: #F5F4F4;
}
#Mine {
  padding: 1.6rem 0;
}
.w {
  width: 90%;
  margin: 0 auto;
}
/* 头部 */
.head {
  position: relative;
  height: 2rem;
  background-color: #F5F4F4;
  border-radius: 0.4rem;
  padding-top: .8rem;
}
.head img{
  position: absolute;
  top: -0.7rem;
  left: 3.9rem;
  width: 1.5rem;
  height: 1.5rem; 
  border-color:  transparent;
  border-radius: 0.75rem;
  background-color: #fdf7f4;
}
.head h2 {
  margin: .2667rem 0;
}
.head span {
  margin-left: .1333rem;
}
.nav {
  height: 3rem;
  background-color: #F5F4F4;
  border-radius: 0.4rem;
  margin-top: .4rem;
}
.nav .van-col {
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: .7rem;
}
.nav .van-col span{
  font-size: .3rem;
}
</style>