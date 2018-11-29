<template>
<div class="dynamec children">
     <mt-header :title="$route.name">
        <router-link to="" @click.native="popupVisible = false;$router.go(-1)"  slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
 <div style="  border:0px solid red;  overflow-y:scroll;"  id="wrapper"   class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
 <mt-loadmore  name="loadmoreB"    :top-method="loadTop"  :bottom-method="loadBottom" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
    <div :style="{'min-height': wrapperHeight + 'px'  }" style="background-color:#fff">
     <div class="divHeader" id="ap">
      <div class="divimgHeader" style="background-image: url(http://www.ivusic.com/uploads/20180223/ef93506d4c91a9811d1aca01aefc7252.jpg);"></div>
       <img class="imgTitle"  src="http://q.qlogo.cn/qqapp/101424961/F6D4E6D16F4CA383BC50D3EE740A2495/100">
       <div style="clear: both;"></div>
     </div>
     <div v-show=idshow >你还没有发布动态哦</div>
    <div class="aaaa">
     <div  style="background-color:#ececec;padding-bottom:1px">
        <div v-for="(item,key) in AlbumListJson" v-bind:key="key" class="divContent">
          <div class="divTitle">
              <div class="divImgtitle">
                  <img class="imgTitle"  src="http://q.qlogo.cn/qqapp/101424961/F6D4E6D16F4CA383BC50D3EE740A2495/100">
              </div>
              <div class="divTitleContent">
              <ul>
                <li class="liName">不畏将来。</li>
                <li class="liNameA">今天08:08   我爱的人，和爱我的人。我爱的人，和爱我的人。我爱的人，和爱我的人。我爱的人，和爱我的人。</li>
              </ul>
              </div>
              <div style="clear: both;"></div>
          </div>
          <div class="divContentText">
                      再深的伤口总会愈合，无论它会留下多么丑陋的疤；再疼的伤痛终会过去，无论它曾经多么痛彻心扉；再大的劫难也一定可以度过，
                      只要我们有勇气坚持走下去。感情是一份没有答案的问卷，苦苦的追寻并不能让生活变得更圆满。也许留下一点遗憾，怀着一份留恋，
                      带着一丝伤感，会让这份答卷更隽永，也更久远。
                      再深的伤口总会愈合，无论它会留下多么丑陋的疤；再疼的伤痛终会过去，无论它曾经多么痛彻心扉；再大的劫难也一定可以度过，
                      只要我们有勇气坚持走下去。感情是一份没有答案的问卷，苦苦的追寻并不能让生活变得更圆满。也许留下一点遗憾，怀着一份留恋，
                      带着一丝伤感，会让这份答卷更隽永，也更久远。
          </div>
              <div class="divContentImg">
                <ul class="img-listA">
                <li style="background-image: url(http://www.ivusic.com/uploads/20180223/6cbf98f1d88e229081d1f50f2e650cd1.jpg);"></li>
                <li style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1515927125&di=63b2573dfbca43ec900202119cac239b&src=http://tupian.enterdesk.com/2013/xll/012/07/1/4.jpg);"></li>
                <li style="background-image: url(http://www.ivusic.com/uploads/20180223/ef93506d4c91a9811d1aca01aefc7252.jpg);"></li>
                <li style="background-image: url(http://www.ivusic.com/uploads/20180223/e73a89239960ef69080e25126db27324.jpg);"></li>
                <li style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1515927169&di=f1ca36a97c12182d0a872d73608051a5&src=http://imgsrc.baidu.com/forum/pic/item/5fb478f5e0fe992522941e9734a85edf8fb171fe.jpg);"></li>
                <li style="background-image: url(http://www.ivusic.com/uploads/20180223/72be13bcdb303bbf40ba7b155159cb4b.jpg);"></li>
                <li style="background-image: url(http://www.ivusic.com/uploads/20180223/6cbf98f1d88e229081d1f50f2e650cd1.jpg);"></li>
                  <div style="clear: both;"></div>
            </ul>
          </div>
            <div style="clear: both;"></div>
        </div>
     </div>
    </div>   
</div>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus == 'drop'"><img class="RotationB" src="../../assets/image/arrow.png"  align="absmiddle"/>释放立即刷新</span>
      <span v-show="topStatus == 'pull'"><img class="RotationA" src="../../assets/image/arrow.png"  align="absmiddle"/>下拉刷新</span>
      <span v-show="topStatus === 'loading'"><img class="Rotation" src="../../assets/image/load.gif"  align="absmiddle"/><span style="padding-left:5px">正在刷新...</span></span>
    </div>
    <div slot="bottom" class="mint-loadmore-bottom">
      <span v-show="bottomStatus == 'drop'"> <img class="RotationA" src="../../assets/image/arrow.png"  align="absmiddle"/>释放立即加载</span>
      <span v-show="bottomStatus == 'pull'"><img class="RotationB" src="../../assets/image/arrow.png"  align="absmiddle"/>上拉加载</span>
      <span v-show="bottomStatus === 'loading'"><img class="Rotation" src="../../assets/image/load.gif"  align="absmiddle"/><span style="padding-left:5px">正在加载...</span></span>
    </div>
     </mt-loadmore>
   </div>
    </div>
</template> 

