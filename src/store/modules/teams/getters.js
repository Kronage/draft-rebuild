export default {
  teams(state) {
    return state.teams
  },
  duplicatePlayerId: (state) => (playerId) => {
    return state.teams.find(
      team => team.members.includes(playerId)
    )
  }
}