const route = {
  path: '/heartPage',
  name: 'heartPage',
  meta: {
    title: '心型',
    fixed: true,
  },
  component: () => import('./index')
}

export default route
