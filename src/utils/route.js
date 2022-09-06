import {setRoutes} from "../router";


/**
 * @description: 根据src/modules文件夹，加载本地路由
 * @returns {type}
 */
export const getLocalRoute = async function (){
  let routes = []
  const reqs = require.context('@/modules',true,/route\.js$/)

  // 递归加载子路由
  let analysis = async function (req, p) {
    let reg = new RegExp('^' + p.replace('/route.js', '') + '\/[a-zA-Z]+\/route\.js$')
    for (let k = 0; k < reqs.keys().length; k++) {
      let dpath = reqs.keys()[k]
      if(reg.test(dpath)){
        let getModule = () => import(`@/modules/${dpath.replace('./','')}`)
        let cReq = await getModule()
        cReq = cReq.default
        if(req.children){
          req.children.push(cReq)
        }else{
          req.children = [cReq]
        }
        await analysis(cReq,dpath)
      }
    }
  }

  // 加载src/modules下的一级目录
  for(let i=0;i<reqs.keys().length;i++){
    let path = reqs.keys()[i]
    if(/^\.\/[a-zA-Z]+\/route\.js$/.test(path)){
      let getModule = () => import(`@/modules/${path.replace('./','')}`)
      let req = await getModule()
      req = req.default
      await analysis(req,path)
      routes.push(req)
    }
  }
  routes.push({path: '*',redirect: '/404',hidden: true})
  setRoutes(routes)
}
