<template>
  <div class="home">
    <header class="header">
      <h1 class="header__title" style="margin: 0"><a href="/">yumez</a></h1>
      <h2 class="header__subtitle">我们的征途是星辰大海</h2>
    </header>
    <home-list></home-list>
  </div>
</template>

<script>

import HomeList from "@/views/home/HomeList";
import Navi from "@/components/Navi";

export default {
  name: 'Home',
  components: {Navi, HomeList}
}
</script>

<style scoped lang="scss">
.home{
}

</style>
