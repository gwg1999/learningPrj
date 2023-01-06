const route = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录页面',
    isFullScreen: true,
  },
  hidden: true,
  component: () => import('./index')
}

export default route
