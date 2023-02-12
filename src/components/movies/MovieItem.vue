<template>
  <li>
    <h3>{{ title }}</h3>
    <div>Box Office: {{ boxOffice }}</div>
    <div>Ratings
    <ul v-for="rating in props.ratings" :key="rating.id">
      {{ rating.source }}: {{ rating.value }}
    </ul>
    </div>
  </li>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps(['title', 'boxOffice', 'ratings'])

const boxOffice = computed(function() {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return formatter.format(props.boxOffice)
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
</style>