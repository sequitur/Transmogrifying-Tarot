<template>
  <div class="card" v-on:click="pop" transition="draw">
    <h1>{{ card.title }} ({{ index }})</h1>
    <p>{{ card.description }}</p>
    <p>{{ card.effect }}</p>
  </div>
</template>
<script>
export default {
  props: ['card', 'index'],
  methods: {
    pop () {
      this.$dispatch('pop-card', this.$get('index'));
    }
  }
}
</script>
<style lang="less">
.card {
  display: inline-block;
  background: #eee;
  margin-right: 1rem;
  padding: 1rem;
  padding-top: .5rem;
  width: 10rem;
  height: 80%;

  h1 {
    font-size: 1rem;
  }

}

.draw-transition {
  position: relative;
  overflow: hidden;
  z-index: 100;
}

@keyframes draw-enter {
  from {
    opacity: 0;
    transform: scale(1.2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.draw-enter {
  animation: draw-enter .4s ease;
}

@keyframes draw-leave {
  from {
    margin-right: inherit;
    opacity: 1;
    transform: scale(1);
  }

  to {
    margin-right: -12rem;
    opacity: 0;
    transform: scale(0.8);
  }
}

.draw-leave {
  z-index: 30;
  animation: draw-leave .5s ease;

  &:last-child {
    animation: none;
  }
}
</style>
