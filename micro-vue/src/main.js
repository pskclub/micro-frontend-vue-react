import Vue from 'vue'
import App from './App.vue'


window.customElements.define('vue-comp', class ReactApp extends HTMLElement {
  static get observedAttributes () {
    return ['error-mode', 'title']
  }

  getTitle () {
    return this.getAttribute('title')
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
    window.console.log('ReactApp constructor', this)
  }

  connectedCallback () {
    this.sub = window.EventBus.on('test_event', (e) => {
      window.console.log('55event',e)
      if (e) {
        this.shadowRoot.innerHTML = ''
        const mountPoint = document.createElement('div')
        this.shadowRoot.appendChild(mountPoint)
        Vue.config.productionTip = false

        new Vue({
          data: {
            message: e
          },
          render: h => h(App)
        }).$mount(mountPoint)
      }
    })
    try {
      if (this.errorMode) {
        throw new Error('Application failed at load')
      }
    } catch (e) {
      this.produceError(e)
      return
    }

    window.console.log('ReactApp connected')

    this.render()
  }

  render (msg = '4165465465') {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ''
      const mountPoint = document.createElement('div')
      this.shadowRoot.appendChild(mountPoint)
      Vue.config.productionTip = false
      window.console.log(111,msg)
      new Vue({
        data: {
          message: this.getTitle()
        },
        render: h => h(App)
      }).$mount(mountPoint)
    } else {
      const mountPoint = document.createElement('div')
      this.attachShadow({mode: 'open'}).appendChild(mountPoint)
      Vue.config.productionTip = false

      new Vue({
        data: {
          message: this.getTitle()
        },
        render: h => h(App)
      }).$mount(mountPoint)
    }
  }

  disconnectedCallback () {
    this.sub()
    window.console.log('ReactApp disconnected')
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    window.console.log('ReactApp attributeChanged', attrName, oldVal, newVal)

    switch (attrName) {
      case 'title':
        this.render()
    }
  }
})

