<template>
  <base-card>
  <h2>Add Team Member</h2>
    <form id="newPlayer" @submit.prevent="submitForm">
      <div>
        <label for="players">Assign Player To Team</label>
        <select v-model="selected" form="newPlayer" >
          <option disabled value="">Please select one</option>
          <option
            v-for="availablePlayer in props.availablePlayers"
            :key="availablePlayer.id"
            :value="availablePlayer.id"
          >
            {{ availablePlayer.id }} - {{ availablePlayer.fullName }} ({{ availablePlayer.role }})
          </option>
        </select>
      </div>
      <base-button>Add Player</base-button>
    </form>
  </base-card>
</template>

<script setup>
import { ref, defineProps, inject } from 'vue'
import { useStore } from 'vuex'

const props = defineProps(['availablePlayers', 'teamId'])
const store = useStore()

const selected = ref('')

const loadTeamMembers = inject('loadTeamMembers')
const loadAvailablePlayers = inject('loadAvailablePlayers')

function submitForm() {
  const duplicateTeam = store.getters['teams/duplicatePlayerId'](selected.value)
  if (duplicateTeam !== undefined) {
    // make sure they want it to be overwritten
    if (confirm('This player is already on a team. Are you sure?')) {
      // delete from team
      store.dispatch('teams/removeTeamMember', {
        teamId: duplicateTeam.id,
        playerId: selected.value
      })
    } else {
      selected.value = ''
      return
    }
  }
  store.dispatch('teams/addTeamMember', {
    teamId: props.teamId,
    playerId: selected.value
  })
  loadTeamMembers(props.teamId)
  loadAvailablePlayers(props.teamId)
  selected.value = ''
}

</script>