import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isGif:false,
    isFlash:false,
    isCSS3:false,
    isHTML52D:false,
    isHTML53D:false,
    isStatic3D:false,
    isStaticVR:false,
    isSimpleAnimation:false,
    isComplexAnimation:false
  },
  mutations: {
    changeView:function(state,msg){
      let keys=Object.keys(state);
      for(let i=0;i<keys.length;i++){
        state[keys[i]]=false;
      }
       switch(msg){
         case 'GIF':
           state.isGif=true;
           break;
         case 'FLASH':
           state.isFlash=true;
           break;
         case 'HTML5(2D)':
           state.isHTML52D=true;
           break;
         case 'CSS3':
           state.isCSS3=true;
           break;
         case '静态3D':
           state.isStatic3D=true;
           break;
         case '静态VR':
           state.isStaticVR=true;
           break;
         case '简单动画':
           state.isSimpleAnimation=true;
           break;
         case '复杂动画':
           state.isComplexAnimation=true;
           break;
         default:
           state.isHTML53D=true;
       }
    }
  },
  actions: {
    changeView:({commit},msg)=>{
      commit('changeView',msg)
    }
  }
});

export default store
