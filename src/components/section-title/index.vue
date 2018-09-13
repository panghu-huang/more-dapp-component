<template functional>
  <h6 class="section-title">
    <slot/>
  </h6>
</template>

<script>
  export default {
    name: "section-title"
  }
</script>

<style lang="stylus">
  @import "~src/variables"
  .section-title {
    position relative
    color #B9BAC5
    font-size 0.28rem
    font-weight 400
    line-height 0.4rem
    padding-left 0.16rem
    margin 0
    margin-bottom 0.24rem

    &:before {
      content ''
      position absolute
      top 50%
      left 0
      margin-top -0.14rem
      width 0.04rem
      height 0.28rem
      border-radius 0.02rem
      background-color main-color
    }
  }

</style>