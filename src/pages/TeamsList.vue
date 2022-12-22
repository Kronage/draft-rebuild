<template>
  <RouterView />
  <ul>
    <TeamsItem
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    />
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TeamsItem from '../components/teams/TeamsItem'

const store = useStore();

const teams = computed(function() {
  return store.getters['teams/teams']
})
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>