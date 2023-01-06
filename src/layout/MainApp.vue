<template>
  <div>
    <top-bar
      class="topBar"
      v-if="!isFullScreen"
    ></top-bar>
    <div class="content" :class="{'fullScreen':isFullScreen}">
      <sidebar class="sidebar" v-if="!isFullScreen"></sidebar>
      <div class="main-container">
        <ViewTags v-if="!isFullScreen"/>
        <app-main class="app-main"></app-main>
      </div>
    </div>
  </div>
</template>

<script>
import AppMain from "./components/AppMain";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar"
import ViewTags from "./components/ViewTags";

export default {
  name: "MainApp",
  components: {
    AppMain,
    Sidebar,
    TopBar,
    ViewTags
  },
  data(){
    return {
      isFullScreen: false,
    }
  },
  watch: {
    $route: {
      handler(n){
        this.isFullScreen = false
        if(n.meta.isFullScreen){
          this.isFullScreen = n.meta.isFullScreen
        }
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.sidebar{
  width:220px;
  display: inline-block;
  background-color: #545c64;flex-shrink: 0
}
.topBar{
  height: 60px;
  background-color: #1890ff;
}
.fullScreen{
  height: calc(100vh) !important;
}
.content{
  display: flex;
  height: calc(100vh - 60px)
}
</style>
