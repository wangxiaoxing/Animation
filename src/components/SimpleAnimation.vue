<template>
  <div id="container">
   <div>
     <span>立方体边长：4；球的半径：4</span>
    <el-button type="primary" @click.native="changeShowDetails">显示实时参数</el-button>
   </div>
    <div v-if="showDetails">
      <div><span>立方体位置：{{cubePosition}};球的位置：{{spherePosition}}</span></div>
      <div><span>立方体姿态：{{cubeRotation}};球的姿态：{{sphereRotation}}</span></div>
    </div>
  </div>
</template>

<script>
  let scene = '';
  let camera = '';
  let renderer = '';
  let container= '';
  let step = 0;
  let sphere;
  let cube;
    export default {
        name: "simple-animation",
        mounted(){
        this.init();
        this.animate();
        },
        data(){
          return{cubePosition:'',spherePosition:'',cubeRotation:'',sphereRotation:'',showDetails:false}
        },
        methods:{
          init(){
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer();
            // renderer.setClearColor(0xFFFFFF, 1.0);
            renderer.setSize(window.innerWidth/1.25, window.innerHeight/1.25);
            renderer.shadowMapEnabled = true;

            let planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
            let planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
            let plane = new THREE.Mesh(planeGeometry, planeMaterial);
            plane.receiveShadow = true;
            plane.rotation.x = -0.5 * Math.PI;
            plane.position.x = 15;
            plane.position.y = 0;
            plane.position.z = 0;
            scene.add(plane);

            var axisHelper = new THREE.AxisHelper( 50 );
            scene.add( axisHelper );

            let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
            let cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
            cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.castShadow = true;
            cube.position.x = -4;
            cube.position.y = 3;
            cube.position.z = 0;
            scene.add(cube);

            let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
            let sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
            sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.x = 20;
            sphere.position.y = 0;
            sphere.position.z = 2;
            sphere.castShadow = true;
            scene.add(sphere);

            camera.position.x = -30;
            camera.position.y = 40;
            camera.position.z = 30;
            camera.lookAt(scene.position);



            let ambientLight = new THREE.AmbientLight(0x0c0c0c);
            scene.add(ambientLight);
            let spotLight = new THREE.SpotLight(0xffffff);
            spotLight.position.set(-40, 60, -10);
            spotLight.castShadow = true;
            scene.add(spotLight);

            container = document.getElementById('container');
            container.appendChild(renderer.domElement);

          },
          animate() {

            cube.rotation.x += 0.05;
            cube.rotation.y += 0.05;
            cube.rotation.z += 0.05;
            this.cubePosition=cube.position;
            this.cubeRotation=cube.rotation;
            step+=0.1;
            sphere.position.x = 20+( 10 * (Math.cos(step)));
            sphere.position.y = 2+( 10 * Math.abs(Math.sin(step)));
            this.spherePosition=sphere.position;
            this.sphereRotation=sphere.rotation;
            requestAnimationFrame(this.animate);
            renderer.render(scene, camera);
          },
          changeShowDetails(){
            this.showDetails=!this.showDetails;
          }

        }
    }
</script>

<style scoped>
#container{
  background-color: white;
}
</style>
