<template>
  <div  class="children">
           <mt-header :title="$route.name">
        <router-link to="" @click.native="$router.go(-1)"  slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      我的
  </div>
</template>

<style>

</style>
  
<script type="text/babel">
</script>
