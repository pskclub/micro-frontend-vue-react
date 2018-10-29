import { render } from 'react-dom'
import App from './App'
import React from 'react'
import retargetEvents from 'react-shadow-dom-retarget-events'

window.customElements.define('search-comp', class ReactApp extends HTMLElement {
  static get observedAttributes () {
    return ['error-mode']
  }

  getSearch () {
    return window._state.search
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
    window.mobx.autorun(() => {
      this.render()
    })
    console.log('search constructor', this)
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

    console.log('search connected')

    this.render()
  }

  render () {
    if (this.shadowRoot) {
      render(<App search={this.getSearch()}/>, this.shadowRoot)
    } else {
      const mountPoint = document.createElement('div')
      this.attachShadow({mode: 'open'}).appendChild(mountPoint)
      render(<App search={this.getSearch()}/>, mountPoint)
      retargetEvents(this.shadowRoot)
    }
  }

  disconnectedCallback () {
    this.sub()
    console.log('search disconnected')
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    console.log('search attributeChanged', attrName, oldVal, newVal)
  }
})

