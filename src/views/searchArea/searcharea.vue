<template>
  <div id="Area"> 
    <!-- 整个头部 -->
        <div class="sear">
          <!-- 输入框 -->
          <div class="left">
    <img src="@/assets/icon/搜索.png" alt="">
    <input type="text" placeholder="搜索歌曲" ref="songname" v-model="Sname" @input="showList">
          </div>   
          <!-- 返回按钮 -->
       <div class="back">
        <router-link to="/Index">取消</router-link>
       </div>  
      </div>

      <!-- 搜索框下内容 -->
      <div class="content">

<!-- input无内容时 -->
<div v-show="flag" class="red">
  <van-tabs v-model="active" animated swipeable>
  <van-tab title="热搜榜">
    <ul>
      <li v-for="(item,index) in hotList" :key="item.index">
       <span>{{ index + 1 + '.'}}</span><span>{{ item.first }}</span>
      </li>
    </ul>
  </van-tab>
  <van-tab title="歌手榜">
    <ul>
      <li v-for="(item,index) in topicList" :key="item.index">
       <span>{{ index + 1 + '.'}}</span><span>{{ item.name }}</span>
      </li>
    </ul>
  </van-tab>
  <van-tab title="视频榜">
    <ul>
      <li v-for="(item,index) in mvList" :key="item.index">
       <span>{{ index + 1 + '.'}}</span><span>{{ item.name }}</span>
      </li>
    </ul>
  </van-tab>
  <van-tab title="播客榜">
    <ul>
      <li v-for="(item,index) in AnchorList" :key="item.index">
       <span>{{ index + 1 + '.'}}</span><span>{{ item.nickName }}</span>
      </li>
    </ul>
  </van-tab>
</van-tabs>
<p>音乐专区</p>
<div class="bcg"><img src="@/assets/图层 2.png" alt=""></div>
</div>

      <!-- input有内容时 -->
<div v-show="!flag" class="blue">
  <van-list>
  <li v-for="item in list" :key="item.index">
    <img src="@/assets/icon/搜索.png" alt="">
    <span>{{ item.name }}</span>
  </li>
</van-list>
</div>

      </div>
      
  </div>
</template>

<script>
// 引入Api接口
import { getSongList,hotSearch,topic,HotMv,HotAnchor } from '@/uticls/searchApi.js'

export default {
  name:'Area',
  data(){
return {
  Sname:'',
  list:[],
  number:10,
  flag:true,
  timer:null,
  active:0,
  hotList:[],
  topicList:[],
  mvList:[],
  AnchorList:[],
  count:1
}
  },
 async created(){
            this.$nextTick(() => {
         this.openIn()
      });
   // 获取热搜    
const { data:res } = await hotSearch()
 this.hotList = res.result.hots
//  获取话题
const { data:res2 } = await topic(this.number)
 this.topicList = res2.artists
// 获取视频
const { data:res3 } = await HotMv(this.number)
 this.mvList = res3.data
// 获取播客
const { data:res4 } = await HotAnchor(this.number)
 this.AnchorList = res4.data.list
  },
  components:{
  },
  watch:{
Sname(newval,oldval){
if(newval.length > 0) {
  this.flag = false
} else {
  this.flag = true
}
}
  },
  methods:{
    // 输入框获得焦点
    openIn(){
this.$refs.songname.focus();
    },

    // 提示智能搜索结果
   async showList(){
     //  清除定时器
     clearTimeout(this.timer)

     //  判断input有无内容
     if(this.Sname.length == 0) {
       this.list = []
       return
     }
     this.timer = setTimeout(async()=>{
const { data:res } = await getSongList(this.Sname,this.number)
 this.list = res.result.songs
     },500)
    },
  },
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
#Area {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #FDFDFD;
}
.sear {
  height: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2667rem;
  margin-bottom: 0.1333rem;
}
.sear img{
  width: 0.2667rem;
  height: 0.2667rem;
  margin-right: 0.1334rem;
}
.back {
  float: right;
  font-size:0.4rem;
}
.left {
  width: 85%;
  height: 0.8rem;
  border-radius: 0.4rem;
  background-color: #F5F4F4;
   display: flex;
  align-items: center;
  padding-left: 0.2667rem;
}
input {
  width: 85%;
 height: 0.4892rem;
  border-width: 0;
  background-color: #F5F4F4;
  font-size:0.24rem ;
}
a {
  color: #000000;
}
.content .red p{
margin-top: 0.3rem;
text-align: left;
font-size:0.4rem ;
padding-left: 0.6rem;
}
.content .red ul {
  width: 85%;
  margin: .1333rem auto;
  background-color: #FEFEFE;
}
.content .red ul li {
  display: inline-block;
  height: 0.8rem;
  width: 50%;
  overflow: hidden;
  font-size:0.24rem;
}
.content .red .bcg {
  margin: .1333rem auto;
}
.content .red .bcg img {
  width: 8.5rem;
}
.content .blue li {
  height: 1rem;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  padding-left: 0.5333rem;
  align-items: center;
  font-size:0.24rem ;
}
.content .blue li img {
  margin-right: 0.1333rem;
}
.content .blue img {
  width: 0.26667rem;
  height: 0.26667rem;
}
</style>