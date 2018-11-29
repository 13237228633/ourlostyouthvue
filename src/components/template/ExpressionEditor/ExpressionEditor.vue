<template>
 <div class="publish" id="publish" >
  <!-- 发布内容输入框，利用Html5的新属性contenteditable，实现可编辑文本 ，会自动将插入的IMG标签解析-->
  <div class="publish_container" contenteditable="true" id="input_conta">
  </div>
  <div nowrap class="image-up-div" v-show="imageupShow">
      <img v-for="(item,index,key) in imageupItems" v-bind:key="key"  :src="item.src" class="image-up" alt="">
  </div>
  <!-- 表情和发送-->
  <div class="face_container">
  <!-- 表情Icon，点击触发事件，动态生成表情并显示 -->
    <span @click=make_face() class="make_face"><i class="icon iconfont  icon-biaoqingfuhao" ></i> </span>
    <span class="make_img" @click="add_img()"><i  class="icon iconfont  icon-tupian"></i></span>
    <mt-button  class="send" @click=send() type="primary" size='small'  slot="icon"> 
       <i class="icon iconfontbtn  icon-dongtai" ></i> 
       发布</mt-button>
    <!-- <span class="send"><input type="checkbox" name="top" id="top" value="top">本条置顶</span> -->
    <div class="clear"></div>
    <!-- 表情容器 ，包裹生成的表情，绑定点击表情事件-->
    <div id="face" @click=choice_face($event) v-show="divfaceisShow">
        <img  v-for="(item,index,key) in items" v-bind:key="key" style="display:inline-block;vertical-align:bottom;" :src="item.iocsrc"> 
    </div>
  </div>
 </div>

</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      imageupShow: false,
      divfaceisShow: false,
      imageupItems: [],
      items: [],
      content:[]
    };
  },
  created() {
      for(var i=0;i<=61;i++)
      {
          this.items.push({ iocsrc: require('../../../assets/easyEditor_files/'+i+'.gif')})
      }
  },
  watch: {
    imageupItems() {
      if (this.imageupItems.length > 0) this.imageupShow = true;
      else this.imageupShow = false;
      this.$nextTick(() => {
        $(".image-up-div").scrollLeft(10000000);
      });
    }
  },
  methods: {
    make_face: function() {
      if (this.divfaceisShow) {
        this.divfaceisShow = false;
      } else {
        this.divfaceisShow = true; //显示表情容器
        if ($("div#face>img").length == 0) {
          //动态生成表情，如果现在没有表情则生成
          //   for (var i = 1; i <= 75; i++) {
          //     //根据表情文件数量决定循环次数，这里为75个表情
          //     $("div#face").append('<img src="../../../assets/easyEditor_files/' + i + '.gif">'); //为表情容器里添加IMG标签，并赋予src值，路径为表情文件所在路径
          //   }
        }
      }
    }, // 选择表情并插入到输入框
    choice_face: function(e) {
      if (e.target.nodeName == "IMG") {
        var choice = e.target;
        var cEle = choice.cloneNode(true); //深度复制，复制节点下面所有的子节点 ，直接将整个表情的IMG标签复制，并添加到发布框的<p></p>里面
        $("#input_conta").append(cEle);
      }
    },
    // 发送信息给后台
    send: function() {
      // 发送留言
      var text = $("#input_conta").html(); //获得发布框的文本内容，表情会以整个img标签文本显示
      console.log(text);
      this.content.push({contents:text,imgsrc:this.imageupItems});
      console.log(this.content);

      this.$emit('getContent',this.content);

      // $("#addTextForm").ajaxSubmit({
      //   url: url + "/index/text/add",
      //   type: "post",
      //   data: {
      //     i_text: text
      //   },
      //   success: function(data) {
      //     console.info(data);
      //   }
      // });
    },clear(){
        $("#input_conta").html(""); //清除发布框的文本内容
        this.divfaceisShow = false;//隐藏表情选择// 上传图片并发送给后台
        this.content=[];
        this.imageupItems=[];
    },
    add_img() {
      this.imageupItems.push({
        src: require("../../../assets/easyEditor_files/3333.jpg")
      });
    }
  }
};
</script>
<style scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 23px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconfontbtn{
font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.publish {
  margin: 2vw;
}
.publish_container {
 overflow-y: auto;
  border: 1px solid #26a2ff;
  border-radius: 6px;
  max-height: 33vh;
  padding: 6px;
}
.face_container {
    line-height: 33px;
    padding-top: 10px;
}
.send {
    margin-bottom: 0px;
    float: right;
    vertical-align:middle
}
.image-up-div {
  margin-top: 10px;
  width: 96vw;
  height: 25vw;
  overflow-x: auto;
  white-space: nowrap;
}
.image-up {
  width: 25vw;
  height: 23vw;
  margin-right: 3px;
}
</style>
