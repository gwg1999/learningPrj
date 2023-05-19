import {appName} from "../setting";

export default {
  set: (name, value) => {
    localStorage.setItem(`${appName}_${name}`, value)
  },
  get: (name) => {
    return localStorage.getItem(`${appName}_${name}`)
  },
  clear: () => {
    let len = localStorage.length
    let keys = []
    for(let i=0;i<len;i++){
      let key = localStorage.key(i)
      if(key && key.startsWith(appName)){
        keys.push(key)
      }
    }
    keys.forEach(key=>localStorage.removeItem(key))
  },
  remove : (name) => {
    localStorage.removeItem(`${appName}_${name}`)
  }
}
