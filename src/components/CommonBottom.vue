<template>
  <div class="commonBottom">
    <div style="width: 100%; height: 90%"></div>
    <p>this is a blog bottom</p>
  </div>
</template>

<script>
export default {
  name: "CommonBottom"
}
</script>

<style scoped>
.commonBottom {
  background-color: black;
  /*在窗口的底部固定 不跟随滑动*/
  /*position: fixed;*/
  /*bottom: 0;*/
  bottom: 0;
  left: 0;
  right: 0;
  height: 5%;
}
</style>
