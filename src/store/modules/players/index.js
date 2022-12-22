import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      players: [
        { id: 'u1', fullName: 'Nik', role: 'King' },
        { id: 'u2', fullName: 'Erik', role: 'Pleb' },
        { id: 'u3', fullName: 'Ben', role: 'Grunt' },
        { id: 'u4', fullName: 'Hillary', role: 'Overseer' },
        { id: 'u5', fullName: 'Bau', role: '???' },
        { id: 'u6', fullName: 'Janelle', role: 'Magician' },
        { id: 'u7', fullName: 'Tim', role: 'Rogue' },
      ],
    }
  },
  actions,
  getters,
  mutations
}