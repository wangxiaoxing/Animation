<template>
  <div>
    <el-col style='width:240px;'>
      <h3>动画技术</h3>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#409eff"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title" @click.native="showDetails">GIF</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title" @click="showDetails">FLASH</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title" @click="showDetails">CSS3</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title" @click="showDetails">HTML5(2D)</span>
        </el-menu-item>
        <!--<el-menu-item index="5">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title" >HTML5(3D)</span>-->
        <!--</el-menu-item>-->
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span @click="showDetails">HTML5(3D)</span>
          </template>
          <el-menu-item-group>
            <template slot="title">静态</template>
            <el-menu-item index="5-1" @click.native="showDetails">静态3D</el-menu-item>
            <el-menu-item index="5-2" @click.native="showDetails">静态VR</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="动画">
            <el-menu-item index="5-3" @click.native="showDetails">简单动画</el-menu-item>
            <el-menu-item index="5-4" @click.native="showDetails">复杂动画</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
    export default {
        name: "nav-menu",
        methods:{
          showDetails(event){
            this.$store.dispatch('changeView',event.target.innerHTML);
          }
        }
    }
</script>

<style scoped>

</style>
