<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <PlayerItem
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      />
    </ul>
    <RouterLink to="/teams/t2">Go to Team 2</RouterLink>
  </section>
</template>

<script setup>
import { ref, computed, defineProps, watch } from 'vue'
import { useStore } from 'vuex'
import PlayerItem from '../players/PlayerItem.vue'

const store = useStore()
const props = defineProps(['teamId'])

const teamName = ref('')
const members = ref([])

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
  members.value = selectedMembers
  teamName.value = selectedTeam.name
}

loadTeamMembers(props.teamId)

watch(() => props.teamId, function(newId) {
  loadTeamMembers(newId)
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