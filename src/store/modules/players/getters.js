export default {
  players(state) {
    return state.players
  },
  idCounter(state) {
    return state.idCounter
  },
  getPlayersByIds: (state) => (playerIds) => {
    let selectedPlayers = []
    for (let playerId of playerIds) {
      let selectedPlayer = state.players.find(player => player.id === playerId)
      selectedPlayers.push(selectedPlayer)
    }
    return selectedPlayers
  } 
}