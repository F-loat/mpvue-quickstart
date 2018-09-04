import { INCREMENT, DECREMENT } from '../mutation-types'

const count = {
  state: {
    count: 0
  },
  mutations: {
    [INCREMENT]: state => {
      const obj = state
      obj.count += 1
    },
    [DECREMENT]: state => {
      const obj = state
      obj.count -= 1
    }
  },
  actions: {
    increment({ commit }) {
      commit(INCREMENT)
    },
    decrement({ commit }) {
      commit(DECREMENT)
    }
  }
}

export default count
