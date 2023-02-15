export default {
  addTeam(context, payload) {
    context.commit('addTeam', payload)
  },
  incrementIdCounter(context) {
    context.commit('incrementIdCounter')
  },
  addTeamMember(context, payload) {
    context.commit('addTeamMember', payload)
  },
  removeTeamMember(context, payload) {
    context.commit('removeTeamMember', payload)
  },
}