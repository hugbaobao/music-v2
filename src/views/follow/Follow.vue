<template>
  <div id="Follow">
    <Head>
      <template v-slot:center><h4>动态</h4></template>
      <template v-slot:right><img :src="Add" alt=""></template>
    </Head>
    <div class="nav">
      <h6>我的关注</h6>
      <ul>
        <li>全部 |</li>
        <li>音乐人 |</li>
        <li>朋友</li>
      </ul>
    </div>
    <div class="body">
      <h3>网易云音乐</h3>
      <p>你赚的第一笔钱用在了哪里？</p>
      <div class="span"><span>#云村生活</span><span>#网易云音乐的云圈</span></div>
      <img src="../../assets/pay.png" alt="">
    </div>
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

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
#Follow {
  padding-top:0.6667rem;
}
h4 {
  margin: 0 auto;
  height: 0.6667rem;
  line-height: 0.6667rem;
  font-size:0.24rem ;
}
.nav {
  padding: 0  .3rem;
}
.nav h6{
  float: left;
}
.nav ul {
  float: right;
}
.nav ul li {
  float: left;
}
/* 内容 */
.body {
  margin-top: 0.6667rem;
  padding:.3rem .3rem;
}
.body h3 {
  font-size: .4rem;
  float: left;
  margin-left: .5rem;
}
.body p {
  font-size: .3rem;
  margin: 1rem 0 .3rem .5rem;
  text-align: left;
}
.body .span {
  color: #3AB3E2;
  text-align: left;
  margin:0 0 .5rem .5rem;
}
.body img {
  width: 5rem;
  border-radius: .4rem;
  margin-left: -3.5rem;
}
</style>