//使用的vue组件列表
//img-vuer
// 安装： npm i img-vuer --save
//使用：dynamic.vue
//引入： import Vue from 'vue'
//       import gallery from 'img-vuer'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import '../static/hello-mui/css/mui.min.css'

//引入图片预览插件
import gallery from 'img-vuer'
Vue.use(gallery)

// 时间格式转换
// npm install moment --save
import moment from "moment"
Vue.use(moment);

// import img from '../../assets/image/load.gif'

// Vue.use(Lazyload,{
//     loading:img,
//     error:img
// })

// 引入全部组件
import Mint from 'mint-ui';
Vue.use(Mint);

import 'mint-ui/lib/style.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
import $ from 'jquery'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.back = function (UrlName) {
  console.log(window.history)
  if (window.history.length <= 2) {
    this.$router.push({ name: UrlName});
    return false
  } else {
    this.$router.go(-1)
  }
}