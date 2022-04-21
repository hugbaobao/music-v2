<template>
  <div id="Play">
    <!-- 顶部 -->
    <div class="head">
      <van-icon name="arrow-down" @click="goback"/>
      <span>{{ songname }}</span>
      <van-icon name="share-o" />
    </div>

    <!-- audio -->
      <audio
      ref="audio"
      autoplay="true"
      :src= songinfo.url
    ></audio>
   
   <!-- 播放按钮 -->
     <div class="bgc">
        <div class="start-box" @click="audioStart">
        <span v-show="!playState">
          <van-icon name="play-circle-o" />
        </span>
        <span v-show="playState">
          <van-icon name="pause-circle-o" />
        </span>
      </div>
     </div>
  </div>
</template>

<script>
import { getSongList } from '@/uticls/play.js'

export default {
  name:'Play',
  data(){
    return {
      songid:0,
      songname:'',
      songinfo:{},
      playState: true, //播放状态
    }
  },
 async created(){
this.songid = this.$route.query.id
this.songname = this.$route.query.Sname

// 获取歌曲url等信息
const { data:res } = await getSongList(this.songid)
this.songinfo = res.data[0]

  },
  methods:{
    audioStart() { 
      if(this.playState){
this.$refs.audio.pause()
      }else{
this.$refs.audio.play()
      }
      this.playState = !this.playState
    },
    goback(){
      localStorage.setItem('songid',this.songid)
      localStorage.setItem('songname',this.songname)
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="less" scoped>
  #Play {
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(238, 125, 125);
  }
   #Play .head {
     height: 1.2rem;
     padding: 0 .4rem;
     color: white;
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   #Play .head span {
     font-size: .4rem;
   }
   #Play .head i {
     font-size: .5rem;
   }
   .bgc {
     position: absolute;
     top: 30%;
     left: 50%;
     transform: translate(-50%, 0);
     width: 4rem;
     height:  4rem;
     display: flex;
     justify-content: center;
     align-items: center;
     background-image: url('../../assets/bg.png');
     background-size: cover;
   }
   .start-box {
  width: 2rem;
  height:  2rem;
}
.start-box span i{
 font-size: 2rem;
 color: white;
}
</style>