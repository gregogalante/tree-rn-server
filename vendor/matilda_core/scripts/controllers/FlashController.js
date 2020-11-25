import { Controller } from 'stimulus'
import { createElement } from '../utils'

class FlashController extends Controller {
  static targets = ['message']

  connect() {
    // manage flash rendered from back-end
    this.messageTargets.forEach((message) => {
      setTimeout(() => message.classList.add('is-active'), 100)
      setTimeout(() => this.closeMessage(message), 10000)
    })
  }

  closeMessage(message) {
    if (!message) return

    message.classList.remove('is-active')
    setTimeout(() => {
      try { this.element.removeChild(message) } catch(e) {}
    }, 300)
  }

  openMessage(messageContent, type = 'primary') {
    const classes = `c-flash__message c-flash__message--${type}`
    const message = createElement('div', classes, messageContent)

    message.setAttribute('data-target', 'flash.message')
    this.element.appendChild(message)

    const close = createElement('span', 'c-flash__message-close', '')
    close.setAttribute('data-action', 'click->flash#close')
    message.appendChild(close)

    setTimeout(() => message.classList.add('is-active'), 100)
    setTimeout(() => this.closeMessage(message), 10000)
  }

  /**
   * @function close
   */
  close(e) { 
    this.closeMessage(e.currentTarget.parentNode)
  }

}

export default FlashController
