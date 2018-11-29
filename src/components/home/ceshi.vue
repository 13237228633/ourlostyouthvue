<template>
  <div  class="children">
           <mt-header :title="$route.name">
        <router-link to="" @click.native="$router.go(-1)"  slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      测试
       <input type="button" value="ajax情求测试跨域" @click="ajax"/>
  </div>
</template>

<style>

</style>

<script type="text/babel">
import { getCeShiJson } from "api/index";
import originAXIOS from 'axios'
export default {
  name: "home",
  data() {
    return {
      list: [],
      title: "我的"
    };
  },
created(){

},
  methods: {
    ajax() {
        alert(1)
        // getCeShiJson().then(res => {
        //     console.log(res.data)
        // });
         //originAXIOS.get('http://116.196.118.203:8081/UserDynamic/GetUserDynamicList?userid=1&CurrentIndex=1&PageSize=30')
        originAXIOS.get('http://localhost:56572/api/UserDynamic/Upload?id=3')
            .then(function (response) {
              console.log(Promise.reject(response))
            })
            .catch(function (error) {
            return Promise.reject(error);
            });  
    },
    func(routername) {
      console.log(routername);
      this.$router.push({ name: routername });
    }
  }
};
</script>

