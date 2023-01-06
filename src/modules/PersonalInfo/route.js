const route = {
  path: '/PersonalInfo',
  name: 'PersonalInfo',
  meta: {
    title: '个人信息'
  },
  component: () => import('./index')
}

export default route
