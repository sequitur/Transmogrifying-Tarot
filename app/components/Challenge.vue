<template>
  <div class="challenge">
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
  max-width: 15rem;
  width: 20%;
  height: 80%;

  h1 {
    font-size: 1rem;
  }

}
</style>
