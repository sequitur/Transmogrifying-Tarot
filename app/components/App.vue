<template>
  <div class="app">
    <div class="challenges-container">
      <challenge v-for="challenge in data.challenges" :challenge="challenge" v-on:click="attemptChallenge"></challenge>
    </div>
    <div class="cards-container">
      <card v-for="card in data.cards" :card="card" :index="$index"></card>
    </div>
    <div class="info-container">
      <log :messages="data.messages"></log>
      <description :content="data.desc"></description>
    </div>
  </div>
</template>
<script>
import Card from './Card.vue';
import Log from './Log.vue';
import Challenge from './challenge.vue';
import Description from './description.vue';

export default {
  props: ['data'],
  components: {
    card: Card,
    log: Log,
    challenge: Challenge,
    description: Description
  },
  methods: {
    attemptChallenge () {
      console.log("Boogaboo!");
      this.$dispatch('attempt-challenge');
    }
  }
}
</script>
<style lang="less">
  .app {
    height: 90vh;
    margin: 0;
    padding: 0;
    .challenges-container {
      height: 30%;
    }
    .cards-container {
      height: 30%;
    }
  }

.challenges-container,.cards-container {
  margin-left: 10rem;
  overflow: hidden;
  padding: 0;
  margin-bottom: 1rem;
}

.info-container {
  height: 40%;
}

</style>
