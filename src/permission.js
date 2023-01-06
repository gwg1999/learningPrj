import router from './router'
import NProgress from 'nprogress'
import {getLocalRoute} from "./utils/route";
import {localRoute} from './setting'
import store from "./store";

const whiteList = ["login","404","403"]

NProgress.configure({showSpinner: false})

localRoute && getLocalRoute()

router.beforeEach((to, from, next) => {
  NProgress.start()
  switch (true){
    case localRoute:
      next()
      NProgress.done()
      break
    case whiteList.includes(to.path):
      next()
      NProgress.done()
      break
    default:
      break
  }
})


export default router
