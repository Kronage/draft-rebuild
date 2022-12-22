<template>
  <base-button @click="confirmInput">Confirm</base-button>
  <base-button @click="saveChanges">Save Changes</base-button>
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import PlayerItem from '../components/players/PlayerItem'

export default {
  components: {
    PlayerItem
  },
  setup() {
    const router = useRouter()
    const store = useStore()

    const changesSaved = ref(false)

    const players = computed(function() {
      return store.getters['players/players'];
    })

    function confirmInput() {
      router.push('teams')
    }

    function saveChanges() {
      changesSaved.value = true
    }

    return {
      players,
      confirmInput,
      saveChanges
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