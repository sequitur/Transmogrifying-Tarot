<template>
<div class="description">
  <p v-for="line in content">
    {{ line }}
  </p>
</div>
</template>
<script>
export default {
  props: ['content']
}
</script>
<style lang="less">
.description {
  float: right;
  height: 100%;
  width: 40%;
  background: #eef;
}
</style>
