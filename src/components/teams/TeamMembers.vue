<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <PlayerItem
        v-for="teamMember in teamMembers"
        :key="teamMember.id"
        :name="teamMember.fullName"
        :role="teamMember.role"
      />
    </ul>
    <base-button @click="showForm = !showForm">Add Team Member</base-button>
    <AddTeamMember
      v-if="showForm"
      :available-players="availablePlayers"
      :team-id="props.teamId"
    />
  </section>
</template>

<script setup>
import { ref, computed, defineProps, provide, watch } from 'vue'
import { useStore } from 'vuex'
import PlayerItem from '../players/PlayerItem'
import AddTeamMember from './AddTeamMember'

const store = useStore()
const props = defineProps(['teamId'])

const showForm = ref(false)

const teamName = ref('')
const teamMembers = ref([])

const players = computed(function() {
  return store.getters['players/players']
})
const teams = computed(function() {
  return store.getters['teams/teams']
})

function loadTeamMembers(teamId) {
  let selectedTeam = teams.value.find(team => team.id === teamId)
  let mems = selectedTeam.members
  let selectedMembers = []
  for (let mem of mems) {
    let selectedPlayer = players.value.find(player => player.id === mem)
    selectedMembers.push(selectedPlayer)
  }
  teamMembers.value = selectedMembers
  teamName.value = selectedTeam.name
}

const availablePlayers = ref([])

function loadAvailablePlayers(teamId) {
  let selectedTeam = teams.value.find(team => team.id === teamId)
  let mems = selectedTeam.members
  availablePlayers.value = players.value.filter(plr => !mems.includes(plr.id))
  console.log(availablePlayers.value)
}

loadTeamMembers(props.teamId)

loadAvailablePlayers(props.teamId)

provide('loadTeamMembers', loadTeamMembers)
provide('loadAvailablePlayers', loadAvailablePlayers)

watch(() => props.teamId, function(newId) {
  loadTeamMembers(newId),
  loadAvailablePlayers(newId)
})
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>