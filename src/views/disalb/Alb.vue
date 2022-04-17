<template>
  <div id="Alb">
<van-row type="flex" justify="space-between">
  <van-col span="12" v-for="item in list" :key="item.id">
    <div class="pic">
      <img :src= item.picUrl alt="">
    </div>
    <div class="name">
      <p class="van-ellipsis">{{ item.name }}</p>
      <p class="van-ellipsis">{{ item.company }}</p>
    </div>
  </van-col>
</van-row>
  </div>
</template>

<script>
import {newest} from '@/uticls/disalb.js'

export default {
name:'Alb',
async created(){
  const { data:res } = await newest()
  // 从第六个结果截取
 this.list = res.albums.slice(6)
},
data() {
  return {
    list:[]
  }
}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#Alb {
  height: 3.9rem;
  margin-top: .05rem;
}
#Alb .van-col {
  height: 1.3rem;
  display: flex;
  justify-content: flex-start;
  margin-bottom: .0667rem;
}
#Alb .pic {
  border-radius:0.067rem;
}
#Alb .pic,.name {
  width:1.3rem;
  height: 1.3rem;
  overflow: hidden;
}
#Alb .name {
  width:3.9rem;
  height: 1.3rem;
  overflow: hidden;
  border-bottom: 0.006rem solid rgb(233, 233, 233);
}
#Alb .pic img{
  width:1.3rem;
  height:1.3rem;
}
#Alb .name p {
  font-size: 0.35rem;
  text-align: left;
}
#Alb .name p:nth-child(2) {
  font-size: 0.2rem;
  text-align: left;
  color: #767575;
}
</style>