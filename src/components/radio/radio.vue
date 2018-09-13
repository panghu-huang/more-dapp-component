<template>
  <label class="radio">
    <input type="radio" v-model="checked" :value="value">
    <span class="radio__inner">
      <span class="radio__check"/>
    </span>
    <span>
      <slot/>
    </span>
  </label>
</template>

<script>
  export default {
    name: "radio",
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      value: {
        required: true,
        type: String
      }
    },
    data() {
      return {
        checked: 'checked'
      }
    },
    created() {
      console.log(this.checked, this.value)
    },
    methods: {
      check() {

      }
    }
  }
</script>

<style lang="stylus">
  @import "~src/variables"

  label.radio {
    position relative
    display inline-flex
    align-items center

    input[type=radio] {
      position absolute
      z-index 1
      visibility hidden
      width 0.01rem
      height 0.01rem

      &[checked] + span.radio__inner {
        background-color main-color

        span.radio__check {
          transform rotate(-45deg)
          transform-origin 40% 40%
          position absolute
          z-index 4
          background-color #ffffff
          width 0.2rem
          height 0.1rem
          left 50%
          top 50%
          margin-left -0.1rem
          margin-top -0.05rem

          &:after {
            content ''
            position absolute
            height 0.06rem
            top -0.01rem
            left 0.05rem
            right -0.01rem
            background-color main-color
          }
        }
      }
    }

    span.radio__inner {
      display inline-block
      position relative
      z-index 3
      width 0.36rem
      height 0.36rem
      border-radius 50%
      top 0
      left 0
      right 0
      bottom 0
      border 0.02rem solid main-color
      transition all 0.2s
      margin-right 0.12rem
    }
  }
</style>