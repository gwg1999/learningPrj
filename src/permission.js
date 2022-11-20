import router from './router'
import NProgress from 'nprogress'
import {getLocalRoute} from "./utils/route";
import {localRoute} from './setting'
import store from "./store";

const whiteList = ["login","404","403"]

NProgress.configure({showSpinner: false})

localRoute && getLocalRoute()

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  if(!store.getters.routes){
    await getLocalRoute()
    next({...to, replace:true})
  }else{
    next()
    NProgress.done()
  }
})


export default router
