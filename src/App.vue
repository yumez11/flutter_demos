<template>
  <Navi></Navi>
  <router-view class="content"></router-view>
</template>


<script>
import CommonBottom from "@/components/CommonBottom";
import "assets/css/style.css"
import Navi from "@/components/Navi";

export default {
  components: {Navi, CommonBottom}
}
</script>


<style scoped lang="scss">
html, body, #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.content {
  //padding-top: 100px;
}


</style>
