<template>
  <div class="hightLight" v-if="name!=null">
    <h4> {{ name + '源码' }} </h4>
    <pre v-highlight >
          <code :class="language" spellcheck="false">{{ htmlData }}</code>
    </pre>
  </div>
</template>

<script>


export default {
  name: "HighLightPage",
  props: {
    name: {
      default: null,
      type: String
    },
    url: {
      default: null,
      type: String
    }
  },
  data() {
    return {
      language: 'javascript',
    }
  },
  computed: {
    htmlData() {
      if (this.url == null) {
        return ''
      }
      let xhr = new XMLHttpRequest()
      xhr.open('GET', this.url, false)
      xhr.send()
      if (xhr.responseText) {
        return xhr.responseText
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.hightLight {
  text-align: left;
  margin: 0px 5px 0px 5px;
}

h4 {
  padding: 0;
  margin: 0;
}

.hightLight pre {
  padding: 0;
  margin: 0;
}

.hightLight code {
  border-radius: 10px;
}

</style>
