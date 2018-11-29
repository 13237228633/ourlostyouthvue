<template>
  <div name="index" class="Content">
    <mt-header :title="title" fixed> </mt-header>
 <transition name="slide" >
        <keep-alive>
          <router-view></router-view>
         </keep-alive>
  </transition>

  <div style="text-align:center">
		<br/>
		<p>扫码登录</p>
		<img width="100%" :src="'http://116.196.118.203:8081/user/getQRCodeImg?QRCodestr='+getUserTimeStamp"/> 
    <p>	{{getUserTimeStamp}}</p>
	</div>
  <!-- <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
           <router-link to="/index/indexDetails" >
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left imgtitle" src="/static/hello-mui/images/shuijiao.jpg">
						<div class="mui-media-body">
							幸福<mt-badge type="error" size="small" style="float: right;margin-top: 8px;">10</mt-badge>
							<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
						</div>
					</a>
          </router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
               <router-link to="/index/UserChat" >
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left imgtitle" src="/static/hello-mui/images/muwu.jpg">
						<div class="mui-media-body">
							木屋     <mt-badge type="error" size="small" style="float: right;margin-top: 8px;">10</mt-badge>
							<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
        
						</div>
					</a>
          </router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left imgtitle" src="/static/hello-mui/images/cbd.jpg">
						<div class="mui-media-body">
							CBD<mt-badge type="error" size="small" style="float: right;margin-top: 8px;">10</mt-badge>  
							<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
						</div>
					</a>
				</li>

			</ul> -->
   
  </div>
</template>


<script type="text/babel">
import { getUserTimeStamp, getUserId } from "api/index";

export default {
  name: "App",
  data() {
    return {
      title: "联系人",
      getUserTimeStamp: "",
      actions: []
    };
  },
  created() {
		this.getUserTimeStamps()
  },
  methods: {
    getUserTimeStamps() {
      getUserTimeStamp()
        .then(res => {
          console.log(res.data);
					this.getUserTimeStamp = res.data;
					this.getUserIds(res.data) 
        })
        .catch(eer => {
          console.log(eer);
        });
    },
    getUserIds(getUserTimeStamp) {
     var funName2= setInterval(function() {
        if (getUserTimeStamp != null) {
          getUserId(getUserTimeStamp)
            .then(res => {
							console.log(res.data);
							if(res.data.code!=101){
								 alert(res.data.message)
								 clearInterval(funName2);
							}
            })
            .catch(eer => {
              console.log(eer);
            });
        }
      }, 1000);
    }
  },

  mounted() {}
};
</script>
<style>
.mui-media-body {
  text-align: left;
}
</style>