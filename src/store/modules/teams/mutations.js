export default {
  addTeam(state, payload) {
    state.teams.push(payload)
  },
  incrementIdCounter(state) {
    state.idCounter++
  },
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