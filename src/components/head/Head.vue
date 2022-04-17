<template>
  <div id="head">
    <div>
      <van-cell is-link  @click="showPopup"><img :src="picone" alt=""></van-cell>
      </div>
    <!-- 中间和右边为插槽 -->
    <div><slot name="center"></slot></div>
    <div><slot name="right"></slot></div>
    <van-popup v-model="show" position="left" :style="{ width: '70%',height:'100%',backgroundColor:'#F5F4F4' }">
      <van-list>
  <li>消息中心</li>
  <li>我的客服</li>
  <li>我的订单</li>
  <li>优惠券</li>
  <li>分享网易云音乐</li>
  <li>个人信息收集清单</li>
  <li>个人信息共享清单</li>
  <li>隐私保护</li>
  <li>关于</li>
  <li>1</li>
</van-list>

<button class="logout" @click="logout">退出登录</button>
    </van-popup>
  </div>
</template>

<script>
import picone from '@/assets/111.jpg'
export default {
  name:'Head',
  data(){
    return {
      picone,
      show: false,
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    logout(){
      localStorage.removeItem('userid')
      localStorage.removeItem('token')
      this.$router.replace('/')
    }
  },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

#head {
  height: 1.6rem;
  /* 固定在屏幕顶部 */
  position: fixed;
  top: 0;
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-left: .4rem;
  padding: 0 0.2rem;
  z-index: 999;
  background-color: #FFFFFF;
}
#head>div {
  height: 1.6rem;
  display: flex;
  justify-content:center;
  align-items: center;
}
#head div:nth-child(2) {
  width: 7.5rem;
  padding:0 0.2667rem;
  height: 0.6667rem;
}
#head div img {
  height: 0.4rem;
}
.van-cell--clickable {
  padding:0;
}
.van-cell__value--alone {
padding-top: 6.75px;
}
.van-cell__right-icon {
  display: none;
}
/* 展示层 */
#head .van-popup {
  display: block;
}
.van-list {
  list-style: none;
  width: 90%;
  margin: .6667rem auto;
  background-color: white;
  border-radius: .3rem;
}
.van-list li {
  height: 1rem;
  line-height:1rem;
  margin-bottom: .0667rem;
  /* border-bottom: 0.5px solid rgb(246, 245, 245); */
  font-size: .24rem;
  text-align: left;
  padding-left: .3rem;
}
#head .logout {
  color: red;
  width: 90%;
  background-color: white;
  border-radius: .3rem;
  height: 1rem;
  border: 0;
}
</style>