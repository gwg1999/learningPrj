<template>
  <div>
    <el-form>
      <el-form-item label="账号" for="username">
        <el-input v-model="loginForm.username" id="username"></el-input>
      </el-form-item>
      <el-form-item label="密码" for="password">
        <el-input type="password" id="password" v-model="loginForm.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return {
      loginForm: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

</style>
