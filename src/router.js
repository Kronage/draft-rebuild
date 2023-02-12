import { createRouter, createWebHistory } from 'vue-router'

import HowToPlay from './pages/HowToPlay.vue'
import TeamsList from './pages/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import PlayersList from './pages/PlayersList.vue'
import MoviesList from './pages/MoviesList.vue'
import NotFound from './pages/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import PlayersFooter from './components/players/PlayersFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/how-to-play', component: HowToPlay },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, // /teams/t1
      ]
    },
    {
      path: '/players',
      components: {
        default: PlayersList,
        footer: PlayersFooter
      },
    },
    {
      path: '/movies',
      components: {
        default: MoviesList,
      },
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
})

router.beforeEach(function(to, from, next) {
  // if (to.name === 'team-members') {
  //   next()
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } })
  // }
  next()
})

export default router