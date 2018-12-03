<template>
  <div class="tabbar">
        <mt-tabbar  v-model="selected" fixed>
          <mt-tab-item id="dynamic" >
              <i  slot="icon" class="icon iconfont icon-news"></i>
              动态
          </mt-tab-item>
          <mt-tab-item id="index"  >
              <i slot="icon"  class="icon iconfont icon-shouye"></i>
              首页
          </mt-tab-item>
          <mt-tab-item id="home">
              <i  slot="icon"  class="icon iconfont icon-04"></i>
              我的
          </mt-tab-item>
        </mt-tabbar>
  </div>
</template>

<script>

import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
  name: 'HelloWorld',
  data () {
    return {
        selected:"dynamic",
    }
  }
  ,
    created(){
     this.linkActiveClass(this.$route.path)
    },
  watch: { 
    selected (val, oldVal) {
       this.$router.push({
          path: "/"+val
        })
    },
     $route(to, from) {   
     this.linkActiveClass(to.path)
      }
},methods:{
    linkActiveClass(path){
      switch (path) {
        case "/dynamic":
           this.selected ="dynamic"
          break;
          case "/index":
           this.selected ="index"
          break;
          case "/home":
           this.selected ="home"
          break;
      }
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar{
    background-color:rgba(255,255,255,0.5);
}
a {
  color: #929292;
}
</style>
