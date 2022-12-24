export default {
  addTeamMember(state, payload) {
    state.teams.find(team => team.id === payload.teamId).members.push(payload.playerId)
  }
}