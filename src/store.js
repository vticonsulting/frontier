import {createStore} from 'vuex'

const state = {
  count: 0,
  year: '1970',
}

const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
}

const actions = {
  increment: ({commit}) => commit('INCREMENT'),

  decrement: ({commit}) => commit('DECREMENT'),

  incrementIfOdd({commit, state}) {
    if ((state.count + 1) % 2 === 0) {
      commit('INCREMENT')
    }
  },

  incrementAsync({commit}) {
    // eslint-disable-next-line no-undef
    return new Promise(resolve => {
      setTimeout(() => {
        commit('INCREMENT')
        resolve()
      }, 1000)
    })
  },

  onSetYear: ({commit}, year) => commit('SET_YEAR', {year}),
}

const mutations = {
  INCREMENT(state) {
    state.count++
  },

  DECREMENT(state) {
    state.count--
  },

  SET_YEAR: (state, {year}) => (state.year = year),
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
