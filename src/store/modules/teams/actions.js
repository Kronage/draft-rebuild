export default {
  addTeamMember(context, payload) {
    context.commit('addTeamMember', payload)
  },
  removeTeamMember(context, payload) {
    context.commit('removeTeamMember', payload)
  },
}