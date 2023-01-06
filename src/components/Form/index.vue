<template>
  <div class="common-form">
    <el-form label-width="120px" :rules="rules">
      <el-form-item
        v-for="(item, index) in itemList"
        :key="item.prop+'_'+index"
        :label="item.label"
      >
        <template v-slot="scope">
          <slot :name="item.prop">
            <el-input
              v-if="item.type === 'input'"
              v-model="FormData[item.prop]"
              :placeholder="item.placeholder || ''"
            ></el-input>

            <el-select
              v-if="item.type === 'select'"
              v-model="FormData[item.prop]"
            >
              <el-option
                :value="option.value"
                v-for="option in item.options"
                :key="option.label"
                :label="option.label"
              ></el-option>
            </el-select>

            <el-radio-group
              v-model="FormData[item.prop]"
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
              v-model="FormData[item.prop]"
            >
              <el-checkbox
                v-for="option in item.options"
                :label="option.value"
                :key="option.label"
              >{{option.label}}</el-checkbox>
            </el-checkbox-group>
          </slot>
        </template>
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
  },
  data(){
    return {
      FormData: {},
      // 判断formData的改变是否由FormData改变引起
      formChangeFlag: true,
    }
  },
  watch: {
    formData:{
      deep: true,
      handler(n){
        this.formChangeFlag = false
        this.FormData = {...n}
      },
      immediate: true,
    },
    FormData: {
      deep: true,
      handler(n){
        if(this.formChangeFlag){
          this.$emit('update:formData',n)
        }
        this.formChangeFlag = true
      },
      immediate: true,
    }
  },
  methods: {
    initialData(){
      this.FormData = {...this.formData}
    },
  },
}
</script>

<style scoped>

</style>
