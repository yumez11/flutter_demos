<template>
  <div class="flutter">
    <a :href=flutterURL target='_blank' class='demo-name' title='效果预览'> go flutter </a>
<!--    <iframe src="./flutterHTML/index.html"></iframe>-->
  </div>
</template>

<script>
import Navi from "@/components/Navi";

export default {
  name: "Flutter",
  components: {
    Navi,
  },
  data(){
    return {
      flutterURL: './flutterHTML/index.html'
    }
  }
}
</script>

<style scoped>

</style>
