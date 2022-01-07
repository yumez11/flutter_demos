<template>
  <div>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in list">
        <div v-if="index%2==0">
          <div style="color: #FFFFFF"> {{ item }}</div>
          <h4>aaaa - 111 {{ index }}</h4>
          <p>声明的等级</p>
        </div>

        <div v-else>
          <div style="color: #FFFFFF"> {{ item }}</div>
          <ul class="list2">
            <li class="list-item2" v-for="(item, index) in list">
              <div>
                <div> {{ item }}</div>
                <h4>aaa - 2222 {{ index }}</h4>
                <p>声明的等级</p>
                <p>声明的等级</p>
                <p>声明的等级</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li :style="{display: loading ? 'initial' : 'none', color: 'red'}">Loading......</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeList",
  data() {
    return {
      list: [],
      loading: true,    // 数据加载中
      allLoaded: false  // 数据已经全部加载
    }
  },
  methods: {
    getData() {
      this.loading = true; // 显示加载中的标识
      this.fetch22(this.list.length + 1).then(res => {
        this.list.splice(this.list.length, 0, ...res.data); // 将新获取到的数据连接到 this.list (vue 能检测到 splice() 函数
        this.loading = false; // 加载结束 取消加载中显示
        if (this.list.length === res.total) {
          this.allLoaded = true;
        }
      })
    },
    onScroll(e) {
      if (this.loading || this.allLoaded) return;
      let top = document.documentElement.scrollTop || document.body.scrollTop; // 滚动条在Y轴上的滚动距离
      let vh = document.compatMode == 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight; // 浏览器视口的高度
      let height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); // 文档的总高度
      if (top + vh >= height) { // 滚动到底部
        this.getData(); // 如果已经滚到底了 获取数据
      }
    },

    fetch22(from, size = 20) { // 模拟后台获取数据
      console.log('获取数据 传入: ', {from, size});
      let data = [];
      let total = 198;
      size = Math.min(size, total - from + 1);
      for (let i = 0; i < size; i++) {
        data.push(`列表:${from + i}`);
      }
      let ret = {data, total};
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          console.log('获取数据 返回: ', ret);
          resolve(ret);
        }, 500);
      })
    }
  },
  created() {
    this.getData();
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
</script>

<style scoped lang="scss">
.list {
  margin: 0;
  padding: 0.5rem;
  list-style: none;
}

.list-item {
  background-color: #33333333;
  border-radius: 15px;
  padding: 10px 10px 2px 10px;
  margin: 0.5rem;
}

.list2 {
  padding: 0;
  margin: 0;
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;
  width: auto;
}

.list-item2 {
  display: inline-block;
  background-color: #33333333;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem 0.5rem 0 0;
  //color: #0A3136;
}

ul::-webkit-scrollbar {
  width: 2px;
  height: 5px;
}

ul::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

ul::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 5px;
}

ul::-webkit-scrollbar-thumb:hover {
  background: #333;
}

ul::-webkit-scrollbar-corner {
  background: #179a16;
}


</style>
