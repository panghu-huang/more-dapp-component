import * as components from './components'
import './global.styl'

const calcHtmlFontSize = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const width = window.document.documentElement.clientWidth || window.screen.availWidth
    const dpr = window.devicePixelRatio || 1
    const fontSize = 100 * Math.min(width, 480) / 750 * dpr
    document.querySelector('html').setAttribute('style', 'font-size:' + fontSize.toFixed(2) + 'px')
    const viewport = document.querySelector('meta[name=viewport]')
    const scale = (1 / dpr).toFixed(2)
    viewport.setAttribute('content', 'width=' + dpr * width + ',initial-scale='
      + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no')
  })
}

const install = Vue => {
  calcHtmlFontSize()
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