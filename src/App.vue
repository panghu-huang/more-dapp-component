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
      <radio-group>
        <radio value="name">Name</radio>
        <radio value="value">Value</radio>
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
        message: 'null'
      }
    },
    beforeCreate() {
      const width = window.document.documentElement.clientWidth || window.screen.availWidth
      const dpr = window.devicePixelRatio || 1
      const fontSize = 100 * Math.min(width, 480) / 750 * dpr
      document.querySelector('html').setAttribute('style', 'font-size:' + fontSize.toFixed(2) + 'px')
      const viewport = document.querySelector('meta[name=viewport]')
      const scale = (1 / dpr).toFixed(2)
      viewport.setAttribute('content', 'width=' + dpr * width + ',initial-scale='
        + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no')
    },
    methods: {
      showMessage() {
        const { message } = this
        this.$message(message)
      }
    }
  }
</script>