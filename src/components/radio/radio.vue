<template>
  <label class="radio" :class="cls">
    <input type="radio" class="checked" v-model="checked" :name="name" :value="value" :disabled="disabled">
    <span class="radio__inner">
      <span class="radio__check"/>
    </span>
    <span class="radio__content">
      <slot/>
    </span>
  </label>
</template>

<script>
  export default {
    name: "radio",
    props: {
      value: {
        required: true,
        type: String
      },
      className: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      checked(value) {
        this.setParentPickValue(value)
      }
    },
    data() {
      return {
        name: null,
        checked: null
      }
    },
    computed: {
      cls() {
        const { disabled, checked, className, value } = this
        let cls = [className]
        if (disabled) {
          cls.push('radio--disabled')
        }
        if (checked === value) {
          cls.push('radio--checked')
        }
        return cls.join(' ')
      }
    },
    methods: {
      setParentPickValue(value) {
        const parent = this.$parent
        if (parent && parent.hasOwnProperty('picked')) {
          parent.picked = value
        }
      },
      setChecked(checked) {
        this.checked = checked
      },
      setName(name) {
        this.name = name
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

    &.radio--checked {
      input[type=radio] {

        & + span.radio__inner {
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
    }

    input[type=radio] {
      position absolute
      z-index 1
      visibility hidden
      width 0.01rem
      height 0.01rem
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

    _radio_disabled_color = #eeeeee
    &.radio--disabled {
      span.radio__content {
        color _radio_disabled_color
      }
      span.radio__inner {
        border 0.04rem solid _radio_disabled_color
      }
      input[type=radio] {
        & + span.radio__inner {
          span.radio__check {
            background-color #ffffff
            &:after {
              background-color _radio_disabled_color
            }
          }
        }
      }
      &.radio--checked {
        input[type=radio] {
          & + span.radio__inner {
            background-color _radio_disabled_color
          }
        }
      }
    }
  }
</style>