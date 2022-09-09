
const SET_ROUTES = 'SET_ROUTES'


const state = {
  routes: null,
}

const getters = {
  routes: state => state.routes
}

const mutations = {
  [SET_ROUTES](state, routes){
    state.routes = routes
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
