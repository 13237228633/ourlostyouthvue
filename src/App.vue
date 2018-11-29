<template>
  <div id="app">
<keep-alive>
     <router-view></router-view>
</keep-alive>    
 
    <tab></tab>
  </div>
</template>

<script>
import Tab from './components/tabbar/tabbar'
import ExpressionEditor from './components/template/ExpressionEditor/ExpressionEditor.vue'

export default {
  name: 'App',
   components: {
    Tab,
    ExpressionEditor,
  data() {
    return {
      wrapperHeight: 0,
    };
    }
  },
  mounted() {
  }
}

//722/627
//722/647
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
  padding-bottom: 55px;
  font-family: "Microsoft YaHei";
}

*{
   margin: 0; 
   padding: 0;
   font-family: "Microsoft YaHei";
  }
.mint-popup {
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 1000;
}
a {
   text-decoration: none;
}

/* 子页面样式 */
.children {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background:#fafafa;
}

/* 动画 */
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s
}
.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0)
}

.imgtitle{
  border-radius:30px
}


  .page-infinite-loading div{
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
  .clear{
    clear: both;
  }
</style>