<template>
<div class="dynamec children">
      <mt-header :title="$route.name">
        <router-link to="" @click.native="popupVisible = false;$router.go(-1)"  slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>

    <div class="mui-content">
			<div id='msg-list'   ref="xwBody">
				<!-- <div class="msg-item <%= (item.sender=='self'?' msg-item-self':'') %>" msg-type='<%=(item.type)%>' msg-content='<%=(item.content)%>'>
				    <% if(item.sender=='self' ) { %> 
						 <i class="msg-user mui-icon mui-icon-person" style="border-radius:30px"></i> 
                           <img class="msg-user mui-icon"  style="border-radius:30px" src="/static/hello-mui/images/cbd.jpg"  />
					 <% } else { %>
						<img class="msg-user-img" src="../images/logo.png" alt="" />
					<% } %> 
					<div class="msg-content">
						<div class="msg-content-inner">
                            4165416541654
							<% if(item.type=='text' ) { %>
								<%=( item.content|| '&nbsp;&nbsp;') %>
							<% } else if(item.type=='image' ) { %>
								<img class="msg-content-image" src="<%=(item.content)%>" style="max-width: 100px;" />
							<% } else if(item.type=='sound' ) { %>
								<span class="mui-icon mui-icon-mic" style="font-size: 18px;font-weight: bold;"></span>
								<span class="play-state">点击播放</span>
							<% } %>
						</div>
						<div class="msg-content-arrow"></div>
					</div>
					<div class="mui-item-clear"></div>
				</div> -->

                <div  v-for="(item,key) in items"  v-bind:key="key" v-bind:class="[item.isMy ?'msg-item msg-item-self' : 'msg-item']"  msg-type='<%=(item.type)%>' msg-content='<%=(item.content)%>'>
                   <p style="text-align:center">{{item.itemDate}}<p>
                    <img class="msg-user mui-icon"  style="border-radius:30px" :src="item.titleImg" />
					<div class="msg-content">
						<div class="msg-content-inner">
                           {{item.Content}}<br/>
                            <!-- <img class="msg-content-image" src="/static/hello-mui/images/shuijiao.jpg" style="max-width: 100%;" />   -->
						</div>
						<div class="msg-content-arrow"></div>
					</div>
					<div class="mui-item-clear"></div>
				</div>

			</div>
		</div>
		<footer>
			<!-- <div class="footer-left">
				<i id='msg-image' class="mui-icon mui-icon-camera" style="font-size: 28px;"></i>
			</div> -->
			<div class="footer-center">
				<textarea id='msg-text' type="text" class='input-text' v-model=message></textarea>
				<button  id='msg-sound' type="button" class='input-sound' >按住说话</button>
			</div>
			<label for="" class="footer-right">
               <i id='msg-image' class="mui-icon mui-icon-camera" style="font-size: 28px;" v-show=isshow   v-on:click="sheetVisible=true" ></i>
				<!-- <i id='msg-type' class="mui-icon mui-icon-mic" v-show=isshow></i> -->
                <i id='msg-type' class="mui-icon mui-icon-paperplane" v-show=!isshow  v-on:click="sendMessage()"></i>
			</label>
		</footer>
		<div id='sound-alert' class="rprogress">
			<div class="rschedule"></div>
			<div class="r-sigh">!</div>
			<div id="audio_tips" class="rsalert">手指上滑，取消发送</div>
		</div>
       <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
       <input id="takepicture" type="file" accept="image/*" capture="camera" style="display: none">
       		 <!-- 提示音 -->
		 <audio style="display:none"  preload="metadata" controls="controls" autoplay="autoplay" ref="hintAudio">
	        <source :src="myaudio" type="audio/mpeg"/>
	      </audio>
    </div>
</template> 

