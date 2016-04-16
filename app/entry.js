var Vue = require('vue');
var App = require('./components/App.vue');

var GameState = require('./lib/gamestate.js').default;

var gs = new GameState();

new Vue({
  el: 'body',
  components: {
    app: App
  },
  methods: {
    popCard (msg) {
      console.log("Event received, bro", msg);
      gs.popCard(msg);
    }
  },
  events: {
    'attempt-challenge': function () {
      gs.attemptChallenge();
    }
  },
  data: { gs }
});
