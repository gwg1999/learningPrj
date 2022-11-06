<template>
  <div class="common-form">
    <el-form label-width="120px" inline :rules="rules">
      <el-form-item
        v-for="(item, index) in itemList"
        :key="item.prop+'_'+index"
        :label="item.label"
      >
        <slot :name="item.prop">
          <el-input
            v-if="item.type === 'input'"
            v-model="formData[item.prop]"
            :placeholder="item.placeholder || ''"
          ></el-input>

          <el-select
            v-if="item.type === 'select'"
            v-model="formData[item.prop]"
          >
            <el-option
              :value="option.value"
              v-for="option in item.options"
              :key="option.label"
              :label="option.label"
            ></el-option>
          </el-select>

          <el-radio-group
            v-model="formData[item.prop]"
            v-if="item.type === 'radio'"
          >
            <el-radio
              v-for="option in item.options"
              :label="option.value"
              :key="option.label"
            >{{option.label}}</el-radio>
          </el-radio-group>

          <el-checkbox-group
            v-if="item.type === 'checkbox'"
            v-model="formData[item.prop]"
          >
            <el-checkbox
              v-for="option in item.options"
              :label="option.value"
              :key="option.label"
            >{{option.label}}</el-checkbox>
          </el-checkbox-group>
        </slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    itemList: {
      type: Array,
      default: []
    },
    rules: {
      type: Object,
      default(){
        return {}
      }
    },
    formData: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
