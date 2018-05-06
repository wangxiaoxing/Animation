<template>
  <div>
    <div>
      已知参数：六轴机器手的每根轴的位置坐标和绕自身坐标轴的旋转角度。
    </div>
  <div>
    实现过程：
    <div>1.利用SolidWorks将模型导出成obj格式文件</div>
    <div>2.将文件导入到场景中</div>
    <div>3.在渲染循环中改变每根轴的位置和姿态(OpenGL转换矩阵)</div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "complex-animation-intoduction"
    }
</script>

<style scoped>

</style>
