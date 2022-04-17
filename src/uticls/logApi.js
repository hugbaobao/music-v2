import request from '@/uticls/request.js'

// 手机登录
export const login = function (number,pass) {
  return request.post('/login/cellphone', {
      phone:number,
      password:pass
  })
  }