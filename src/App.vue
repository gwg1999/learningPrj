<template>
  <div id="app">
    <MainApp/>
  </div>
</template>

<script>
import MainApp from './layout/MainApp'
export default {
  name: 'App',
  components: {MainApp},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*height: calc(100vh);*/
}
body{
  margin: 0;
}

</style>
