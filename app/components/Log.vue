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
    height: 40%;
    background: #eee;
    overflow-y: scroll;
  }
</style>
