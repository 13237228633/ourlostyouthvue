<template>
<div name="dynamec" class="dynamec" >
<mt-header fixed :title="'动态'">
  <i class="icon iconfont  icon-dongtai"  slot="right" v-on:click="func('dynamicAdd')"></i> 
</mt-header>

 <transition name="slide" >
        <keep-alive>
          <router-view></router-view>
         </keep-alive>
  </transition>

<!-- <mt-header fixed :title="'动态'+clientHeight+'/'+wrapperHeight">
<mt-button icon="more" slot="right"   v-on:click="Getdynamecheight">
  </mt-button></mt-header> -->

 <div class="page-popup">
    <mt-popup v-model="popupMessage" position="top" class="mint-popup-2" :modal="false">
      <p> <i slot="icon" style="font-size:14px" class="icon iconfont icon-dui"></i>{{message}}</p>
    </mt-popup>
  </div>
 <div   ref="wrapper" id="wrapper" class="page-loadmore-wrapper" :style="'height:'+wrapperHeight + 'px;overflow-y: scroll;' ">
 <mt-loadmore   style="background-color: #323232;" name="loadmoreA"  :autoFill="false" :top-method="loadTop"  :bottom-method="loadBottom" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus == 'drop'"><img class="RotationB" src="../../assets/image/arrow.png"  align="absmiddle"/>释放立即刷新</span>
      <span v-show="topStatus == 'pull'"><img class="RotationA" src="../../assets/image/arrow.png"  align="absmiddle"/>下拉刷新</span>
        <span v-show="topStatus === 'loading'">
          <p class="page-infinite-loading " >
          <mt-spinner :type="1" color='#26a2ff' :size="20" ></mt-spinner>
          正在刷新...
         </p>
        </span>
       <!-- <span v-show="topStatus === 'loading'"> 
         <span>
         <i style="font-size:17px;padding:0px;margin:0px;" slot="icon" class="icon iconfont icon-jiazai layui-icon layui-anim layui-anim-rotate layui-anim-loop"></i> 
         </span>
         <span style="margin-left:10px">正在刷新...</span>
        </span>  -->
          
    </div>
    <div slot="bottom" class="mint-loadmore-bottom">
      <span v-show="bottomStatus == 'drop'"> <img class="RotationA" src="../../assets/image/arrow.png"  align="absmiddle"/>释放立即加载</span>
      <span v-show="bottomStatus == 'pull'"><img class="RotationB" src="../../assets/image/arrow.png"  align="absmiddle"/>上拉加载</span>
     <!-- <span v-show="bottomStatus === 'loading'"> <span style="width:20px;height:20px"><i style="font-size:17px;padding:0px;margin:0px" slot="icon" class="icon iconfont icon-jiazai loading"></i></span> <span style="margin-left:10px">正在加载...</span></span>  -->
       <span v-show="bottomStatus === 'loading'">
          <p class="page-infinite-loading " >
          <mt-spinner :type="1" color='#26a2ff' :size="20" ></mt-spinner>
          正在加载...
          </p>
        </span>
    </div>

    <div class="boyContent"  :style="'min-height:'+ wrapperHeight + 'px'">
     <div class="divHeader">
      <div class="divimgHeader" style="background-image: url(http://www.ivusic.com/uploads/20180223/ef93506d4c91a9811d1aca01aefc7252.jpg);"></div>
      <!-- <video id="divimgHeader" src="http://myhome1314-1253564673.cossh.myqcloud.com/MyVideo/%E7%88%B1%E7%9A%84%E6%97%85%E9%80%94.mp4" class="divimgHeader" autoplay="autoplay" loop='loop'></video> -->
       <img class="imgTitle"   v-on:click="func('User')"  :src="UserHeadPortrait">
       <div style="clear: both;"></div>
     </div>
     <div  v-if="UserDynamicList.length==0" style="background:#FFF;padding-top:10px;text-align:center">你还没有发布动态哦~</div>

    <div  v-for="(item,index,key) in UserDynamicList"  v-bind:key="key" class="aaaa">
      <div  class="divContent">
        <!-- <router-link class="router-link" to="/home/User"> -->
            <div class="divTitle" v-on:click="func('User')">
                <div class="divImgtitle">
                    <img class="imgTitle" :src="item.UserHeadPortrait">
                </div>
                <div class="divTitleContent">
                <ul>
                  <li class="liName" >{{item.UserName}}</li>
                  <li class="liNameA">{{item.CreateDate}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.liNameA}}</li>
                </ul>
                </div>
                  <div style="clear: both;"></div>
            </div>
            <div class="divContentText" v-on:click="func('User')" v-html='item.DynamicContent'></div>
            <div class="divContentImg">
              <ul class="img-listA">
                  <img   v-for="(itema,indexs,key) in item.ListdivContentImg" v-if="itema.src!=''"  v-bind:key="key"  v-gallery="'group2'+index"  :src="itema.src"/>
                  <!-- http://www.ivusic.com/uploads/20180223/6cbf98f1d88e229081d1f50f2e650cd1.jpg -->
                  <!-- <img  v-gallery:(groupName+index)  src="http://ocm0knkb1.bkt.clouddn.com/1-3.jpg"/>
                  <img  v-gallery:(groupName+index)  src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1515927169&di=f1ca36a97c12182d0a872d73608051a5&src=http://imgsrc.baidu.com/forum/pic/item/5fb478f5e0fe992522941e9734a85edf8fb171fe.jpg"/></li>
                  <img  v-gallery:(groupName+index)  src="http://www.ivusic.com/uploads/20180223/72be13bcdb303bbf40ba7b155159cb4b.jpg"/>
                  <img  v-gallery:(groupName+index)  src="http://www.ivusic.com/uploads/20180223/6cbf98f1d88e229081d1f50f2e650cd1.jpg"/> -->
                    <div style="clear: both;"></div>
              </ul>
            </div>
            <div style="height:21px;">
              <i style="font-size:21px;float: right;font-weight: bold;" class="icon iconfont icon-pinglun"></i>
              <i v-on:click='GetUserDynamicList(1, 1, 30, true, 0);' style="font-size:21px;float: right;padding-right:50px" class="icon iconfont icon-dianzan2"></i>
            </div>
            <div style="clear: both;"></div>
            <hr class="hrCommentsContent">
           <p class="Fabulous">
              <svg class="icon" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-dianzan1"></use></svg>
              <span style=" color:#285c9d;">不畏将来。、</span>
              <span style=" color:#285c9d;">我逝去的青春</span>
              等3个人
           </p>
            <ul class="comment">
              <li class="CommentsContent" v-for="(itemc,index,key) in item.CommentsContent"  v-bind:key="key" v-if="itemc.Replyuserid<=0"><span style=" color:#285c9d;"> {{itemc.UserName}}</span>：{{itemc.CommentsContent}}</li>
              <li class="CommentsContent" v-for="(itemc,index,key) in item.CommentsContent"  v-bind:key="key" v-if="itemc.Replyuserid>0" ><span style=" color:#285c9d;"> {{itemc.UserName}}</span>&nbsp;&nbsp;回复&nbsp;&nbsp;<span  style=" color:#285c9d;">{{itemc.ReplyUserName}}</span>：{{itemc.CommentsContent}}</li>
            </ul>
             <div style="clear: both;"></div>
     </div>
         <p v-show="!((index+1)==UserDynamicList.length)" style="background-color:#ececec;height:2vw;width:100vw;"></p>
    </div> 
    <span v-show="allLoaded" style="color: #000;"><p class="page-infinite-loading"  style="color: #000;background-color: rgb(236, 236, 236);margin:0px">人家也是有底线的哦</p></span>  
    </div>   
 </mt-loadmore>
   </div>
    
    </div>
