<template>
    <div id="container">

    </div>
</template>

<script>
  let scene = '';
  let camera = '';
  let renderer = '';
  let controls = '';
    export default {
        name: "static3-d",
        mounted(){
          this.init();
          this.animate();
        },
        methods:{
          init(){
            let container = document.getElementById('container');
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 10000, 50000 );
            camera.position.z = 25000;
            controls = new THREE.TrackballControls( camera );
            let ambient=new THREE.AmbientLight(0x101030);
            scene.add(ambient);
            let directionalLight1 = new THREE.DirectionalLight(0xffffff,1);
            directionalLight1.position.set(1,1,1);
            scene.add(directionalLight1);
            let directionalLight2 = new THREE.DirectionalLight(0xffffff,1);
            directionalLight2.position.set(-1,-1,-1);
            scene.add(directionalLight2);
            var objectLoader = new THREE.ObjectLoader();
            objectLoader.load('static/images/data.json', function ( obj ) {
              obj.position.set(0,0,0);
              scene.add( obj );
            } );
            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio( window.devicePixelRatio ); //设置设备像素比
            renderer.setSize( window.innerWidth/1.25, window.innerHeight/1.25 );
            renderer.setClearColor(0xFFFFFF, 1.0);
            container.appendChild( renderer.domElement ); //将一个用来绘制输出的Canvas对象添加到container
            window.addEventListener( 'resize', this.resize, false ); //添加一个尺寸改变的监听
          },
          resize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();       //更新相机投影矩阵
            renderer.setSize( window.innerWidth, window.innerHeight );
          },
          animate() {
            controls.update();
            requestAnimationFrame( this.animate );
            renderer.render( scene, camera );
          }
        }

    }
</script>

<style scoped>

</style>
