<template>
  <ul>
    <MovieItem
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :box-office="movie.boxOffice"
      :ratings="movie.ratings"
    />
    </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import MovieItem from '../components/movies/MovieItem'

const store = useStore()

const movies = computed(function() {
  return store.getters['movies/movies']
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