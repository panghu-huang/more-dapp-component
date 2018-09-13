<template>
  <div class="radio-group">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "radio-group",
    created() {
      console.log(this)
    }
  }
</script>