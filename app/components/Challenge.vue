<template>
  <div class="challenge" transition="defeat">
    <h1>{{ challenge.title }} ({{ index }})</h1>
    <p>{{ challenge.description }}</p>
  </div>
</template>
<script>
export default {
  props: ['challenge', 'index'],
}
</script>
<style lang="less">
.challenge {
  display: inline-block;
  background: #eee;
  margin-right: 1rem;
  padding: 1rem;
  padding-top: .5rem;
  width: 15rem;
  height: 80%;

  h1 {
    font-size: 1rem;
  }

}

.defeat-transition {
  position: relative;

}

@keyframes defeat-leave {
  0% {
    transform: scale(1);
    opacity: 1;
    margin-right: 1rem;
  }

  20% {
    transform: scale(1.2);
  }

  70% {
    transform: scale(0.1);
    opacity: 0;
    margin-right: 1rem;
  }

  100% {
    transform: scale(0);
    opacity: 0;
    margin-right: -17rem;
  }

}

.defeat-leave {
  animation: defeat-leave 2s ease-in-out;
}

@keyframes defeat-enter {
  0% {
    transform: scale(0);
  }

  70% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.defeat-enter {
  animation: defeat-enter 2s ease-in-out;
}
</style>
