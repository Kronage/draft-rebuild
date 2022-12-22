import { createStore } from 'vuex'

import leaguesModule from './modules/leagues/index.js'
import moviesModule from './modules/movies/index.js'
import playersModule from './modules/players/index.js'
import teamsModule from './modules/teams/index.js'

const store = createStore({
  modules: {
    leagues: leaguesModule,
    movies: moviesModule,
    players: playersModule,
    teams: teamsModule
  },
})

export default store