<script>
var ws;
import Vue from "vue";
import { getAlbumListJson } from "api/index";
export default {
  name: "home",
  data() {
    return {
      title: "我的",
      isshow: true,
      message: "",
      sheetVisible: false,
      actions: [],
      bellStatus: true,
      myaudio: "/static/audio/msg.mp3", //铃音
      items: [
        {
          titleImg: "/static/hello-mui/images/shuijiao.jpg",
          Content: "一年奔波，尘缘遇了谁；一句珍重，天涯别了谁；",
          isMy: false
        },
        {
          titleImg: "/static/hello-mui/images/shuijiao.jpg",
          Content: "一年奔波，尘缘遇了谁；一句珍重，天涯别了谁；",
          isMy: true
        }
      ]
    };
  },
  watch: {
    message: function(val) {
      if (this.message.length > 0) {
        this.isshow = false;
        console.log(this.isshow);
      } else {
        this.isshow = true;
        console.log(this.isshow);
      }
    }
  },
  created() {
    var _self = this;
    ws = new WebSocket(
      "ws://116.196.118.203:8080/ChatApi/ProcessRequest?user=zhaowenjie"
    );
    ws.onopen = function() {
      console.log("已连接");
    };
    ws.onmessage = function(evt) {
      console.log(evt.data);
      _self.getMessage(evt);
    };
    ws.onerror = function(evt) {
      console.log("连接失败" + JSON.stringify(evt));
    };
    ws.onclose = function() {
      console.log("已经关闭");
    };
  },
  methods: {
    //提示音
    hint(staus) {
    //   if (staus != undefined) {
    //     this.bellStatus = !this.bellStatus;
    //   }
      this.bellStatus
        ? this.$refs.hintAudio.play()
        : this.$refs.hintAudio.pause();
    },
    takePhoto() {
      console.log("taking photo");
      var takePicture = document.getElementById("takepicture");
      // 添加需要处理的代码
      takePicture.click();
    },
    openAlbum() {
      console.log("opening album");
    },
    getMessage(evt) {
      this.hint(true);
      var nowdate = new Date();
      this.items.push({ titleImg: "/static/hello-mui/images/shuijiao.jpg",Content: evt.data,isMy: false,itemDate:nowdate,itemDateA:new Date()})
      this.scrollToBottom();
    },
    sendMessage: function() {
      this.hint(true);
      var nowdate = new Date();
       console.log(nowdate);
      console.log(this.items[this.items.length-1].itemDateA);
      console.log((nowdate-this.items[this.items.length-1].itemDateA));
      if((nowdate-this.items[this.items.length-1].itemDateA)<3000)
      {
          nowdate=null;
      }
      this.items.push({ titleImg: "/static/hello-mui/images/shuijiao.jpg",Content: this.message,isMy: true,itemDate:nowdate,itemDateA:new Date()})
      if (ws.readyState == WebSocket.OPEN) {
        if ("zhaowenjie" == "zhaowenjie")
          ws.send("zhaowenjie1|" + this.message);
        else ws.send("zhaowenjie|" + this.message);
        this.scrollToBottom();
      } else {
        console.log("连接已关闭");
      }
     this.message="";
    }, scrollToBottom() {
      setTimeout(() => {
        //滚动条长度
        var currentDistance =
          this.$refs.xwBody.scrollHeight - this.$refs.xwBody.clientHeight;
        //当前滚动条距离顶部的距离
        var currentScroll_y = this.$refs.xwBody.scrollTop;
        if (currentDistance > 0 && currentDistance > currentScroll_y) {
          currentScroll_y =
            Math.ceil((currentDistance - currentScroll_y) / 10) +
            currentScroll_y;
          currentScroll_y =
            currentScroll_y > currentDistance
              ? currentDistance
              : currentScroll_y;
          //微信和qq浏览器不支持 scrollTo？
          //this.$refs.xwBody.scrollTo(0,currentScroll_y);
          this.$refs.xwBody.scrollTop = currentScroll_y;
          this.scrollToBottom();
        }
      }, 13);
    }
  },
  beforeRouteLeave(to, from, next) {
    let position = window.scrollY; //记录离开页面的位置
    from.meta.scrollTop = window.scrollY;
    next();
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - 40;
    this.actions = [
      {
        name: "拍照",
        method: this.takePhoto
      },
      {
        name: "从相册中选择",
        method: this.openAlbum
      }
    ];
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.meta.scrollTop);
    next(vm => {
      $("#msg-list").scrollTop(to.meta.scrollTop);
    });
  },
  beforeRouteLeave(to, from, next) {
    from.meta.scrollTop = $("#msg-list").scrollTop();
    console.log(from.meta.scrollTop);
    next();
  }
};
function self(title) {
  document.getElementById("ap").innerHTML = title;
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}
footer {
  position: fixed;
  width: 100%;
  height: 50px;
  min-height: 50px;
  border-top: solid 1px #bbb;
  left: 0px;
  bottom: 0px;
  overflow: hidden;
  /* padding: 0px 50px; */
  padding: 0px 50px 0px 5px;
  background-color: #fafafa;
}
/* .footer-left {
				position: absolute;
				width: 50px;
				height: 50px;
				left: 0px;
				bottom: 0px;
				text-align: center;
				vertical-align: middle;
				line-height: 100%;
				padding: 12px 4px;
			} */
