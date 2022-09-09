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
  switch (true){
    case (localRoute):
      store.commit('RELOAD_ROUTE',false)
  }
  next()
})


export default router
