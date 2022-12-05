<template>
  <TheNavigation></TheNavigation>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  name: 'App',
  components: {
    TheNavigation,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
