<template>
  <div id="Login">
    
<div class="login">

  <!-- 跳过登录按钮 -->
  <div class="span">
    <router-link to="/Index">免登录立即体验</router-link>
  </div>
<div class="content">
<van-form @submit="onSubmit" validate-trigger="onSubmit">
  <van-field
    v-model="phonenumber"
    name="phone"
    label="手机号"
    placeholder="请输入手机号"
    :rules="[{ required: true, message: '手机号不可为空！' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="密码"
    placeholder="请输入密码"
    :rules="[{ required: true, message: '密码不可为空！' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">登录</van-button>
  </div>
</van-form>
</div>
  </div>   
  </div>
</template>

<script>
// 导入登录Api
import { login } from '@/uticls/logApi.js'

export default {
  name:'Login',
data() {
    return {
        phonenumber: '',
        password: '',
    };
  },
  methods: {
    // 发起请求
 async onSubmit () {
   try {
const { data:res } = await login(this.phonenumber,this.password)
    if(res.code == 501){
return alert('账号不存在')
    }else if (res.code == 502){
return alert('密码错误')
    }
    localStorage.removeItem('userid')
    localStorage.setItem('userid',`${res.profile.userId}`)
    localStorage.setItem('token',`Bearer ${res.token}`)
    this.$router.push('/Index')
    console.log(res);
   } catch(err){
console.log(err);
alert('登录失败，请稍后再试')
   }
    },
},
}
</script>

<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: #C80000;
  }
  .content {
    margin: 10rem auto;
    width: 70%;
  }
  .van-cell {
    border-radius: .6rem;
    margin-bottom: .5rem;
  }
  .span{
    font-size: .35rem;
    position:absolute;
    top: 1rem;
    right: .4rem;
  }
  .span a {
   color: rgba(250, 221, 221,.7);
  }
</style>