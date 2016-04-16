<template>
  <div class="app">
    <div class="challenges-container">
      <challenge class="current" :challenge="data.challenges[0]" v-on:click="attemptChallenge"></challenge>
      <challenge v-for="challenge in data.challenges.slice(1)" :challenge="challenge"></challenge>
    </div>
    <div class="cards-container">
      <card v-for="card in data.cards" :card="card" :index="$index"></card>
    </div>
    <log :messages="data.messages"></log>
  </div>
</template>
<script>
import Card from './Card.vue';
import Log from './Log.vue';
import Challenge from './challenge.vue';

export default {
  props: ['data'],
  components: {
    card: Card,
    log: Log,
    challenge: Challenge
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

</style>
