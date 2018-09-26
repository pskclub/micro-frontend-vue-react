import { render } from 'react-dom'
import App from './App'
import React from 'react'

window.customElements.define('list-comp', class ReactApp extends HTMLElement {
  static get observedAttributes () {
    return ['error-mode', 'list']
  }

  getList () {
    return this.getAttribute('list')
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
    console.log('list constructor', this)
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

    console.log('list connected')
    this.render()
  }

  render () {
    if (this.shadowRoot) {
      render(<App list={this.getList()}/>, this.shadowRoot)
    } else {
      const mountPoint = document.createElement('div')
      this.attachShadow({mode: 'open'}).appendChild(mountPoint)
      render(<App list={this.getList()}/>, mountPoint)
    }
  }

  disconnectedCallback () {
    this.sub()
    console.log('list disconnected')
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    console.log('list attributeChanged', attrName, oldVal, newVal)
    switch (attrName) {
      case 'list':
        this.render()
    }
  }
})

