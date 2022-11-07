<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>
  
<script>
export default {
  props: ['mode']
}
</script>
  
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: green;
  border: 1px solid green;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: lightgreen;
  border-color: lightgreen;
}

.flat {
  background-color: transparent;
  color: lightgreen;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>