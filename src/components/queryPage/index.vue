<template>
  <div class="query-page-container">
    <div ref="searchForm" class="queryForm">
      <el-row>
        <el-col :span="20">
          <div>
            <el-form label-width="100px" inline style="text-align: left">
              <slot name="search">
                <el-form-item
                  v-for="searchItem in searchFormItem"
                  :label="searchItem.label"
                  :key="searchItem.label"
                  :span="searchItem.span || 12"
                  :prop="searchItem.prop"
                  v-if="!searchItem.hidden || false"
                  size="small"
                >
                  <slot :name="`search_${searchItem.prop}`">
                    <el-input v-model="searchForm[searchItem.prop]"></el-input>
                  </slot>
                </el-form-item>
              </slot>
            </el-form>
          </div>
        </el-col>
        <el-col :span="4" style="text-align: right">
          <el-button type="primary" size="medium" @click="searchTableData">搜索</el-button>
          <el-button type="primary" size="medium">清空</el-button>
        </el-col>
      </el-row>
    </div>

    <el-divider/>

    <div :class="{'hasTree':hasTree}" class="queryBody">

      <div ref="tree" class="queryTree" v-if="hasTree">
        <el-input
          v-model="filterText"
          clearable
          @clear="searchTreeData"
        >
          <i
            class="el-icon-search el-input__icon"
            slot="suffix"
            @click="searchTreeData"
          ></i>
        </el-input>
        <el-divider></el-divider>
        <el-tree :data="treeData" :props="treeProps" class="filter-tree" :filter-node-method="filterMethod" ref="tree">

        </el-tree>
      </div>

      <div ref="table" class="queryTable">
        <div ref="tableTitle" class="header">
          <div class="title">
            <div class="title-icon"></div>
            <span>{{title}}</span>
          </div>
          <div v-if="!readonly" class="table-btn">
            <span style="margin-right: 5px">
              <el-button
                v-for="(btn, index) in btnList"
                @click="btn.click() || btn.click"
                @dblclick="btn.dblclick() || btn.dblclick"
                :icon="btn.icon?`el-icon-${btn.icon}`: ''"
                :key="btn.title + index"
                size="small"
                :type="btn.type?btn.type:'primary'"
              >
              {{btn.title}}
            </el-button>
            </span>
          </div>
        </div>
        <el-table
          :data="tableData"
          ref="queryTable"
          border
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="#" type="index"></el-table-column>
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
          :current-page="page"
          :page-size="pageSize"
          @current-change="pageChange"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "queryPage",
  props: {
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    treeData: {
      type: Array,
      default(){
        return []
      }
    },
    treeProps: {
      type:Object,
      default(){
        return {}
      }
    },
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
    total: {
      type: Number,
      default: 0,
    },
    btnList: {
      type: Array,
      default(){
        return []
      }
    },
    title: {
      type: String,
      default: ''
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
      searchForm: {},
      filterText: '',
    }
  },
  watch: {
    filterText(val){
      this.$refs.tree.filter(val)
    }
  },
  created() {
    this.initialData()
  },
  methods: {
    filterMethod(value, data){
      if(!value) return true
      return data.label.indexOf(value) !== -1
    },
    initialData(){
      this.searchFormItem.forEach((item) => {
        this.searchForm[item.prop] = ''
      })
    },
    pageChange(val){
      this.$emit('update:page',val)
      this.searchTableData(1)
    },
    searchTableData(type = 0){
      if(type === 0){
        this.$emit("update:page",1)
      }
      this.$emit('query',this.searchForm)
    },
    searchTreeData(){

    },
  }
}
</script>

<style scoped lang="scss">
.query-page-container{
  padding: 20px 10px;
}

.header{
  position: relative;
  height: 40px;
  .title{
    float: left;
    display: flex;
    line-height: 32px;
    margin-top: 8px;
    span{
      line-height: 22px;
      font-weight: 600;
      font-size: 16px;
      background: 0 0;
    }
    .title-icon{
      background-color: rgba(24,144,255,0.2);
      width: 20px;
      height: 20px;
      position: relative;
      &::before{
        content: '';
        height: 10px;
        width: 10px;
        background-color: #1890ff;
        position: absolute;
        bottom: 0;
      }
    }
  }
  .table-btn{
    display: flex;
    justify-content: flex-end;
  }
}
.queryBody{
  .queryTable{
    overflow: hidden;
    .queryPagination{
      float: right;
      &::after{
        clear: both;
      }
    }
  }
  .queryTree{
    float: left;
    width: 20%;
    box-sizing: border-box;
    padding: 10px 10px;
  }
}
</style>

