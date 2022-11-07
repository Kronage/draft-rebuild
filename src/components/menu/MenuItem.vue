<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
      </header>
      <p>{{ description }}</p>
      <base-button>Test</base-button>
    </base-card>
  </li>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';

export default {
  components: {
    BaseButton,
    BaseCard
  },
  props: ['id', 'title', 'description'],
};
</script>
  
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>