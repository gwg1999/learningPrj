<template>
  <div>
    <el-menu
      :collapse="false"
      :unique-opened="false"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <sidebar-item v-for="menu in menus" :key="menu.path" :menu="menu"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  name: "Sidebar",
  components: {SidebarItem},
  props: {},
  computed: {
    activeMenu(){
      const route = this.$route
      const {meta, path} = route
      if(meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    menus(){
      return this.$store.getters.routes
    }
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>

</style>
