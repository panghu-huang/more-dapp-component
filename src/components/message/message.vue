<template>
  <div class="message-container"
       :class="`message-container--${visible?'show':'hidden'}`">
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
  export default {
    name: "message",
    data() {
      return {
        visible: false,
        message: null,
        delay: 3000
      }
    },
    watch: {
      visible(visible) {
        if (visible) {
          this.startTimer()
        }
      },
      message(message) {
        this.startTimer()
      }
    },
    methods: {
      startTimer() {
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.delay)
      }
    }
  }
</script>

<style lang="stylus">
  height = 1.2rem
  .message-container {
    position fixed
    z-index 99
    left 0
    right 0
    width 100%
    height height
    text-align center
    line-height height
    background-color rgba(#37454F, 90%)
    transition top 0.2s ease-out

    .message {
      display block
      color #ffffff
      font-size 0.32rem
    }

    &.message-container--show {
      top 0
    }

    &.message-container--hidden {
      top - height
    }
  }
</style>