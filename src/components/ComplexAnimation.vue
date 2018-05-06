<template>
<div id="container">

</div>
</template>

<script>
  var container;
  var camera, scene, controls;
  var model0 = new THREE.Object3D();
  var model1 = new THREE.Object3D();
  var model2 = new THREE.Object3D();
  var model3 = new THREE.Object3D();
  var model4 = new THREE.Object3D();
  var model5 = new THREE.Object3D();
  var model6 = new THREE.Object3D();
  var renderer;
  // var finish = []; //用于检查参数是否都已传入
  // var timeArr = [];
  // var rotationArr = [];
  // var this.positionArr = [];
    export default {
        name: "complex-animation",
        mounted(){
          this.loadTime("robot_time");
          this.loadRotation();
          this.loadPosition();
        },
        computed:{
          judge(){
            var flag = false;
            if (this.finish.length === 25) {
              flag = true;
            }
            return flag;
          }
        },
      data(){

          return {m:0,finish:[],timeArr:[],rotationArr:[],positionArr:[]}
      },
        methods:{
          loadTime(timeName) {
            var that=this;
            $.ajax({url:"static/robot_data/"+timeName+".txt",async:true,success:function (data) {
                that.timeArr=data.split("\n");
                that.finish.push(1);
                if(that.judge){
                  that.init();
                }
              }});

          },
          loadPosition() {
            var positionNameArray = ["mechanics.b1.frame_a.r_0[1]", "mechanics.b1.frame_a.r_0[2]",
              "mechanics.b1.frame_a.r_0[3]", "mechanics.b2.frame_a.r_0[1]", "mechanics.b2.frame_a.r_0[2]",
              "mechanics.b2.frame_a.r_0[3]", "mechanics.b3.frame_a.r_0[1]", "mechanics.b3.frame_a.r_0[2]",
              "mechanics.b3.frame_a.r_0[3]", "mechanics.b4.frame_a.r_0[1]", "mechanics.b4.frame_a.r_0[2]",
              "mechanics.b4.frame_a.r_0[3]", "mechanics.b5.frame_a.r_0[1]", "mechanics.b5.frame_a.r_0[2]",
              "mechanics.b5.frame_a.r_0[3]", "mechanics.b6.frame_a.r_0[1]", "mechanics.b6.frame_a.r_0[2]",
              "mechanics.b6.frame_a.r_0[3]"];
            var that=this;
            for (var i = 0, len = positionNameArray.length; i < len; i++) {
              (function (index) {
                var positionName = positionNameArray[index];
                that.positionArr[index] = [];
                $.ajax({url:"static/robot_data/"+positionName+".txt",async:true,success:function (data) {
                    that.positionArr[index]=data.split("\n");
                    that.finish.push(1);
                    if(that.judge){
                      that.init();
                    }
                  }});

              })(i);
            }
          },
          loadRotation() {
            var rotationNameArray = ["axis1.flange.phi", "axis2.flange.phi", "axis3.flange.phi",
              "axis4.flange.phi", "axis5.flange.phi", "axis6.flange.phi"];
            var that=this;
            for (var i = 0, len = rotationNameArray.length; i < len; i++) {
              (function (index) {
                var rotationName = rotationNameArray[index];
                that.rotationArr[index] = [];
                $.ajax({url:"static/robot_data/"+rotationName+".txt",async:true,success:function (data) {
                    that.rotationArr[index]=data.split("\n");
                    that.finish.push(1);
                    if(that.judge){
                      that.init();
                    }
                  }});

              })(i);
            }
          },
          init() {
            container = document.getElementById("container");
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100000);
            camera.position.z = 4000;
            controls = new THREE.TrackballControls(camera);
            scene = new THREE.Scene();
            var ambientLight = new THREE.AmbientLight(0x777777);
            scene.add(ambientLight);
            var directionalLight = new THREE.DirectionalLight(0x777777);
            directionalLight.position.set(0, 1, 0);
            scene.add(directionalLight);
            var pointLight = new THREE.PointLight(0xff0000, 1, 500);
            pointLight.position.set(0, 0, -200);
            scene.add(pointLight);
            // var axis = new THREE.AxisHelper(15000);
            // axis.position.set(0, 0, 0);
            // scene.add(axis);
            //导入模型
            var loader = new THREE.STLLoader();

            loader.load('static/robot_model/model0.STL', function (geometry) {
              var mat = new THREE.MeshPhongMaterial({ color: 0x9933ff, specular: 0x111111, shininess: 600 });
              model0 = new THREE.Mesh(geometry, mat);
              model0.position.set(0, -1000, 0);
              model0.rotation.set(0, 0, 0);
              model0.scale.set(1000 / 25.4, 1000 / 25.4, 1000 / 25.4);
              scene.add(model0);
            });

            loader.load('static/robot_model/model1.STL', function (geometry) {
              var mat = new THREE.MeshPhongMaterial({ color: 0xff0000, specular: 0x111111, shininess: 600 });
              model1 = new THREE.Mesh(geometry, mat);
              model1.position.set(0,0,0);
              model1.scale.set(1000 / 25.4, 1000 / 25.4, 1000 / 25.4);
              scene.add(model1);
            });

            loader.load('static/robot_model/model2.STL', function (geometry) {
              var mat = new THREE.MeshPhongMaterial({ color: 0x00ff00, specular: 0x111111, shininess: 600 });
              model2 = new THREE.Mesh(geometry, mat);
              model2.position.set(0, 0, 0);
              model2.scale.set(1000 / 25.4, 1000 / 25.4, 1000 / 25.4);
              scene.add(model2);
            });

            loader.load('static/robot_model/model3.STL', function (geometry) {
              var mat = new THREE.MeshPhongMaterial({ color: 0x00ffff, specular: 0x111111, shininess: 600 });
              model3 = new THREE.Mesh(geometry, mat);
              model3.position.set(0, 0, 0);
              model3.scale.set(1000 / 25.4, 1000 / 25.4, 1000 / 25.4);
              scene.add(model3);
            });

            loader.load('static/robot_model/model4.STL', function (geometry) {
              var mat = new THREE.MeshPhongMaterial({ color: 0x0000ff, specular: 0x111111, shininess: 600 });
              model4 = new THREE.Mesh(geometry, mat);
              model4.position.set(0, 0, 0);
              model4.scale.set(1000 / 25.4, 1000 / 25.4, 1000 / 25.4);
              scene.add(model4);
            });

            loader.load('static/robot_model/model5_2.0.STL', function (geometry) {
              var mat = new THREE.MeshPhongMaterial({ color: 0xff00ff, specular: 0x111111, shininess: 600 });
              model5 = new THREE.Mesh(geometry, mat);
              model5.position.set(0, 0, 0);
              model5.scale.set(1000 / 25.4, 1000 / 25.4, 1000 / 25.4);
              scene.add(model5);
            });

            loader.load('static/robot_model/model6_3.0.STL', function (geometry) {
              var mat = new THREE.MeshPhongMaterial({ color: 0x9933ff, specular: 0x111111, shininess: 600 });
              model6 = new THREE.Mesh(geometry, mat);
              model6.position.set(0, 0, 0);
              model6.scale.set(1000 / 25.4, 1000 / 25.4, 1000 / 25.4);
              scene.add(model6);
            });
              renderer = new THREE.WebGLRenderer();
              renderer.setSize(window.innerWidth/1.25, window.innerHeight/1.25);
              // renderer.setClearColor(0x0B1746,1.0);
              container.appendChild(renderer.domElement);
              window.addEventListener('resize', this.resize, false);
              this.animate();
          },
          initObjects(i) {
            //定义旋转矩阵
            var rotation1 = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), this.rotationArr[0][i]);
            var rotation2_1 = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(Math.cos(this.rotationArr[0][i]), 0, -(Math.sin(this.rotationArr[0][i]))), this.rotationArr[1][i]);
            var rotation2_2 = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(Math.cos(this.rotationArr[0][i]), 0, -(Math.sin(this.rotationArr[0][i]))), parseFloat(this.rotationArr[1][i]) + parseFloat(this.rotationArr[2][i]));
            var rotation3 = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3((Math.sin(this.rotationArr[0][i])) * (Math.sin(parseFloat(this.rotationArr[1][i]) + parseFloat(this.rotationArr[2][i]))), Math.cos(parseFloat(this.rotationArr[1][i]) + parseFloat(this.rotationArr[2][i])), (Math.cos(this.rotationArr[0][i])) * (Math.sin(parseFloat(this.rotationArr[1][i]) + parseFloat(this.rotationArr[2][i])))), this.rotationArr[3][i]);
            //计算model5旋转轴向量
            var axisx_2 = new THREE.Vector3(Math.cos(this.rotationArr[0][i]), 0, -(Math.sin(this.rotationArr[0][i])));
            axisx_2.applyAxisAngle(new THREE.Vector3((Math.sin(this.rotationArr[0][i])) * (Math.sin(parseFloat(this.rotationArr[1][i]) + parseFloat(this.rotationArr[2][i]))), Math.cos(parseFloat(this.rotationArr[1][i]) + parseFloat(this.rotationArr[2][i])), (Math.cos(this.rotationArr[0][i])) * (Math.sin(parseFloat(this.rotationArr[1][i]) + parseFloat(this.rotationArr[2][i])))), this.rotationArr[3][i]);
            var rotation4 = new THREE.Matrix4().makeRotationAxis(axisx_2, this.rotationArr[4][i]);
            var rotation5 = new THREE.Matrix4().makeRotationAxis(axisx_2, parseFloat(this.rotationArr[4][i]) + parseFloat(this.rotationArr[5][i]));
            model1.position.set(this.positionArr[0][i] * 1000, this.positionArr[1][i] * 1000-1000, this.positionArr[2][i] * 1000);
            model1.rotation.setFromRotationMatrix(rotation1);
            //model2的运动
            model2.rotation.setFromRotationMatrix(rotation2_1.multiply(rotation1));
            model2.position.set(this.positionArr[3][i] * 1000, this.positionArr[4][i] * 1000-1000, this.positionArr[5][i] * 1000);
            //model3的运动
            model3.position.set(this.positionArr[6][i] * 1000, this.positionArr[7][i] * 1000-1000, this.positionArr[8][i] * 1000);
            model3.rotation.setFromRotationMatrix(rotation2_2.multiply(rotation1));
            //model4的运动
            model4.position.set(this.positionArr[9][i] * 1000, this.positionArr[10][i] * 1000-1000, this.positionArr[11][i] * 1000);
            model4.rotation.setFromRotationMatrix(rotation3.multiply(rotation2_2));
            //model5的运动
            model5.position.set(this.positionArr[12][i] * 1000, this.positionArr[13][i] * 1000-1000, this.positionArr[14][i] * 1000);
            model5.rotation.setFromRotationMatrix(rotation4.multiply(rotation3));
            //model6的运动
            model6.position.set(this.positionArr[15][i] * 1000, this.positionArr[16][i] * 1000-1000, this.positionArr[17][i] * 1000);
            model6.rotation.setFromRotationMatrix(rotation5.multiply(rotation3));

          },
          resize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          },
          animate() {
            if(this.m<this.timeArr.length){
              this.initObjects(this.m);
              this.m = this.m + 1;
            }else{
              this.m=0;
            }
            controls.update();
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
            requestAnimationFrame(this.animate);
          },

        }
    }
</script>

<style scoped>

</style>
