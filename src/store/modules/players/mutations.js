export default {
  addPlayer(state, payload) {
    state.players.push(payload)
  },
  incrementIdCounter(state) {
    state.idCounter++
  }
}