import Vue from 'vue'
import App from './App.vue'


window.customElements.define('input-comp', class ReactApp extends HTMLElement {
  static get observedAttributes () {
    return ['error-mode']
  }
  get errorMode () {
    return this.hasAttribute('error-mode')
  }

  set errorMode (val) {
    if (val) {
      this.setAttribute('error-mode', '')
    } else {
      this.removeAttribute('error-mode')
    }
  }

  produceError (e) {
    this.dispatchEvent(new CustomEvent('error', {detail: e}))
  }

  constructor () {
    super()
    window.console.log('input constructor', this)
  }

  connectedCallback () {
    try {
      if (this.errorMode) {
        throw new Error('Application failed at load')
      }
    } catch (e) {
      this.produceError(e)
      return
    }

    window.console.log('input connected')

    this.render()
  }

  render () {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ''
      const mountPoint = document.createElement('div')
      this.shadowRoot.appendChild(mountPoint)
      Vue.config.productionTip = false
      new Vue({
        render: h => h(App)
      }).$mount(mountPoint)
    } else {
      const mountPoint = document.createElement('div')
      this.attachShadow({mode: 'open'}).appendChild(mountPoint)
      Vue.config.productionTip = false

      new Vue({
        render: h => h(App)
      }).$mount(mountPoint)
    }
  }

  disconnectedCallback () {
    this.sub()
    window.console.log('input disconnected')
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    window.console.log('input attributeChanged', attrName, oldVal, newVal)
  }
})

