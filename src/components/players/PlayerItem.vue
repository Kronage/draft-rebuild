<template>
  <li>
    <h3>{{ name }}</h3>
      <p>Box Office Total: {{ playerBoxOfficeTotal }}</p>
    <div class="role" :class="roleClass">{{ role }}</div>
    <base-button class="right" v-if="!showForm" @click="showForm = !showForm">View Movies</base-button>
    <base-button class="right" v-if="showForm" @click="showForm = !showForm">Hide Movies</base-button>
    <div v-if="showForm">
      <h3>Movies:</h3>
      <MovieItem
        v-for="playerMovie in playerMovies"
        :key="playerMovie.id"
        :title="playerMovie.title"
        :box-office="playerMovie.boxOffice"
        :ratings="playerMovie.ratings"
      />
    </div>
  </li>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import { useStore } from 'vuex'
import MovieItem from '../movies/MovieItem'

const props = defineProps(['name', 'role', 'movies'])
const store = useStore()

const showForm = ref(false)

const playerMovies = computed(function() {
  return store.getters['movies/getMoviesByIds'](props.movies)
})

const playerBoxOfficeTotal = computed(function() {
  var boxOffice = store.getters['movies/getMovieBoxOfficeTotal'](props.movies)
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return formatter.format(boxOffice)
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

.right {
  border-radius: 40px;
  float: right;
  padding: 0.25rem 1rem;
}
</style>