<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <footer>
    <RouterView name="footer" />
  </footer>
</template>

<script setup>
import { provide } from 'vue'
import { useStore } from 'vuex'
import TheHeader from './components/layouts/TheHeader'

const store = useStore()

function addTeam(teamData) {
  store.dispatch('teams/addTeam', teamData)
  store.dispatch('teams/incrementIdCounter')
}

function addPlayer(playerData) {
  store.dispatch('players/addPlayer', playerData)
  store.dispatch('players/incrementIdCounter')
}

provide('addTeam', addTeam)
provide('addPlayer', addPlayer)

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
