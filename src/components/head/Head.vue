<template>
  <div id="head">
    <div><img :src="picone" alt=""></div>
    <!-- 中间和右边为插槽 -->
    <div><slot name="center"></slot></div>
    <div><slot name="right"></slot></div>
  </div>
</template>

<script>
import picone from '@/assets/111.jpg'
export default {
  name:'Head',
  data(){
    return {
      picone
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
/* 暂定与tabbar保持同样高度 */
#head {
  /* background-color:red; */
  width: 100%;
  height: 50px;
  /* 固定在屏幕顶部 */
  position: fixed;
  top: 0;
  display: flex;
   justify-content:space-between;
  align-items: center;
  padding: 0 20px;
}
#head div:nth-child(even) {
  flex: 1;
  padding:0 20px;
  height: 100%;
}
#head div img {
  width: 20px;
  height: 20px;
}
#head div:nth-child(3){
  margin-right: 40px;
}
</style>