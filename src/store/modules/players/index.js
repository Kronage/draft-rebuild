import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      players: [
        {
          id: 'u1',
          fullName: 'Nik',
          role: 'King',
          movies: ['m1', 'm2']
        },
        {
          id: 'u2',
          fullName: 'Erik',
          role: 'Pleb',
          movies: ['m3', 'm4', 'm5']
        },
        {
          id: 'u3',
          fullName: 'Ben',
          role: 'Grunt',
          movies: ['m6', 'm8']
        },
        {
          id: 'u4',
          fullName: 'Hillary',
          role: 'Overseer',
          movies: ['m7', 'm10']
        },
        {
          id: 'u5',
          fullName: 'Bau',
          role: '???',
          movies: ['m9']
        },
        {
          id: 'u6',
          fullName: 'Janelle',
          role: 'Magician',
          movies: ['m11', 'm12', 'm13', 'm14']
        },
        {
          id: 'u7',
          fullName: 'Tim',
          role: 'Rogue',
          movies: ['m15', 'm16']
        },
      ],
      idCounter: 8
    }
  },
  actions,
  getters,
  mutations
}