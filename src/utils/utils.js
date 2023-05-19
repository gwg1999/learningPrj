/**
 * 深度克隆
 * @returns {*[]}
 */
export function deepClone(obj){
  let objClone;
  // 判断源数据是否为引用数据类型
  if(obj && typeof obj==="object"){
    objClone = Array.isArray(obj)?[]:{}
    for(let key in obj){
      // 判断子节点是否为对象
      if(obj.hasOwnProperty(key)){
        if(obj[key]&&typeof obj[key] ==="object"){
          objClone[key] = deepClone(obj[key]);
        }else{
          // 如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }else{
    objClone = obj
  }
  return objClone;
}

/**
 * 防抖函数
 */
export function debounce(fn,delay){
  let timer = null
  return function(){
    const context = this
    if(timer){window.clearTimeout(timer)}
    timer = setTimeout(() => {
      fn.apply(context, arguments)
      timer = null
    }, delay)
  }
}

/**
 * 节流函数
 */
export function throttle(fn, delay){
  let valid = true
  return function(){
    if(valid){
      fn.apply(this, arguments)
      valid = false
      setTimeout(()=>{
        valid = true
      },delay)
    }
  }
}

/**
 *
 * @param el
 */
export function addTouchListener(elementId){
  let htmlElement = document.getElementById(elementId)
  if(htmlElement){
    console.warn('元素获取失败')
    return
  }

}

/**
 * 说明：大小转换，输入一个文件大小（单位为Byte），自动转换单位
 * @param size
 * @returns {string|number}
 */
export function calculateSize(size){
  if(['',undefined,null].includes(size)){
    return 0
  }
  let k = 1024
  let sizes = ['B','KB','MB','GB','TB']
  let i = Math.floor(Math.log(size) / Math.log(k))
  return `${(size / Math.pow(k,i)).toFixed(2)}${sizes[i]}`
}
