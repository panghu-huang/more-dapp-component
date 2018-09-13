import Vue from 'vue'
import App from './App'
import DAppComponents from './index'
import './global.styl'

Vue.use(DAppComponents)

new Vue({
  el: '.app-container',
  components: {
    App
  },
  template: '<App />'
})