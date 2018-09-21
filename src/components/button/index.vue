<template>
  <button class="btn" :class="['btn-'+type,className]" @click="handleClick">
    <span v-if="loading" class="loading-wrapper">
      <loading-circle></loading-circle>
      <span class="loading-text">{{ loadingText }}</span>
    </span>
    <slot v-else/>
  </button>
</template>

<script>
  import LoadingCircle from '../loading-circle'

  export default {
    name: "more-button",
    props: {
      type: {
        type: String,
        default: 'default'
      },
      className: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: '加载中...'
      }
    },
    methods: {
      handleClick(ev) {
        const { loading } = this
        if (!loading) {
          this.$emit('click', ev)
        }
      }
    },
    components: {
      LoadingCircle
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

    .loading-wrapper {
      display: flex
      justify-content center
      align-items center
      .loading-text {
        margin-left 0.04rem
      }
    }
  }
</style>