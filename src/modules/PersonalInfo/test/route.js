const route = {
  path: 'test',
  name: 'test',
  meta: {
    title: '测试',
  },
  component: () => import('./index')
}

export default route
