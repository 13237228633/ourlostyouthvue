import axios from 'axios';

// import { Message, MessageBox } from 'element-ui';
// import { MessageBox } from 'element-ui';
import store from '../store';
import { getToken } from '../utils/auth';

import Vue from 'vue';
import  { ToastPlugin, debounce } from 'vux';

// console.log('fetch Vue',Vue);
// console.log('fetch ToastPlugin',ToastPlugin);
Vue.use(ToastPlugin);
// console.log('fetch this',this);

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 * 60           // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['X-Token'] = getToken()// 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config;
}, error => {
  // Do something with request error
  //console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
    * code为非20000是抛错 可结合自己业务进行修改
    */
    const res = response.data;
    if (res.code !== 200) {
      // console.log(res.code);
      console.log(response);
      // 50008:非法的token; 50012:其他客户端登录了; 50014:Token 过期了;
      if (res.code === 401 || res.code === 50012 || res.code === 50014) {
           store.dispatch('FedLogOut').then(() => {
              location.reload();// 为了重新实例化vue-router对象 避免bug
           });
           console.log(this);
           alert('你已被登出，请检查账号安全');
    //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     })
    //     .then(() => {
    //       store.dispatch('FedLogOut').then(() => {
    //         location.reload();// 为了重新实例化vue-router对象 避免bug
    //       });
    //     }).catch(function(error){
    //     console.log(error);
    // });
      }  else {
      //this.$vux.toast.text(res.msg);
      //   Message({
      //   message: res.msg,
      //   type: 'error',
      //   duration: 5 * 1000
      // });
      console.warn(res.msg);
      }
      return Promise.reject({message:res.msg});
    } else {
      return response.data;
    }
  },
  error => {
    // 通用请求错误的处理Network Error
    console.log('err' + error);
    //debugger;
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误';
          break
  
        case 401:
          error.message = '未授权，请登录';
          break
  
        case 403:
          error.message = '拒绝访问';
          break
  
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break
  
        case 408:
          error.message = '请求超时';
          break
  
        case 500:
          error.message = '服务器内部错误';
          break
  
        case 501:
          error.message = '服务未实现';
          break
  
        case 502:
          error.message = '网关错误';
          break
  
        case 503:
          error.message = '服务不可用';
          break
  
        case 504:
          error.message = '网关超时';
          break
  
        case 505:
          error.message = 'HTTP版本不受支持';
          break
  
        default:
      }
    }else{
      error.message = '请求发送失败，请先确认是否联网';
    }
  
    return Promise.reject(error);
  });

export default service;
