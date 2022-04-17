import request from '@/uticls/request.js'

// 轮播图
export const getSongList = function () {
  return request.get('/homepage/block/page')
  }

// 圆形图标入口列表
export const homepage = function () {
  return request.get('/homepage/dragon/ball')
  }

// 推荐歌单
export const personalized = function () {
  return request.get('/personalized', {
    params: {
      limit:6
    }
  })
  }

// 分类歌单
export const classify = function () {
  return request.get('/top/playlist/highquality', {
    params: {
      limit:6,
    }
  })
  }