<template>
  <div v-if="!menu.hidden">
    <el-submenu :index="menu.name" v-if="judgeActiveChild > 1">
      <template v-slot:title>
        <i :class="`el-icon-${menu.meta.icon}`" v-if="menu.meta.icon"></i>
        <span>{{menu.meta.title}}</span>
      </template>
      <el-menu-item v-for="child in menu.children" :key="child.path" @click="changeRoute(child, 1)" :index="child.name">
        <i :class="`el-icon-${child.meta.icon}`" v-if="child.meta.icon"></i>
        <span>{{child.meta.title}}</span>
      </el-menu-item>
    </el-submenu>

    <el-menu-item :index="menu.name" v-if="judgeActiveChild===0" @click="changeRoute(menu)">
      <i :class="`el-icon-${menu.meta.icon}`" v-if="menu.meta.icon"></i>
      <span>{{menu.meta.title}}</span>
    </el-menu-item>

    <el-menu-item :index="menu.children[0].name" v-if="judgeActiveChild===1" @click="changeRoute(menu.children[0],1)">
      <i :class="`el-icon-${menu.children[0].meta.icon}`" v-if="menu.children[0].meta.icon"></i>
      <span>{{menu.children[0].meta.title}}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    menu: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    // 判断菜单中未隐藏的子路由
    // 返回激活的子路由数量
    judgeActiveChild(){
      let _this = this
      if(!_this.menu.children || _this.menu.children.length === 0){
        return 0
      }
      let activeChildren = _this.menu.children.map((child) => {
        if(!child.hidden) return child
      })
      return activeChildren.length
    },
  },
  data(){
    return {

    }
  },
  methods: {
    // 点击跳转路由
    changeRoute(item,flag){
      let routePath = this.menu.path
      if(flag){
        routePath += `/${item.path}`
      }
      if(this.$route.fullPath !== routePath){
        this.$router.push(routePath)
      }else{
        this.$message.warning("当前已在该页面")
      }
    },


  }
}
</script>

<style scoped lang="scss">
.el-menu-item{
  width: 100%;
}
</style>