</template> 


<style scoped>
@import "../../assets/css/dynamec.css";
</style> 

<script>
import moment from "moment";
import { GetUserDynamicList } from "api/index";
export default {
  name: "dynamec",
  data() {
    return {
      title: "我的",
      allLoaded: false,
      topStatus: "",
      bottomStatus: "",
      isshowloading: true,
      UserDynamicList: [],
      message: "",
      popupMessage: false,
      groupName: "",
      clientHeight: 0,
      wrapperHeight: 0,
      UserHeadPortrait:'',
      PageSize:30,
      CurrentIndex:1,
      userid:1
    };
  },
  watch: {
    popupMessage(val) {
      if (val) {
        setTimeout(() => {
          this.popupMessage = false;
        }, 2000);
      }
    }
    , $route(now,old){     //监控路由变换，控制返回按钮的显示
     if(this.$route.params.istrue){
           this.GetUserDynamicList(this.userid, 1, this.PageSize, true, 0);
     }
    }
  },
  created() {
    this.GetUserDynamicList(this.userid, 1, this.PageSize, true, 0);
    // console.log(moment(this.UserDynamicList[0].nowdatetime).locale('zh-cn').startOf('day').fromNow())
    // console.log(moment(this.UserDynamicList[0].nowdatetime).locale('zh-cn').calendar())
    // this.UserDynamicList[0].nowdatetime=moment(this.UserDynamicList[0].nowdatetime).locale('zh-cn').calendar();
  },
  methods: {
    GetUserDynamicList(userid, CurrentIndex, PageSize, isEmpty, type) {
      GetUserDynamicList(userid, CurrentIndex, PageSize)
        .then(res => {
          if (isEmpty) {
            this.UserDynamicList = [];
            this.CurrentIndex=1
          }
          for (var i = 0; i < res.data.Data.length; i++) {
            res.data.Data[i].CreateDate = moment(res.data.Data[i].CreateDate)
              .locale("zh-cn")
              .calendar();
            this.UserDynamicList.push(res.data.Data[i]);
          }
          if(PageSize> res.data.Data.length)
          {
              this.allLoaded = true;
          }else{
              this.allLoaded = false;
          }
          if (type == 0) {
            this.isshowloading = false;
            this.UserHeadPortrait=res.data.Data[0].UserHeadPortrait
            this.CurrentIndex=this.CurrentIndex+1;
          }
          if (type == 1) {
            this.$refs.loadmore.onTopLoaded();
            this.openNotify("刷新成功 ");
            this.CurrentIndex=this.CurrentIndex+1;
            //android.showToast("刷新成功 ");
          }
          if (type == 2) {  
            this.$refs.loadmore.onBottomLoaded();
            this.CurrentIndex=this.CurrentIndex+1;
            this.openNotify("加载成功 ");
          }
        })
        .catch(eer => {
          console.log(eer);
        });
    },
    func(routername) {
      console.log(routername);
      this.$router.push({ name: routername });
    },
    handleClose() {
      console.log("close event");
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadTop() {
      setTimeout(() => {
        this.GetUserDynamicList(this.userid,1, this.PageSize, true, 1);
      }, 1500);
      //android.showToast("刷新成功 ");
    },
    loadBottom() {
      setTimeout(() => {
        this.GetUserDynamicList(this.userid, this.CurrentIndex, this.PageSize, false, 2);
      }, 1500);
    },
    openNotify(message) {
      this.message = message;
      this.popupMessage = true;
    }
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - 95;
  },
  beforeRouteEnter(to, from, next) {
    console.log(from)
    next(vm => {
      $("#wrapper").scrollTop(to.meta.scrollTop);
    });
  },
  beforeRouteLeave(to, from, next) {
    from.meta.scrollTop = $("#wrapper").scrollTop();
    next();
  }
};
// function self(title) {
//   document.getElementById("ap").innerHTML = title;
// }
</script>