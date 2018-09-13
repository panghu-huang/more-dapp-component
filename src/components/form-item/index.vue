<template>
  <div class="form-item-wrapper">
    <span class="form-item-label">{{ label }}</span>
    <div class="form-item-content">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "form-item",
    props: {
      label: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="stylus">
  @import "~src/variables"

  form {
    .form-item-wrapper {
      display flex
      align-items center
      justify-content: flex-start
      font-size 0.28rem
      line-height 0.4rem
      margin-bottom 0.4rem

      .form-item-label {
        display inline
        color title-dark-color
        margin-right 0.24rem
        font-weight bold

        &:after {
          content ':'
          padding 0 0.04rem
        }
      }
      .form-item-content {

      }
    }
  }
</style>