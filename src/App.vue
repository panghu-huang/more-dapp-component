<template>
  <page-container>
    <page-title>Fibos</page-title>
    <section-container>
      this is container
      <section-title>
        title
      </section-title>
      <more-input withClear v-model="message"/>
      <more-button @press="showMessage">button</more-button>
      <tip types="with-dot">
        this is tip
        <tip types="container highlight">highlight tip</tip>
      </tip>
      <p>{{ picked }}</p>
      <radio-group name="company" v-model="picked">
        <radio value="more">More</radio>
        <radio value="fibos">Fibos</radio>
      </radio-group>
      <form action="">
        <form-item label="Label">
          content
        </form-item>
      </form>
    </section-container>
  </page-container>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        message: null,
        picked: 'more'
      }
    },
    methods: {
      showMessage() {
        const { message } = this
        this.$message(message)
      }
    }
  }
</script>