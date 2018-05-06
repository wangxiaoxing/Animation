<template>
  <div><canvas width="400" height="400" ref="drawing"></canvas></div>
</template>

<script>
  var interval;

    export default {
        mounted(){
          interval=setInterval(this.drawing,200);
        },
        name: "canvas-animation",
        data(){
          return {width:100}
        },
        methods:{
         drawing() {
           var context=this.$refs.drawing.getContext("2d");
           context.fillStyle="#409eff";
           context.fillRect(10,10,this.width,this.width);
           this.width=this.width+10;
           if(this.width==400){
             this.width=100;
             clearInterval(interval);
           }
         }
        }
    }
</script>

<style scoped>

</style>
