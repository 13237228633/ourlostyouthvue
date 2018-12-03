<template>
  <div class="tabs">
    <!--命名路由-->
    <ul>
      <router-link v-for="(item,index) in tabData" :key="index" :to="{name:item.name}" tag="li">
        <div>
          <i v-bind:class="'icon iconfont '+item.icon"></i>
        </div>
        <div>{{item.text}}</div>
      </router-link>
      <!-- <router-link :to="{name:'home'}" tag="li" >
        <div>
          <i class="icon iconfont icon-shouye"></i>
        </div>
        <div>首页</div>
      </router-link>
      <router-link :to="{name:'index'}" tag="li">
        <div>
          <i class="icon iconfont icon-wode"></i>
        </div>
        <div>我的</div>
      </router-link>-->
    </ul>
  </div>
</template>
<script>
export default {
  name: "tab",
  data() {
    return {
      tabData: []
    };
  },
  created() {
    var data = this.$router.options.routes;
    console.log(data)
    for(var i=0;i<data.length;i++){
       if(data[i].isHied)
        continue;
       this.tabData.push(data[i]) 
    }
    console.log(this.tabData)
  },
  methods: {

  }
};
</script>

 <style lang="less" type="text/less">
.tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px #000;
  color: #929292;
  width: 100%;
  & > ul,
  & > ul > li {
    margin: 0;
    padding: 0;
  }
  ul {
    display: table;
    width: 100%;
    & > li {
      text-align: center;
      font-size: 16px;
      display: table-cell;
      padding: 5px 12px;
      cursor: pointer;
      &.router-link-active {
        color: rgb(38, 162, 255);
      }
      & > div {
        font-size: 10px;
        & > i {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
