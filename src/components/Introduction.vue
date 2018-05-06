<template>
<div>
    <div class="content" v-if="isGif">
      <div id="gifIntroduction">{{gifIntroduction}}</div>
      <div class="animataion">
        <div><img src='../../static/images/四连杆.gif'></div>
      </div>
    </div>
  <div class="content" v-if="isFlash">
    <div id="flashIntroduction">{{flashIntroduction}}</div>
    <div class="animataion">
      <div><embed src='../../static/images/发电机原理图1.swf'/></div>
    </div>
  </div>
  <div class="content" v-if="isCSS3">
    <div id="CSS3Introduction">{{CSS3Introduction}}</div>
    <div class="animataion">
      <c-s-s3-animation></c-s-s3-animation>
    </div>
  </div>
  <div class="content" v-if="isHTML52D">
    <div id="HTML52DIntroduction">{{HTML52DIntroduction}}</div>
    <div class="animataion">
      <canvas-animation></canvas-animation>
    </div>
  </div>
  <div class="content" v-if="isHTML53D">
    <div id="HTML53DIntroduction"><h-t-m-l53-d-introduction></h-t-m-l53-d-introduction></div>
  </div>
  <div class="content" v-if="isStatic3D">
    <div id="static3DIntroduction">{{static3DIntroduction}}</div>
    <static3-d></static3-d>
  </div>
  <div class="content" v-if="isStaticVR">
    <div id="staticVRIntroduction">{{staticVRIntroduction}}</div>
    <static-v-r></static-v-r>
  </div>
  <div class="content" v-if="isSimpleAnimation">
    <simple-animation></simple-animation>
    <!--<div id="simpleAnimation">{{simpleAnimationIntroduction}}</div>-->
  </div>
  <div class="content" v-if="isComplexAnimation">
    <complex-animation></complex-animation>
    <div id="complexAnimationIntroduction"><complex-animation-introduction></complex-animation-introduction></div>
  </div>
</div>

</template>

<script>
    import CanvasAnimation from "./CanvasAnimation";
    import CSS3Animation from "./CSS3Animation";
    import HTML53DIntroduction from "./HTML53DIntroduction";
    import Static3D from "./Static3D";
    import StaticVR from "./StaticVR";
    import SimpleAnimation from "./SimpleAnimation";
    import ComplexAnimation from "./ComplexAnimation";
    import ComplexAnimationIntroduction from "./ComplexAnimationIntroduction";
    export default {
      components: {
        ComplexAnimationIntroduction,
        ComplexAnimation,
        SimpleAnimation,
        StaticVR,
        Static3D,
        HTML53DIntroduction,
        CSS3Animation,
        CanvasAnimation},
      name: "introduction",
        computed:{
          isGif(){
              return this.$store.state.isGif;
          },
          isFlash(){
            return this.$store.state.isFlash;
          },
          isHTML52D(){
            return this.$store.state.isHTML52D;
          },
          isCSS3(){
            return this.$store.state.isCSS3;
          },
          isHTML53D(){
            return this.$store.state.isHTML53D;
          },
          isStatic3D(){
            return this.$store.state.isStatic3D;
          },
          isStaticVR(){
            return this.$store.state.isStaticVR;
          },
          isSimpleAnimation(){
            return this.$store.state.isSimpleAnimation;
          },
          isComplexAnimation(){
            return this.$store.state.isComplexAnimation;
          },

          gifIntroduction(){
            return 'GIF动画即"图形交换格式"，它以图片的方式被\n' +
              '网页使用，浏览器无需安装专门的插件，所以GIF动画的\n' +
              '浏览器兼容性非常好，但是它所支持的颜色数量不超过\n' +
              '256种，表现力极差，不支持交互性媒体开发，这给GIF动\n' +
              '画的使用带来很大的局限性。'
          },
          flashIntroduction(){
            return 'Flash动画可以直接嵌入到网页中播放，因其传输速率高、占存储空间小，受到网站开发人员的喜\n' +
              '爱，在网站片头、网页广告等方面应用广泛，也有一些开发人员直接使用Flash开发设计网页．但其缺点是\n' +
              '需要在浏览器端安装Flash Player插件，插件的使用会降低动画的稳定性和跨平台性，并且增加用户访问网站的流量，不适合在移动终端中使用。'
          },
          CSS3Introduction(){
            return 'CSS3规范无需编程即可实现动画，它主要通过' +
              '@keyframes规则和animation属性实现。@keyframes用于创建动画规则，animation用于动画播放控制。' +
              '如:animation:myfirst 5s linear 2s infinite alternate'
          },
          HTML52DIntroduction(){
            return 'HTML5对于图形绘制进行了明确的规范，它提供了canvas标签，canvas标签允许用户通过编程的方式进行图形绘制.'+
              '通过Javascript语言的"getElementById()"函数获得画'+
              '布对象,然后，调用"getContext()"函数获得绘图上下文，获得绘图上下文后就可以调用API来绘制图形'+
              '绘制图形后通过定时函数实现动画效果'
          },
          static3DIntroduction(){
            return '通过导入JSON外部文件实现三维产品的展示，具有较好的保真效果'
          },
          staticVRIntroduction(){
            return '将一张全景图片贴在一个球体表面，实现全景展示的效果'
          }
        }
    }
</script>

<style scoped>
.content{
  margin-top: 10px;
  float:right;
  height: 680px;
  width:1100px;
  font-family: SumSun;
  font-size:18px;
}
  #gifIntroduction{
     width:660px;
     height:100px;
     margin: 50px auto;
     font-family: SumSun;
     font-size:18px;
     line-height: 40px;
     text-align:justify;
  }
#flashIntroduction{
  width:660px;
  height:150px;
  margin: 50px auto;
  font-family: SumSun;
  font-size:18px;
  line-height: 40px;
  text-align:justify;
}
#HTML52DIntroduction{
  width:660px;
  height:150px;
  margin: 50px auto;
  font-family: SumSun;
  font-size:18px;
  line-height: 40px;
  text-align:justify;
}
#HTML53DIntroduction{
  width:700px;
  height:300px;
  margin: 50px auto;
  font-family: SumSun;
  font-size:18px;
  line-height: 40px;
  text-align:justify;
}
#complexAnimationIntroduction{
  width:700px;
  height:300px;
  margin: 50px auto;
  font-family: SumSun;
  font-size:18px;
  line-height: 40px;
  text-align:justify;
}
#CSS3Introduction{
  width:660px;
  height:100px;
  margin: 20px auto;
  font-family: SumSun;
  font-size:18px;
  line-height: 40px;
  text-align:justify;
}
  img{
    width:550px;
  }
  embed{
    width:600px;
    height: 400px;
  }


</style>
