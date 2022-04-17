<template>

  <div id="Slide">
    <div class="hd">
      <span>
        <slot name="Fleft"></slot>
        </span><span>更多<van-icon name="arrow" />
          </span>
    </div>

    <van-tabs v-model="active" :line-height="0">
  <van-tab v-for="item in newList" :key="item.id">
    <template #title> <div class="block">
      <img :src= item.picUrl alt="">
      <p class="van-multi-ellipsis--l2">{{item.name}}</p>
    </div>
    </template>
  </van-tab>
</van-tabs>

  </div>
</template>

<script>
export default {
  name:'Slide',
  created(){

  },
  props:{
fatherList:{
      type: Array, // 数组 // 对象或数组默认值必须从一个工厂函数获取
      require:true,
      default: () => []
}
  },
  data(){
    return {
     active: 1,
    //  list:this.fatherList
    }
  },
computed:{
  newList(){
    return this.list = this.fatherList
  }
}
}
</script>

<style lang="less" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    #Slide {
      width: 100%;
      height: 100%;
    }
    
    // 头部
    .hd {
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.2rem;
      padding: 0.1rem 0.2rem;
    }
    .hd>span{
      display:inline-block;
    }
    .hd span:nth-child(1) {
      font-weight: 700;
      font-size: 0.345rem;
    }
    .hd span:nth-child(2) {
      text-align: center;
      width: 1rem;
      border: 1px solid #ECECEC;
      border-radius: .5rem;
      padding:0.03rem 0 0 0.1rem;
    }
    // 内容
    #Slide .van-tabs{
      height: 3rem;
    }
    #Slide /deep/ .van-tabs .van-tabs__wrap{
      height: 3rem;
    }
    #Slide /deep/ .van-tabs .van-tabs__nav{
      height: 3rem;
    }
    #Slide /deep/ .van-tabs .van-tabs__wrap .van-tab {
      width: 3rem;
      height: 3rem;
    }
    .block {
      width: 2rem;
      height: 2.5rem;
      // background-color: red;
    }
    .block img {
      width: 1.7rem;
      border-radius: 0.1333rem;
    }
    .block p {
      color: #323233;
    }
</style>