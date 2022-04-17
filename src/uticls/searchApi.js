import request from '@/uticls/request.js'

// 输入搜索
export const getSongList = function (Kwords,lmt) {
return request.get('/search', {
  params: {
    keywords:Kwords,
    limit:lmt
  }
})
}
// 热搜榜
export const hotSearch = function () {
  return request.get('/search/hot')
  }

// 话题榜
export const topic = function (lmt) {
  return request.get('/top/artists',{
    params: {
      limit:lmt
    }
  })
  }

// 视频榜
export const HotMv = function (lmt) {
  return request.get('/top/mv',{
    params: {
      limit:lmt
    }
  })
  }

// 播客榜
export const HotAnchor = function (lmt) {
  return request.get('/dj/toplist/hours',{
    params: {
      limit:lmt
    }
  })
  }