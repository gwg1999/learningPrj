module.exports = {
  // 本地路由
  localRoute: true,

  appName: 'demo',

  // 代理设置
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8080',
      changeOrigin: true,
      pathRewrite: {
        '/api': ''
      }
    }
  },
}
