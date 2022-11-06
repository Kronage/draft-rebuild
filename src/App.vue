<template>
  <TheHeader title="IDX Movie Draft"></TheHeader>
  <HomePage></HomePage>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
