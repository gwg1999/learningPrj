<template>
  <div>
    <el-table>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="序号" width="55">
        <template v-slot="scope">
          {{}}
        </template>
      </el-table-column>
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :prop="column.prop"
        :width="column.width?column.width:''"
        :sortable="column.sortable || false"
        :label="column.label || ''"
        :fixed="column.fixed || ''"
        :align="column.align || 'center'"
      >
        <template v-slot="scope">
          <slot :name="column.prop">
            {{scope.row[column.prop]}}
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    columns: {
      type: Array,
      default(){
        return []
      }
    },
    tableData: {
      type: Array,
      default(){
        return []
      }
    },
    tableConfig: {
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
