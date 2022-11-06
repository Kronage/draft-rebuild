<template>
  <div class="hello">
    <ul>
      <menu-item
        v-for="item in menuItems"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description">
      </menu-item>
    </ul>
  </div>
</template>

<script>
import MenuItem from './menu/MenuItem.vue';

export default {
  components: {
    MenuItem
  },
  data() {
    return {
      menuItems: [
        {
          id: 'how-to-draft',
          title: 'How To Draft',
          description: 'A general breakdown of the rules',
        },
        {
          id: 'pre-draft',
          title: 'Pre-Draft steps',
          description: 'Assemble league, then teams in league, then players in teams',
        },
        {
          id: 'draft-day',
          title: 'Draft Day',
          description: 'For each movie, show the trailer, then start the bidding. Once it is over, save the movie to the team and deduct funds.',
        },
        {
          id: 'post-draft',
          title: 'Post Draft',
          description: 'Team inventory, box office totals, rotten tomatoes, leaderboard based on team box office totals, simple standings chart (league/global), my ranking (in all leagues), line graph, place notifications (went up/down) rank',
        },
        {
          id: 'end-game',
          title: 'Endgame',
          description: '3 weeks after last movie (?), final totals locked in and the draft is closed, save to league history, countdown to next draft',
        },
      ],
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
