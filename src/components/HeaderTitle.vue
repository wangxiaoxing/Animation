<template>
    <div id="footer">
      <el-row>
        <el-col :span="24">
            <div id="title">
              <span>{{title}}</span>
            </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "header-title",
        data(){
          return{
            title:'基于HTML5和CSS3的网页端动画技术及应用'
          }
        }
    }
</script>

<style scoped>
  #title{
    text-align: center;
    font-size:24px;
    height: 100px;
    line-height: 100px;
    background-color: #409eff;
    border-radious:4px;
    color: white;
  }

</style>
