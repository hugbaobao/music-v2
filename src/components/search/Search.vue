<template>
  <div id="Search">
    <router-link to="/index/Area">
         <div>
      <img src="@/assets/icon/搜索.png" alt="">
         <span>搜索歌曲</span>
    </div>
    </router-link>
    
  </div>
</template>

<script>
// 导入搜索 API 接口
import { getSearchList } from '@/uticls/searchApi.js'

export default {
  name:'Search',
  data(){
    return {
      Search:''
    }
  },
  methods:{
   async SearchList(){
const { data:res } = await getSearchList(this.Search)
   console.log(res);
    }
  }
}
</script>

<style lang="less" scoped>
#Search {
  width: 100%;
  height: 0.8rem;
  background-color: #F5F4F4;
  // margin:0 auto;
  padding: 0 0.2667rem;
  border-radius: 0.4rem;
}
#Search a>div {
  height: 100%;
  display: flex;
justify-content: center;
align-items: center;
color: #CAC9C9;
}
#Search img {
  width: 0.2667rem;
  height: 0.2667rem;
  margin-right:0.1333rem;
}
#Search span {
  font-size:0.24rem ;
}
</style>