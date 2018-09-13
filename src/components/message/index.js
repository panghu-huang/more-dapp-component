import MessageEl from './message'

export default Vue => {
  const MessageContructor = Vue.extend(MessageEl)
  const instance = new MessageContructor()

  console.log(instance)
  document.body.appendChild(instance.$mount().$el)
  Vue.prototype.$message = message => {
    instance.message = message
    instance.visible = true
  }
}