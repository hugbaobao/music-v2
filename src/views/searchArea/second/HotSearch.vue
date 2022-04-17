<template>
  <div id="HotSearch">
    <ul>
      <li v-for="(item,index) in hotList" :key="item.index">
       <span>{{ index + 1 + '.'}}</span><span>{{ item.first }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HotSearch',

}
</script>

<style lang="less" scoped>
ul {
  width: 85%;
  margin: 0 auto;
  background-color: #FEFEFE;
}
ul li {
  display: inline-block;
  width: 50%;
  font-size:0.24rem ;
}
</style>