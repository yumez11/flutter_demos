<template>
  <div class="canvas">
    <div v-for="item in datas">
      <p>{{ item.name }}</p>
      <ul class="main">
        <li v-for="itemData in item.data">
          <a :href=itemData.url target='_blank' class='demo-name' title='效果预览'>{{ itemData.name }}</a>
          <a @click="tap(itemData)" class='demo-source' target='_blank' title='点击查看源码'>源码</a>
        </li>
      </ul>
    </div>
    <!--    <router-view></router-view>-->
    <high-light-page :name="itmName" :url="itmUrl"></high-light-page>
  </div>
</template>

<script>
import HighLightPage from "@/components/HighLightPage";

export default {
  name: "Canvas",
  components: {
    HighLightPage
    // codemirror,
  },
  data() {
    return {
      itmName: null,
      itmUrl: null,
      datas: [
        {
          name: 'canvas',
          data: [
            {
              name: '橡皮擦效果',
              url: './canvasHtml/demo/clip/clip.html',
            }, {
              name: '粒子时钟',
              url: './canvasHtml/demo/coolClock/index.html',
            }, {
              name: '线条时钟',
              url: './canvasHtml/demo/coolClock/index2.html',
            }, {
              name: '线条时钟',
              url: './canvasHtml/demo/coolClock/index2.html',
            }, {
              name: 'LOW POLY（图片三角化）',
              url: './canvasHtml/demo/lowpoly/index.html',
            }, {
              name: '可视化音乐播放器',
              url: './canvasHtml/demo/musicPlayer/index.html',
            }, {
              name: '网状粒子效果1',
              url: './canvasHtml/demo/netparticle/net_1.html',
            }, {
              name: '网状粒子效果2',
              url: './canvasHtml/demo/netparticle/net_2.html',
            }, {
              name: '放烟花模拟',
              url: './canvasHtml/demo/shotFire/shotFire.html',
            }, {
              name: '图像拉扯变形',
              url: './canvasHtml/demo/transform/demo1.html',
            }, {
              name: '图像3d变形',
              url: './canvasHtml/demo/transform/demo2.html',
            }
          ],
        }, {
          name: '颗粒动画',
          data: [
            {
              name: '粒子动画',
              url: './canvasHtml/Particle-demo/animateStep/index.html',
            }, {
              name: '黑洞吸引',
              url: './canvasHtml/Particle-demo/blackhole/blackhole.html',
            }, {
              name: '操控文字图片的数据',
              url: './Particle-demo/imgdata/controlImgData.html',
            }, {
              name: '操控字体的数据',
              url: './canvasHtml/Particle-demo/imgdata/controlImgData2.html',
            }, {
              name: '粒子成像demo',
              url: './canvasHtml/Particle-demo/orangutan/index.html',
            }, {
              name: '粒子动画',
              url: './canvasHtml/Particle-demo/animateStep/index.html',
            },
          ],
        }, {
          name: '游戏',
          data: [
            {
              name: 'FlyppyPeople',
              url: './canvasHtml/Game-demo/FlppyPeople/index.html',
            }, {
              name: '接水管游戏',
              url: './canvasHtml/Game-demo/connectPipe/easyPipes.html',
            }, {
              name: '飞机游戏',
              url: './Particle-demo/Game-demo/planGame/index.html',
            }, {
              name: '简单跑酷游戏',
              url: './canvasHtml/Game-demo/runningMan/index.html',
            }, {
              name: '简易桌球游戏',
              url: './canvasHtml/Game-demo/snooker/snooker.html',
            }, {
              name: '视频拼图',
              url: './canvasHtml/Game-demo/vedioPintu.html',
            },
          ],
        }, {
          name: '3D',
          data: [
            {
              name: '3D旋转球',
              url: './canvasHtml/3D-demo/3Dball.html',
            }, {
              name: '3d立方体',
              url: './canvasHtml/3D-demo/3Dcube.html',
            }, {
              name: '3d多立方体',
              url: './Particle-demo/3D-demo/3Dcubes.html',
            }, {
              name: '3D标签云',
              url: './canvasHtml/3D-demo/3Dtag.html',
            }
          ],
        }, {
          name: '其他',
          data: [
            {
              name: '缓存测试(有缓存)',
              url: './canvasHtml/Other-demo/cache/test.html',
            }, {
              name: '缓存测试(无缓存)',
              url: './canvasHtml/Other-demo/cache/test2.html',
            }, {
              name: 'Canvas时钟',
              url: './canvasHtml/Other-demo/clock.html',
            }, {
              name: '绘制多边形',
              url: './canvasHtml/Other-demo/duobianxing.html',
            }, {
              name: '仿重力小球',
              url: './canvasHtml/Other-demo/shotBall.html',
            }, {
              name: '秒表',
              url: './canvasHtml/Other-demo/stopWatch.html',
            },
          ]
        }
      ]
    }
  },
  methods: {
    tap(data) {
      console.log(data);
      this.itmName = data.name
      this.itmUrl = data.url

      // 推出新页面
      // this.$router.replace({name: 'HighLight', params: {dataUrl: data.url, name: data.name}})
      // 推出
      // const newPage = this.$router.resolve({name: 'HighLight', params: {dataUrl: '222222'}})
      // window.open(newPage.href, '_blank')
    },
  }
}
</script>

<style scoped lang="scss">
[v-cloak] {
  display: none
}


.main {
  list-style: none;
  text-align: left;

  @media screen and (max-width: 600px) {
    //display: flex;
    //flex-direction: row;
    //align-items: stretch;
    //text-align: justify;
    text-align: left;
  }
}

.main:after {
  clear: both;
  display: block;
  visibility: hidden;
  height: 0;
  content: "";
}

p {
  margin: 5px 0;
  font-size: 20px;
}

.main li {
  display: inline-block;
  text-align: center;
  margin: 8px;
}

.main a {
  display: inline-block;
  font-size: 15px;
  line-height: 36px;
  color: #333;
  text-decoration: none;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 2px;
  @media screen and (max-width: 600px) {
    padding: 5px;
    border-radius: 2px;
  }
}

.main a:hover {
  color: #47A0DC;
}

.main .demo-source {
  margin-left: -1px;
  background-color: transparent;
}

h3 {
  clear: both;
}
</style>
