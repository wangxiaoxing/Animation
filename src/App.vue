<template>
  <div id="app">
    <header-title></header-title>
    <introduction></introduction>
    <nav-menu></nav-menu>
  </div>
</template>

<script>
  import HeaderTitle from './components/HeaderTitle'
  import NavMenu from './components/NavMenu'
  import Introduction from './components/Introduction'
export default {
  components: {HeaderTitle,NavMenu,Introduction},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
