<template functional>
  <h3 class="page-title">
    <slot/>
  </h3>
</template>

<script>
  export default {
    name: "page-title"
  }
</script>

<style lang="stylus">
  @import "~src/variables"
  .page-title {
    color title-dark-color
    font-size 0.4rem
    line-height 0.56rem
    margin 0 0 0.36rem 0
  }
</style>