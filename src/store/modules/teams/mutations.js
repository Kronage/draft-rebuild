export default {
  addTeamMember(state, payload) {
    state.teams.find(team => team.id === payload.teamId).members.push(payload.playerId)
  },
  removeTeamMember(state, payload) {
    let members = state.teams.find(
      team => team.id === payload.teamId
    ).members
    let index = members.indexOf(payload.playerId)
    members.splice(index, 1)
  },
}