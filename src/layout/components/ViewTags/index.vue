<template>
  <div class="tag-container">
    <div
      v-for="route in visitedView"
      :key="route.name"
      class="each-tag-container"
      :class="{'cur-tag':route.path === $route.path}"
    >
      <router-link
        :to="route.path"
        class="tags"
      >
        {{ route.meta.title || 'none-name' }}
      </router-link>
      <span class="icon-close" v-if="!route.meta.fixed">
        <i class="el-icon-close" @click="closeTag(route)"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewTags",
  data() {
    return {
      routesMap: {},
    }
  },
  computed: {
    visitedView() {
      return this.$store.getters.visitedViews
    },
    routes() {
      return this.$store.getters.routes || []
    }
  },
  watch: {
    $route() {
      this.addTag()
    },
    routes: {
      handler(n) {
        this.getRoutesMap(n)
      },
      immediate: true,
    }
  },
  methods: {
    addTag() {
      let {name} = this.$route
      if (name && this.routesMap[name]) {
        const {title} = this.routesMap[name].meta
        this.$store.dispatch('ADD_VIEW', {
          ...this.$route,
          title
        })
      }
    },
    closeTag(route){
      console.log("deleteRoute:",route)

      if(route.path === this.$route.path){
        let index = this.visitedView.findIndex((item) => {
          return item.path === route.path
        })
        this.$router.push(this.visitedView[index-1].path)
      }
      this.$store.dispatch('DEL_VIEW',route)
    },
    initTag() {
      this.getRoutesMap(this.routes)
    },
    getRoutesMap(routes, basePath = '/') {
      routes.forEach((route) => {
        if(route.meta && route.meta.fixed){
          this.$store.dispatch('ADD_VIEW', route)
        }
        this.routesMap[route.name] = route
        if (route.children) {
          this.getRoutesMap(route.children, route.path)
        }
      })
    }
  },
  created() {
    this.initTag()
  }
}
</script>

<style scoped lang="scss">
.each-tag-container:hover {
  .icon-close {
    opacity: 1;
  }
}

.each-tag-container {
  font-size: small;
  .icon-close {
    opacity: 0;
  }
}
.tag-container{
  display: flex;
  .each-tag-container{
    padding: 2px;
    border-right: solid;
    border-top: solid;
    border-bottom: solid;
    border-top-right-radius: 5px;
    border-width: thin;
    margin-top: 4px;
  }
}
a{
  text-decoration: none;
}
.cur-tag{
  border-bottom: none !important;
}
</style>
