<template>
  <div id="app">
<keep-alive>
     <router-view></router-view>
</keep-alive>    
    <tab></tab>
  </div>
</template>

<script>
 //import Tab from './components/tabbar/tabbar'
import Tab from './components/tab/tab'
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
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
  /* padding-bottom: 55px; */
  font-family: "Microsoft YaHei";
}

*{
   margin: 0; 
   padding: 0;
   font-family: "Microsoft YaHei";
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

/* 提示框样式 */
.mint-spinner-double-bounce{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}

/* 清除浮动 */
  .clear{
    clear: both;
  }

</style>