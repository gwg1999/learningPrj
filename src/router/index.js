/**
 * @Author: gao_wg
 * @Date: 2022/9/5
 * @LastEditor: gao_wg
 * @LastEditTime: 2022/9/5
 * @Description: 路由相关内容，实现动态路由
 *
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 基础路由
export const baseRoute = [
  {
    path: '/404',
    name: '404',
    hidden: true,
    meta: {
      isFullScreen: true,
    },
    component: () => import('@/components/HelloWorld')
  },
]

// 创建路由对象
export function createRouter(){
  return new Router({
    scrollBehavior: () => ({
      y: 0
    }),
    routes: [...baseRoute],
  })
}

const router = createRouter()

// 重置路由对象
export function resetRouter(){
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

// 设置路由
export function setRoutes(routes){
  resetRouter()
  router.addRoutes(routes)
}

export default router
