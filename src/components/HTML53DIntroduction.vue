<template>
    <div>
      <div>webGL,是HTML5规范中提供的3D绘图规范,它允许将Javascript和openGL ES2．0结合,webGL可以为HTML5 Canvas提供硬件3D渲染，这样Web开发人员就可以借助系统显卡在浏览器中更加流
      畅的展示3D场景和模型。webGL技术标准免去了开发网页专用渲染插件的麻烦。直接基于webGL绘制3D图形,
      并且制作3D动画非常复杂。现在有很多科研机构和企业
      在webGL基础上建立了"Javascdpt3D库，其中,“three．js”是
      一个开源免费的Javascript 3D库,通过场景、形状、渲染、
      材质和摄像机等要素建立3D图形和动画。
      </div>
      <div>
        在Three.js中，要渲染物体到网页中，我们需要3个组件：场景（scene）、相机（camera）和渲染器（renderer）。
        有了这三样东西，才能将物体渲染到网页中去。
      </div>
      <div>
        1.场景：所有物体的容器;新建容器：var scene = new THREE.Scene();
      </div>
      <div>
        2.相机：相机决定了场景中那个角度的景色会显示出来。有两种相机，
        分别是正投影相机THREE.OrthographicCamera和透视投影相机THREE.PerspectiveCamera
      </div>
      <div>
        <img src="../assets/正投影.png"/>
        <img src="../assets/透视投影.png"/>
      </div>
      <div>
        3.渲染器：渲染器对象负责计算指定相机角度下，浏览器中scene的样子，一般都采用基于WebGL的渲染器。
      </div>
      <div>
        4.添加物体到场景中：物体可以在场景中绘制，也可以通过外部导入。支持的文件格式如下：
      </div>
      <div>
        <img src="../assets/支持导入文件格式.png"/>
      </div>
      <div>
        5.渲染：调用渲染器的渲染函数即可，分为离线渲染和实时渲染。
      </div>
      <div>
        6.动画：(1)改变物体对象：使用渲染循环函数，通过改变对象的旋转、缩放、位置、材质、顶点、面等，可以较容易地制造出动画。
        (2)使用Tween.js：Tween.js是一个JS库，可以用来定义某个属性在两个值之间的过渡，自动计算出起始值和结束值之间的所有中间值。
        (3)使用相机：可以使用相机控件来控制场景中的相机，最常用的控件是TrackballControls,可以实现用鼠标来轻松移动、平移和缩放场景。
        除了使用相机控件，还可以通过设置相机的position属性，调用lookAt()函数改变相机指向的位置来移动相机。
      </div>
    </div>
</template>

<script>
    export default {
        name: "h-t-m-l53-d-introduction"
    }
</script>

<style scoped>

</style>
