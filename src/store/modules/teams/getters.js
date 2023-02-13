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
    let movieIds = []
    for (let teamMember of teamMembers) {
      movieIds = teamMember.movies
      for (let movieId of movieIds) {
        teamMovieIds.push(movieId)
      }
    }
    let total = rootGetters['movies/getMovieBoxOfficeTotal'](teamMovieIds)
    return total
  }
}