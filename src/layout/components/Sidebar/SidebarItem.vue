<template>
  <div v-if="menus"></div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    menus: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>

</style>
