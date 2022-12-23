export default {
  addPlayer(context, payload) {
    context.commit('addPlayer', payload)
  },
  incrementIdCounter(context) {
    context.commit('incrementIdCounter')
  }
}