<template>
  <AddPlayer />
  <ul>
    <PlayerItem
      v-for="player in players"
      :key="player.id"
      :name="player.fullName"
      :role="player.role"
      />
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PlayerItem from '../components/players/PlayerItem'
import AddPlayer from '../components/players/AddPlayer'

export default {
  components: {
    PlayerItem,
    AddPlayer
  },
  setup() {
    const store = useStore()

    const players = computed(function() {
      return store.getters['players/players']
    })

    return {
      players
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.changesSaved) {
      next()
    } else {
      const userWantsToLeave = confirm('Are you sure? You have unsaved changes!')
      next(userWantsToLeave)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>