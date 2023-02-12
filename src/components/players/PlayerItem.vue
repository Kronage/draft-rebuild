<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="role" :class="roleClass">{{ role }}</div>
    <h4>Movies:</h4>
    <MovieItem
      v-for="playerMovie in playerMovies"
      :key="playerMovie.id"
      :title="playerMovie.title"
      :box-office="playerMovie.boxOffice"
      :ratings="playerMovie.ratings"
    />
  </li>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'
import MovieItem from '../movies/MovieItem'

const props = defineProps(['name', 'role', 'movies'])
const store = useStore()

const playerMovies = computed(function() {
  return store.getters['movies/getMoviesByIds'](props.movies)
})

const roleClass = computed(function() {
  if(props.role.value === 'Engineer') {
    return 'role--engineer'
  }
  if (props.role.value === 'Consultant') {
    return 'role--consultant'
  }
  return null
})
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

.role {
  border-radius: 40px;
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
}

.role--engineer {
  background-color: blue;
  color: white;
}

.role--consultant {
  background-color: #af003a;
  color: white;
}
</style>