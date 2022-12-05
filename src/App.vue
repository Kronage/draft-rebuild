<template>
  <TheNavigation></TheNavigation>
  <main>
    <RouterView></RouterView>
  </main>
  <footer>
    <RouterView name="footer"></RouterView>
  </footer>
</template>

<script>
import TheNavigation from './components/layouts/TheNavigation.vue';

export default {
  name: 'App',
  components: {
    TheNavigation,
  },
  data() {
    return {
      teams: [
        { id: 't1', name: 'The Blue Roses', members: ['u1', 'u2'] },
        { id: 't2', name: 'The Bookhouse Boys', members: ['u3', 'u4', 'u5'] },
        { id: 't3', name: 'The Owls Are Not What They Seem', members: ['u6', 'u7'] },
      ],
      users: [
        { id: 'u1', fullName: 'Nik', role: 'King' },
        { id: 'u2', fullName: 'Erik', role: 'Pleb' },
        { id: 'u3', fullName: 'Ben', role: 'Grunt' },
        { id: 'u4', fullName: 'Hillary', role: 'Overseer' },
        { id: 'u5', fullName: 'Bau', role: '???' },
        { id: 'u6', fullName: 'Janelle', role: 'Magician' },
        { id: 'u7', fullName: 'Tim', role: 'Rogue' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
};
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
