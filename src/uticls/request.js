// 引入axios
import axios from "axios";


const request = axios.create({ 
  baseURL: "http://localhost:3000"
})


// 请求拦截器
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

export default request