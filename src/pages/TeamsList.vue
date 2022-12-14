<template>
  <RouterView></RouterView>
  <ul>
    <TeamsItem
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></TeamsItem>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import TeamsItem from '../components/teams/TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  computed: {
    ...mapGetters('teams', ['teams']),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>