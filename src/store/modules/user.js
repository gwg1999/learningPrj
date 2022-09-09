

const state = {
  username: null,
  password: null,

}

const getters = {
  username: state => state.username,
  password: state => state.password
}

const mutations = {
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_PASSWORD: (state, password) => {
    state.password = password
  }
}

const actions = {
  userLogin({commit}, formData){

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
