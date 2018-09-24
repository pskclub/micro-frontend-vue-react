import { render } from 'react-dom'
import App from './App'
import React from 'react'

window.customElements.define('react-comp', class ReactApp extends HTMLElement {
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
    console.log('ReactApp constructor', this)
  }

  connectedCallback () {
    this.sub = window.EventBus.on('test_event', (e) => {
      console.log('55event')
      if (e) {
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

    console.log('ReactApp connected')

    this.render()
  }

  render () {
    if (this.shadowRoot) {
      render(<App title={this.title}/>, this.shadowRoot)
    } else {
      const mountPoint = document.createElement('div')
      this.attachShadow({mode: 'open'}).appendChild(mountPoint)
      render(<App title={this.title}/>, mountPoint)
    }
  }

  disconnectedCallback () {
    this.sub()
    console.log('ReactApp disconnected')
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    console.log('ReactApp attributeChanged', attrName, oldVal, newVal)

    switch (attrName) {
      case 'title':
        this.render()
    }
  }
})

