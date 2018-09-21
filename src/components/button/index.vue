<template>
  <button class="btn" :class="['btn-'+type,className]" @click="handleClick">
    <slot/>
  </button>
</template>

<script>
  export default {
    name: "more-button",
    props: {
      type: {
        type: String,
        default: 'default'
      },
      className:{
        type:String,
        default:''
      }
    },
    methods: {
      handleClick(ev) {
        this.$emit('click', ev)
      }
    }
  }
</script>

<style lang="stylus">
  @import "~src/variables"
  .btn {
    display inline-flex
    width 100%
    height 0.96rem
    justify-content: center
    align-items: center
    color main-color
    background-color #ffffff
    letter-spacing 0.02rem
    font-size 0.28rem
    border-radius 0.08rem
    border 0.02rem main-color solid
    outline none

    &.btn-primary {
      color #ffffff
      background-color main-color
    }

    &[disabled] {
      border-color #eeeeee
      background-color #EEEEEE
      color #B9BAC5
    }
  }
</style>