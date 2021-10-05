<template>
  <div>
    <router-view/>
  </div>
</template>

<!--<script lang="js">-->
<!--  import store from '@/store/index2';-->
<!--  // 令我的store被全局监听-->
<!--  export default {-->
<!--    data(){-->
<!--      return {-->
<!--        store: store-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body{
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font-hei;
  font-size: 16px;
  color: #333;
  background: #f5f5f5;
}
</style>
