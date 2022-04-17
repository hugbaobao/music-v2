import request from '@/uticls/request.js'

// 推荐电台
export const getdjprogram = function () {
  return request.get('/personalized/djprogram')
  }

// 推荐节目
export const getrecommend = function () {
  return request.get('/program/recommend')
  }