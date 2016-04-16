<template>
<div class="log">
  <p v-for="message in messages">
    {{message.content}}
  </p>
</div>
</template>
<script>
export default {
  props: ['messages']
}
</script>
<style lang="less">
.log {
  float: left;
  height: 100%;
  width: calc(60% - 3rem);
  background: #eee;
  overflow-y: scroll;
  padding: 0 1rem;
}
</style>
