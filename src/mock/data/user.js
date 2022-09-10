import Mock from 'mockjs'

let user = Mock.mock({
  'user|10': {
    name: '@cname()',
    IDCard: '@id()',
    address: '@city(true)'
  }
})

const getUserLogin = function(params){

}

export default {
  getUserLogin,
}
