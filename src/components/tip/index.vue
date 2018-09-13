<template>
  <span class="tip" :class="types">
    <slot/>
  </span>
</template>

<script>
  export default {
    name: "tip",
    props: {
      types: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="stylus">
  @import "~src/variables"

  .tip {
    font-size 0.2rem
    font-weight 500
    line-height 0.28rem
    color title-dark-color

    &.container {
      display: block
    }

    &.highlight {
      color main-color
    }

    &.warn {
      color tip-warn-color
    }

    &.with-dot {
      position relative
      padding-left 0.2rem

      &:before {
        position absolute
        content ''
        width 0.08rem
        height 0.08rem
        border-radius 50%
        background-color main-color
        top 0.08rem
        left 0
        margin-right 0.1rem
      }
    }
  }

</style>