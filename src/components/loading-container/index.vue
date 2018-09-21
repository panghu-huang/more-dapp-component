<template>
  <div class="loading-container" :class="{'full-screen':fullScreen}">
    <div class="loading-layer">
      <LoadingCircle :radius="circleRadius"/>
      <p class="loading-text">{{ loadingText }}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import LoadingCircle from '../loading-circle'

  export default {
    name: "LoadingContainer",
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: '加载中...'
      },
      fullScreen: {
        type: Boolean,
        default: false
      },
      circleRadius: {
        type: Number,
        default: 25
      }
    },
    components: {
      LoadingCircle
    }
  }
</script>

<style lang="stylus">
  .loading-container {
    position relative
    .loading-layer {
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      display flex
      flex-direction column
      justify-content center
      align-items center
      background-color rgba(0, 0, 0, 0.2)
      .loading-text {
        color #ffffff
        margin-top 0.08rem
      }
    }
    &.full-screen {
      position fixed
      top 0
      bottom 0
      left 0
      right 0
    }
  }
</style>