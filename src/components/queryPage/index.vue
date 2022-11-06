<template>
  <div>
    <div ref="searchForm" class="queryForm">
      <el-form :inline="true">
        <el-form-item
          v-for="searchItem in searchFormItem"
          :label="searchItem.label"
          v-model="searchItem.value"
          :key="searchItem.label"
        >
          <slot :name="`search_${searchItem.prop}`"></slot>
        </el-form-item>
      </el-form>
      111
    </div>

    <div :class="{'hasTree':hasTree}" class="queryBody">

      <div ref="tree" class="queryTree" v-if="hasTree">tree</div>

      <div ref="table" class="query_table">
        <div ref="tableTitle" class="title_btn">
          <span class="title">{{tableConfig.title}}</span>
          <div v-if="!readonly" class="tableBtn">
            <el-button
              v-for="(btn, index) in tableConfig.btnList"
              @click="btn.click() || btn.click"
              @dblclick="btn.dblclick() || btn.dblclick"
              :icon="btn.icon?`el-icon-${btn.icon}`: ''"
              :key="btn.title"
              size="small"
              :type="btn.type?btn.type:'primary'"
            >
              {{btn.title}}
            </el-button>
          </div>
        </div>
        <el-table
          :data="tableData"
          ref="queryTable"
          border
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="序号"></el-table-column>
          <el-table-column
            v-for="(column, index) in tableColumns"
            :prop="column.prop"
            :label="column.label"
            :key="`${column.label}_${index}`"
          >
            <slot :name="column.prop" slot-scope="scope">
              {{scope.row[column.prop]}}
            </slot>
          </el-table-column>
        </el-table>
        <el-pagination
          ref="queryPagination"
          class="queryPagination"
          layout="total, prev, pager,next, jumper"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "queryPage",
  props: {
    tableColumns: {
      type: Array,
      default(){
        return []
      }
    },
    searchFormItem: {
      type: Array,
      default(){
        return []
      }
    },
    readonly: {
      type: [Boolean, String],
      default: false
    },
    hasTree: {
      type: Boolean,
      default: true,
    },
    tableConfig: {
      type: Object,
      default(){
        return {
          btnList: []
        }
      }
    },
    tableData: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.title_btn{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title{
    font-size: xx-large;
  }
  .titleBtn{

  }
}
.queryPagination{
  float: right;
}
.queryForm{

}
.queryBody{
  display: flex;
  height: 100%;
  .queryTree{

  }
  .query_table{
    flex-grow: 1;
  }
}
.hasTree{
  .queryTree{
    width: 20%;
    flex-grow: 0;
  }
}
</style>

