import MessageEl from './message'

export default Vue => {
  const MessageContructor = Vue.extend(MessageEl)
  const instance = new MessageContructor()
  document.body.appendChild(instance.$mount().$el)
  Vue.prototype.$message = (message, delay = 3000) => {
    if (!message) {
      return
    }
    instance.message = message
    instance.visible = true
    instance.delay = delay
  }
}