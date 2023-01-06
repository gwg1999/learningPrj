const state = {
  routes: null,
  visitedViews: [],
}

const getters = {
  routes: state => state.routes,
  visitedViews: state => state.visitedViews,
}

const mutations = {
  ['SET_ROUTES'](state, routes){
    state.routes = routes
  },
  ['ADD_VISITEDVIEW'](state, view){
    let isExist = state.visitedViews.filter((v)=>{
      return v.path === view.path
    })
    if(isExist.length === 0){
      state.visitedViews.push(view)
    }
  },
  ['DELETE_VISITEDVIEW'](state, view){
    state.visitedViews = state.visitedViews.filter((v) => {
      return v.path !== view.path
    })
  },
  ['RESET_VISITEDVIEW'](state){
    state.visitedViews = []
  }
}

const actions = {
  ['ADD_VIEW']({commit}, view){
    commit('ADD_VISITEDVIEW', view)
  },
  ['DEL_VIEW']({commit}, view){
    commit('DELETE_VISITEDVIEW', view)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
