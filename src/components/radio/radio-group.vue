<template>
  <div class="radio-group" :class="className">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "radio-group",
    props: {
      name: {
        type: String
      },
      value: {
        type: String
      },
      className: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        picked: null
      }
    },
    watch: {
      picked(value) {
        this.setCheckedAndEmit(value)
      },
      value(value) {
        this.setCheckedAndEmit(value)
      }
    },
    mounted() {
      const {
        $children: children,
        value,
        name
      } = this
      const default_name = `default_name_${Date.now()}`
      const child_field_name = name || default_name
      children.forEach(child => {
        child.setName(child_field_name)
        child.setChecked(value)
      })
    },
    methods: {
      setCheckedAndEmit(value) {
        this.setChildrenChecked(value)
        this.$emit('input', value)
      },
      setChildrenChecked(checked) {
        const {
          $children: children
        } = this
        children.forEach(child => {
          child.setChecked(checked)
        })
      }
    }
  }
</script>