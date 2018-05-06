<template>
  <div id="container" class="panoramaContent">

  </div>
</template>

<script>
  let scene = '';
  let camera = '';
  let renderer = '';
  let isUserInteracting = false;
  let lon = 0;
  let lat = 0;
  let onPointerDownPointerX = '';
  let onPointerDownLon = '';
  let onPointerDownPointerY = '';
  let onPointerDownLat = '';
  let phi = 0;
  let theta = 0;
    export default {
        name: "static-v-r",
      mounted() {
        this.init("static/images/vrfromthree.jpg");
        this.animate();
      },
      methods: {
        init(imgurl) {
          let container = '';
          let mesh = '';
          container = document.getElementById('container');
          scene = new THREE.Scene();
          camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
          camera.target = new THREE.Vector3(0, 0, 0);
          const geometry = new THREE.SphereGeometry(500, 60, 40);
          geometry.scale(-1, 1, 1);
          const material = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(imgurl)
          });
          mesh = new THREE.Mesh(geometry, material);
          scene.add(mesh);

          renderer = new THREE.WebGLRenderer();
          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.setSize(window.innerWidth/1.25, window.innerHeight/1.25);
          container.appendChild(renderer.domElement);
          document.addEventListener('mousedown', this.onDocumentMouseDown, false);
          document.addEventListener('mousemove', this.onDocumentMouseMove, false);
          document.addEventListener('mouseup', this.onDocumentMouseUp, false);
          document.addEventListener('wheel', this.onDocumentMouseWheel, false);

          document.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';

          }, false);
          document.addEventListener('dragenter', () => {
            document.body.style.opacity = 0.5;
          }, false);
          document.addEventListener('dragleave', () => {
            document.body.style.opacity = 1;
          }, false);
          //通过拖放文件实现改变场景
          document.addEventListener('drop', (event) => {
            event.preventDefault();
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
              material.map.image.src = event.target.result;
              material.map.needsUpdate = true;
            }, false);
            reader.readAsDataURL(event.dataTransfer.files[ 0 ]);
            document.body.style.opacity = 1;
          }, false);
          window.addEventListener('resize', this.onWindowResize, false);
        },
        onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        },
        onDocumentMouseDown(event) {
          event.preventDefault();
          isUserInteracting = true;
          onPointerDownPointerX = event.clientX;
          onPointerDownPointerY = event.clientY;
          onPointerDownLon = lon;
          onPointerDownLat = lat;
        },
        onDocumentMouseMove(event) {
          if (isUserInteracting === true) {
            lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
            lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
          }
        },
        onDocumentMouseUp() {
          isUserInteracting = false;
          // camera.fov += event.deltaY * 0.05;
        },
        onDocumentMouseWheel(event) {
          camera.fov += event.deltaY * 0.05;
          camera.updateProjectionMatrix();
        },
        animate() {
          this.update();
          requestAnimationFrame(this.animate);

        },
        update() {
          //控制自动旋转速度
          if (isUserInteracting === false) {
            lon += 0;
          }
          lat = Math.max(-85, Math.min(85, lat));
          phi = THREE.Math.degToRad(90 - lat);
          theta = THREE.Math.degToRad(lon);
          camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
          camera.target.y = 500 * Math.cos(phi);
          camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);
          camera.lookAt(camera.target);
          renderer.render(scene, camera);

        }
      }
    }
</script>

<style scoped>

</style>
