import request from '@/uticls/request.js'

export const album = function () {
  return request.get('/album/new',{
    params: {
      limit:6
    }
  })
  }

  export const newest = function (limit) {
    return request.get('/album/newest',{
      limit:6
    })
    }