<template>
  <div class="page-infinite">
    <router-link class="router-link" to="/home/User"> 
     <mt-header fixed :title=title ></mt-header>
    </router-link>
    <transition name="slide">
    <router-view></router-view>
    </transition>
    <!-- 测试跨域 -->
   <div>
      <input type="button" value="测试"  @click="func('ceshi')"/>
     </div>
   <!-- 测试跨域 -->
    <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }" style="overflow:scroll;">
      <ul  v-infinite-scroll="loadMore"
         infinite-scroll-disabled=allLoaded
        infinite-scroll-distance="10">

         <li  v-for="(item,index) in list">
            <img v-lazy="item" v-gallery:index :src="item" />
            <p v-show="!((index+1)==list.length)" style="background-color:#ececec;height:2vw;width:100vw;"></p>
        </li>
      </ul>
      <span v-show="loading" style="color:#727c8f"><p class="page-infinite-loading" ><mt-spinner :type="3" :size="22"></mt-spinner>正在加载...</p></span>
      <span v-show="allLoadedSpan" style="color:#727c8f"><p class="page-infinite-loading" >人家也是有底线的哦</p></span>
    </div>
  </div>
</template>


<style scoped>  
    @import  '../../assets/css/home.css';    
</style> 

<script type="text/babel">
import { getAlbumListJson } from "api/index";
export default {
  name: "home",
  data() {
    return {
      list: [],
      loading: false,
      allLoaded: false,
      allLoadedSpan:false,
      wrapperHeight: 0,
      title: "我的"
    };
  },
created(){
      this.allLoaded = true;
               getAlbumListJson(1).then(res => {
                      console.log(res.data.data.length)
                      var count=this.list.length;
                      var length=res.data.data.length -  this.list.length;
                        console.log(length)
                        if(res.data.data.length -  this.list.length > 3 )
                        {
                          for (let i =0; i < 3; i++) {
                              console.log(count+i+" ："+res.data.data[count+i].AlnumUrl);
                              this.list.push(res.data.data[count+i].AlnumUrl);
                            }
                            this.allLoaded=false;
                        }
                        else
                        {
                            for (let i =0; i < length; i++) {
                              console.log(count+i+" ："+res.data.data[count+i].AlnumUrl);
                              this.list.push(res.data.data[count+i].AlnumUrl);
                            }
                            this.allLoaded=true;
                            this.allLoadedSpan=true;
                        }
               });
},
  methods: {
    loadMore() {
      this.loading = true;
      this.allLoaded = true;
            setTimeout(() => {
                    getAlbumListJson(1).then(res => {
                      console.log(res.data.data.length)
                      var count=this.list.length;
                      var length=res.data.data.length -  this.list.length;
                        console.log(length)
                        if(res.data.data.length -  this.list.length > 3 )
                        {
                          for (let i =0; i < 3; i++) {
                              console.log(count+i+" ："+res.data.data[count+i].AlnumUrl);
                              this.list.push(res.data.data[count+i].AlnumUrl);
                            }
                            this.allLoaded=false;
                        }
                        else
                        {
                            for (let i =0; i < length; i++) {
                              console.log(count+i+" ："+res.data.data[count+i].AlnumUrl);
                              this.list.push(res.data.data[count+i].AlnumUrl);
                            }
                            this.allLoaded=true;
                            this.allLoadedSpan=true;
                        }
                        console.log(this.allLoaded)
                      this.loading=false;
                    });
            }, 1500);
    },
    func(routername) {
      console.log(routername);
      this.$router.push({ name: routername });
    }
  },
  mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 55;
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      $("#wrapper").scrollTop(to.meta.scrollTop);
    });
  },
  beforeRouteLeave(to, from, next) {
    from.meta.scrollTop =  $("#wrapper").scrollTop();
    next();
  }
};
</script>
