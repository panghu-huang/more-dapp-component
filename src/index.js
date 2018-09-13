import * as components from './components'

const install = Vue => {
  Object.keys(components).forEach(key => {
    const component = components[key]
    if ('function' === typeof component) {
      component(Vue)
    } else {
      Vue.component(key, component)
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install