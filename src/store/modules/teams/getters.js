export default {
  teams(state) {
    return state.teams
  },
  duplicatePlayerId: (state) => (playerId) => {
    return state.teams.find(
      team => team.members.includes(playerId)
    )
  },
  getTeamBoxOfficeTotal: (state, getters, rootState, rootGetters) => (teamId) => {
    let playerIds = state.teams.find(team => team.id === teamId).members
    let teamMembers = rootGetters['players/getPlayersByIds'](playerIds)
    let teamMovieIds = []
    for (let teamMember of teamMembers) {
      let movieIds = teamMember.movies ? teamMember.movies : []
      for (let movieId of movieIds) {
        teamMovieIds.push(movieId)
      }
    }
    return teamMovieIds.length === 0 ? 0 : rootGetters['movies/getMovieBoxOfficeTotal'](teamMovieIds)
  }
}