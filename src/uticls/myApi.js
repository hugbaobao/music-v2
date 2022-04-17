import request  from "@/uticls/request.js"

// 获取个人信息
export const getMyInfo = function(userid){
  return request.get('/user/detail',{
    params:{
      uid:userid
    }
  })
}

// 获取喜欢音乐列表
export const getlikelist = function(userid){
  return request.get('/likelist',{
    params:{
      uid:userid
    }
  })
}