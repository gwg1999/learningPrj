<template>
  <div>
    <el-scrollbar>
      <el-menu
        :collapse="false"
        :unique-opened="false"
        :default-active="activeMenu"
      >
        <sidebar-item v-for="route in menus" :key="route.path" :item="route"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  name: "Sidebar",
  components: {SidebarItem},
  props: {
    menus: {
      type: Array,
      default(){
        return []
      }
    }
  },
  computed: {
    activeMenu(){
      const route = this.$route
      const {meta, path} = route
      if(meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  }
}
</script>

<style scoped>

</style>
