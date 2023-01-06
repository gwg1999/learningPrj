const route = {
  path: '/SystemManage',
  name: 'SystemManage',
  meta: {
    title: '系统管理'
  },
  component: () => import('./index')
}

export default route
