import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      teams: [
        {
          id: 't1',
          name: 'The Blue Roses',
          members: ['u1', 'u2']
        },
        {
          id: 't2',
          name: 'The Bookhouse Boys',
          members: ['u3', 'u4', 'u5']
        },
        {
          id: 't3',
          name: 'The Owls Are Not What They Seem',
          members: ['u6', 'u7']
        },
      ],
    }
  },
  actions,
  getters,
  mutations
}