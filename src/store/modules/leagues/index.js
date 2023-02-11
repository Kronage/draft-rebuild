import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      league: [
        {
          id: 'l1',
          leagueName: '2023 Winter League',
          teams: ['t1', 't2', 't3'],
          startDate: '',
          endDate: ''
        }
      ]
    }
  },
  actions,
  getters,
  mutations
}