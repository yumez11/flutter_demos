<template>
  <nav class="header__nav" id="nav">
    <router-link class="header__link" to="/">Home</router-link>
    |
    <router-link class="header__link" to="/canvas">Canvas</router-link>
    |
    <router-link class="header__link" to="/flutter">Flutter</router-link>
    |
    <router-link class="header__link" to="/about">About</router-link>
  </nav>
</template>

<script>
import "assets/css/style.css"


export default {
  name: "Navi"
}
</script>

<style scoped lang="scss">
#nav {
  height: 50px;
  //z-index: 1000;
  text-align: left;
  line-height: 50px;
  padding: 10px;
  margin: 0;
  a {
    color: #33474d;
  }

  a:link {
    color: #33474d;
    text-decoration: none;
  }

  a:hover {
    color: plum;
    text-decoration: none;
  }
}

</style>
