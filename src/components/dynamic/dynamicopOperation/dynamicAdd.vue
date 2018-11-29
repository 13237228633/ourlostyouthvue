<template>
  <div class="children">
    <mt-header :title="title">
        <router-link to="" @click.native="$router.go(-1)"  slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
     <Expression-Editor ref="Expression" @getContent="getContents"></Expression-Editor>
  </div>
</template>

<script>
import ExpressionEditor from "../../../components/template/ExpressionEditor/ExpressionEditor.vue";
import { ExecUserDynamicAdd } from "api/index";
export default {
  name: "dynamicAdd",
  components: {
    ExpressionEditor
  },
  data() {
    return {title: "发布动态"} ;
  },
  created() {},
  watch: {},
  methods: {
    getContents(Content) {
      console.log("回到内容："+Content[0].contents)
      console.log("回到内容："+Content[0].imgsrc[0])
      var imgsrc="";
      console.log("length"+Content[0].imgsrc.length)
      for(var i=0;i<Content[0].imgsrc.length;i++)
      {
         imgsrc+=Content[0].imgsrc[i].src+",";
      }
      console.log(imgsrc)
      // this.$router.push({name: 'dynamic', params: {istrue: true}});
      // this.$refs.Expression.clear();
      //  ExecUserDynamicAdd(1,Content[0].contents,imgsrc)
      //   .then(res => {
      //     if(res.data.Code==100){
      //        this.$router.push({name: 'dynamic', params: {istrue: true}});
      //        this.$refs.Expression.clear();
      //     }
      //   })
      //   .catch(eer => {
      //     console.log(eer);
      //   });
    }
  }
};
</script>

<style scoped>
</style>
