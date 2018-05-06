<template>
    <div></div>
</template>

<script>
    export default {
        name: "c-s-s3-animation"
    }
</script>

<style scoped>
div{
  width: 200px;
  height: 200px;
  background-color: red;
  position: relative;
  /*规定动画完成时间为5秒，动画的速度曲线是liner,动画从2s时开始，动画播放的次数：永久循环，动画在下一周期是否逆向播放：
  alternate表示奇数次正常播放，偶数次反方向播放*/
  -webkit-animation:myfirst 5s linear 2s infinite alternate;
}
  @-webkit-keyframes myfirst {
    0% {background: red;left: 0px;top:0px;}
    25% {background: yellow;left: 400px;top:0px;}
    50% {background: blue;left: 400px;top:300px;}
    75% {background: green;left: 0px;top:300px;}
    100% {background: red;left: 0px;top:0px;}
  }
</style>
