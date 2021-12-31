<template>
  <div id="nav">
    <router-link class="header__link" to="/">Home</router-link>
    |
    <router-link class="header__link" to="/canvas">Canvas</router-link>
    |
    <router-link class="header__link" to="/flutter">Flutter</router-link>
    |
    <router-link class="header__link" to="/about">About</router-link>
  </div>
  <router-view class="content"></router-view>
  <!--  <CommonBottom></CommonBottom>-->
</template>


<script>
import CommonBottom from "@/components/CommonBottom";
import "assets/css/style.css"

export default {
  components: {CommonBottom}
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

#nav {
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 1000;

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
}

.content {
 //padding-top: 100px;
}


</style>
