<template>
  <section class="section-container" :class="className">
    <slot/>
  </section>
</template>

<script>
  export default {
    name: "section-container",
    props:['className']
  }
</script>

<style lang="stylus">
  .section-container {
    padding 0.36rem 0.24rem
    line-height 0.4rem
    font-size 0.28rem
    background-color #ffffff
    border-radius 0.08rem
    margin-bottom 0.24rem
    max-height 1000rem
  }
</style>