.footer-right {
  position: absolute;
  width: 50px;
  height: 50px;
  right: 0px;
  bottom: 0px;
  text-align: center;
  vertical-align: middle;
  line-height: 100%;
  padding: 12px 5px;
  display: inline-block;
}
.footer-center {
  height: 100%;
  padding: 5px 0px;
}
.footer-center [class*="input"] {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.footer-center .input-text {
  background: #fff;
  border: solid 1px #ddd;
  font-size: 16px !important;
  line-height: 18px !important;
  overflow: auto;
}
.footer-center .input-sound {
  background-color: #eee;
}
.mui-content {
  height: 100%;

  overflow: auto;
  background-color: #fafafa;
}
#msg-list {
  height: 100%;
  overflow: auto;
  padding-bottom: 90px;
  -webkit-overflow-scrolling: touch;
}
.msg-item {
  padding: 8px;
  clear: both;
}
.msg-item .mui-item-clear {
  clear: both;
}
.msg-item .msg-user {
  width: 38px;
  height: 38px;
  display: inline-block;
  vertical-align: top;
  float: left;
  color: #ddd;
  border-radius: 30px;
}

.msg-item .msg-user-img {
  width: 38px;
  height: 38px;
  display: inline-block;
  border-radius: 3px;
  vertical-align: top;
  text-align: center;
  float: left;
  color: #ddd;
}

.msg-item .msg-content {
  display: inline-block;
  border-radius: 5px;
  border: solid 1px #d3d3d3;
  background-color: #ffffff;
  color: #333;
  padding: 8px;
  vertical-align: top;
  font-size: 15px;
  position: relative;
  margin: 0px 8px;
  max-width: 75%;
  min-width: 35px;
  float: left;
}
.msg-item .msg-content .msg-content-inner {
  overflow-x: hidden;
  display: block;
  word-break: break-all;
  word-wrap: break-word;
}
.msg-item .msg-content .msg-content-arrow {
  position: absolute;
  border: solid 1px #d3d3d3;
  border-right: none;
  border-top: none;
  background-color: #ffffff;
  width: 10px;
  height: 10px;
  left: -5px;
  top: 12px;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
.msg-item-self .msg-user,
.msg-item-self .msg-content {
  float: right;
}
.msg-item-self .msg-content .msg-content-arrow {
  left: auto;
  right: -5px;
  -webkit-transform: rotateZ(225deg);
  transform: rotateZ(225deg);
}
.msg-item-self .msg-content,
.msg-item-self .msg-content .msg-content-arrow {
  background-color: #4cd964;
  color: #fff;
  border-color: #2ac845;
}
footer .mui-icon {
  color: #000;
}
footer .mui-icon:active {
  color: #007aff !important;
}
footer .mui-icon-paperplane:before {
  content: "发送";
}
footer .mui-icon-paperplane {
  /*-webkit-transform: rotateZ(45deg);
				transform: rotateZ(45deg);*/

  font-size: 16px;
  word-break: keep-all;
  line-height: 100%;
  padding-top: 6px;
  color: rgba(0, 135, 250, 1);
}
#msg-sound {
  -webkit-user-select: none !important;
  user-select: none !important;
}
.rprogress {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 140px;
  height: 140px;
  margin-left: -70px;
  margin-top: -70px;
  background-image: url(/static/hello-mui/images/shuijiao.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 30px 30px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  display: none;
  -webkit-transition: 0.15s;
}
.rschedule {
  background-color: rgba(0, 0, 0, 0);
  border: 5px solid rgba(0, 183, 229, 0.9);
  opacity: 0.9;
  border-left: 5px solid rgba(0, 0, 0, 0);
  border-right: 5px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  box-shadow: 0 0 15px #2187e7;
  width: 46px;
  height: 46px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -23px;
  margin-top: -23px;
  -webkit-animation: spin 1s infinite linear;
  animation: spin 1s infinite linear;
}
.r-sigh {
  display: none;
  border-radius: 50px;
  box-shadow: 0 0 15px #2187e7;
  width: 46px;
  height: 46px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -23px;
  margin-top: -23px;
  text-align: center;
  line-height: 46px;
  font-size: 40px;
  font-weight: bold;
  color: #2187e7;
}
.rprogress-sigh {
  background-image: none !important;
}
.rprogress-sigh .rschedule {
  display: none !important;
}
.rprogress-sigh .r-sigh {
  display: block !important;
}
.rsalert {
  font-size: 12px;
  color: #bbb;
  text-align: center;
  position: absolute;
  border-radius: 5px;
  width: 130px;
  margin: 5px 5px;
  padding: 5px;
  left: 0px;
  bottom: 0px;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
#h {
  background: #fff;
  border: solid 1px #ddd;
  padding: 10px !important;
  font-size: 16px !important;
  font-family: verdana !important;
  line-height: 18px !important;
  overflow: visible;
  position: absolute;
  left: -1000px;
  right: 0px;
  word-break: break-all;
  word-wrap: break-word;
}
.cancel {
  background-color: darkred;
}
</style>
