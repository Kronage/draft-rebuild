<template>
  <base-button @click="confirmInput">Confirm</base-button>
  <base-button @click="saveChanges">Save Changes</base-button>
  <ul>
    <PlayerItem v-for="player in players" :key="player.id" :name="player.fullName" :role="player.role"></PlayerItem>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import PlayerItem from '../components/players/PlayerItem.vue';

export default {
  components: {
    PlayerItem,
  },
  computed: {
    ...mapGetters('players', ['players']),
  },
  data() {
    return { changesSaved: false };
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? You have unsaved changes!');
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>