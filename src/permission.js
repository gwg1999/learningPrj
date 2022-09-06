import router from './router'
import NProgress from 'nprogress'
import {getLocalRoute} from "./utils/route";

const whiteList = ["login","404","403"]
NProgress.configure({showSpinner: false})
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  await getLocalRoute()
  next()
})


export default router
