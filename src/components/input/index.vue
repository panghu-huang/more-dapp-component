<template>
  <div class="input-wrapper" v-bind="wrapperProps">
    <input type="text" :value="value" @input="handleInput" v-bind="inputProps">
    <span v-show="showAfter" class="fixed-after" :class="{'clear':withClear}" @click="clear">
    {{ afterText || 'X' }}
  </span>
  </div>
</template>

<script>
  export default {
    name: "more-input",
    props: {
      defaultValue: {
        type: String,
        default: null
      },
      afterText: {
        type: String,
        default: null
      },
      withClear: {
        type: Boolean,
        default: false
      },
      wrapperProps: {
        type: Object,
        default: () => ({})
      },
      inputProps: {
        type: Object,
        default: () => ({})
      },
      value: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        showAfter: false
      }
    },
    created() {
      const { withClear, value, afterText } = this
      this.showAfter = withClear ? !!value : !!afterText
    },
    methods: {
      clear() {
        if (this.withClear) {
          this.emit(null)
        }
      },
      emit(value) {
        this.$emit('input', value)
      },
      handleInput(ev) {
        const { value } = ev.target
        const { afterText, withClear, emit } = this
        if (!afterText && withClear) {
          this.showAfter = !!value
        }
        emit(value)
      }
    }
  }
</script>

<style lang="stylus">
  .input-wrapper {
    position relative
    width 100%
    input[type=text], input[type=password], input[type=number] {
      width 100%
      height 0.84rem
      border 0.02rem #EEEEEE solid
      border-radius 0.08rem
      transition all 0.2s
      color #37454F
      font-size 0.28rem
      padding 0 0.28rem
      outline none

      &:-webkit-autofill {
        background-color #fff !important
        box-shadow 10000px 10000px 10000px #fff inset !important
      }

      &:focus, &:active {
        border-color #5290F0
        box-shadow 0 0 8px 0 rgba(82, 144, 240, 0.29)
      }

      &::-webkit-input-placeholder {
        color #B9BAC5
        font-weight 300
        font-size 0.28rem
      }
    }
    span.fixed-after {
      position absolute
      top 50%
      right 0.28rem
      height 0.36rem
      margin-top -0.18rem
      text-align center
      line-height 0.36rem
      background-color white
      &.clear {
        color white
        border-radius 50%
        font-size 0.16rem
        width 0.36rem
        background-color #EEEEEE
      }
    }
  }
</style>