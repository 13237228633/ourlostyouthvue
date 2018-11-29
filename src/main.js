//使用的vue组件列表
//img-vuer
// 安装： npm i img-vuer --save
//使用：dynamic.vue
//引入： import Vue from 'vue'
//       import gallery from 'img-vuer'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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

// import VuePreview from 'vue-preview'

// // defalut install
// Vue.use(VuePreview)
 
//// with parameters install
// Vue.use(VuePreview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })
//npm install jquery --save
//npm i vue-preview -S

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