<script>
import Vue from 'vue'
import { Loadmore } from 'mint-ui';
import { getAlbumListJson } from 'api/index'
Vue.component(Loadmore.name, Loadmore);
export default {
  name: "home",
  data() {
    return {
      title: "我的",
      topStatus: "",
      allLoaded: false,
      topStatus: "",
      bottomStatus: "",
      wrapperHeight:0,
      idshow:false,
     AlbumListJson: []
    };
  }, created() {
    console.log(this.$route.params.id)
     getAlbumListJson(this.$route.params.id)
      .then(res => {
         this.AlbumListJson = [];
        for (var i = 0; i < 3; i++) {
          this.AlbumListJson.push(res.data.data[i].AlnumUrl);
          console.log(res.data.data[i].AlnumUrl);
        }
       android.showToast("首次加载成功 ");
      if(this.AlbumListJson.length<1)
      {
        this.idshow=true;
      }
      })
      .catch(eer => {
          console.log(eer);        
      });
  },
  methods: {
    handleTopChange(status) {
      this.topStatus = status;
    },handleBottomChange(status) {
      this.bottomStatus = status;
     },
    loadTop() {
      getAlbumListJson(1)
        .then(res => {
            setTimeout(() => {
         this.AlbumListJson = [];
          for (var i = 0; i < 3; i++) {
            this.AlbumListJson.push(res.data.data[i].AlnumUrl);
            console.log(res.data.data[i].AlnumUrl);
          }
                   this.$refs.loadmore.onTopLoaded();
                     android.showToast("刷新成功 ");
                  }, 1500);
        })
        .catch(eer => {
          console.log(eer);
        })
    },
    loadBottom() {
    getAlbumListJson(1)
        .then(res => {
            setTimeout(() => {
          for (var i = 0; i < 3; i++) {
            this.AlbumListJson.push(res.data.data[i].AlnumUrl);
          }
              this.$refs.loadmore.onBottomLoaded();
            android.showToast("加载成功 ");
                  }, 1500);
        })
        .catch(eer => {
          console.log(eer);
        })
    }
  },
  beforeRouteLeave(to, from, next) {
    let position = window.scrollY; //记录离开页面的位置
    from.meta.scrollTop = window.scrollY;
    next();
  },mounted() {
      this.wrapperHeight = document.documentElement.clientHeight-40;
    }
};
function self(title)
    {
         document.getElementById("ap").innerHTML= title
    }
</script>

<style scoped>
.dynamec{
  background-color:#323232;
  font-family:'微软雅黑';
}
.aaa{
  background-color:#FFF;
}
.divHeader img {
  float: left;
}
.divimgHeader {
  width: 100vw;
  height: 60vw;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  text-align: center;
  border: 0px;
  background: #fff no-repeat center;
  background-size: cover;
}
.divHeader .imgHeader {
  width: 100vw;
  padding-bottom: 0px;
  margin: 0px;
}
.divHeader .imgTitle {
  width: 26vw;
  height: 26vw;
  margin-top: -28vw;
  margin-left: 2vw;
  border-radius: 50%;
  border: 1px solid rgb(255, 255, 255);
}

.divContent {
  margin-bottom: 2vw;
  background-color: #fff;
  width: 100vw;
  padding-top: 2vw;
  padding-left: 2vw;
  border: 0px solid red;
  text-align: left; 
}
.divTitle {
  border: 0px solid red;
    width: 96vw;
}
.divContent .imgTitle {
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  border: 0px solid rgb(255, 255, 255);
}
.divContent .divImgtitle,
.divContent .divTitleContent {
  float: left;
  border: 0px solid red;
  margin: 0;
  padding: 0;
  height: 10vw;
}
.divContent .divTitleContent {
  padding-left: 1vw;
  width: 85vw;
}
ul,
li {
  margin: 0;
  padding: 0;
  border: 0px solid red;
  height: 5vw;
}
ul li {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 0px solid red;
}
.liName {
  color: rgb(0, 0, 0);
  line-height: 4.6vw;
  text-align: left;
  overflow: hidden;
  font-size: 4.6vw;
  padding-bottom: 0.4vw;
}
.liNameA {
  text-align: left;
  line-height: 3.6vw;
  overflow: hidden;
  font-size: 3.6vw;
  padding-top: 1.4vw;
}
.divContentText {
  padding-top: 2vw;
  border: 0px solid red;
  width: 96vw;
  font-size: 4vw;
  line-height: 5.5vw;
  text-indent: 2em;
  word-break: break-all;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;
}
.divContentImg {
  padding-top: 2vw;
}
.img-listA {
  text-align: left;
  border: 0px;
}
.img-listA li {
  margin: 0.5vw;
  text-align: center;
  float: left;
  border: 0px;
  position: relative;
  display: inline-block;
  width: 31vw;
  height: 31vw;
  background: #fff no-repeat center;
  background-size: cover;
}

@-webkit-keyframes rotation{
from {-webkit-transform: rotate(0deg);}
to {-webkit-transform: rotate(360deg);}
}
.Rotation{
   -webkit-transform: rotate(360deg);
animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite; 
width:18px;
height:18px; 
}
.RotationB{
-webkit-transform: rotate(180deg);
width:18px;
height:18px; 
}
.RotationA{
width:18px;
height:18px; 
}
.mint-loadmore-top,.mint-loadmore-bottom{
  color: #fff;
}
</style>
