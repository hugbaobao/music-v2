import request from '@/uticls/request.js'

// 获取歌曲url
export const getSongList = function (songid) {
  return request.get('/song/url', {
    params: {
      id:songid
    }
  })
  }