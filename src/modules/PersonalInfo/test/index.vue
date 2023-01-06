<template>
  <div >
    <query-page
      :tableData="tableData"
      :tableColumns="tableColumns"
      :searchFormItem="searchFormItem"
      @query="tableConfig.toSearch"
      :page.sync="tableConfig.page"
      :total="tableConfig.total"
      :btnList="tableConfig.btnList"
      :title="tableConfig.title"
      :hasTree="tableConfig.hasTree"
    >
    </query-page>
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script>
import QueryPage from "@/components/queryPage";
export default {
  name: "index",
  components: {QueryPage},
  data(){
    return {
      searchFormItem: [
        {
          label: '测试标签',
          prop: 'searchItem1'
        },
        {
          label: '测试标签2',
          prop: 'searchItem2'
        },
        {
          label: '测试标签3',
          prop: 'searchItem3'
        },
        {
          label: '测试标签4',
          prop: 'searchItem4'
        },
      ],
      tableConfig: {
        title: '测试列表',
        total: 0,
        page: 1,
        pageSize: 10,
        hasTree: true,
        toSearch: (searchForm) => {
          this.toSearch(searchForm)
        },
        searchTree: () => {

        },
        btnList: [
          {
            title: '新增',
            click: () => {
            }
          }
        ]
      },
      tableColumns: [
        {
          label: '测试列1',
          prop: 'test1'
        },
        {
          label: '测试列2',
          prop: 'test2',
        },
        {
          label: '测试列3',
          prop: 'test3',
        }
      ],
      tableData: [
        {
          test1: '111',
          test2: '222',
          test3: '333',
        }
      ]
    }
  },
  methods: {
    toSearch(searchForm){
      let params = {...searchForm}
      params.page = this.tableConfig.page
      params.pageSize = this.tableConfig.pageSize
    },
    test(){
      this.$router.push('a')
    }
  },
  created() {
  }
}
</script>

<style scoped lang="scss">

</style>
