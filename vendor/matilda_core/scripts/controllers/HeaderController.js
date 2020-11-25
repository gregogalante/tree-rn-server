import { Controller } from 'stimulus'
import { getSreenSizes, enableScroll, disableScroll } from '../utils'

class HeaderController extends Controller {
  static targets = ['profileMenu', 'langMenu', 'toggleMenu']

  connect() {
    // set menu preference to close in case of mobile device
    if (getSreenSizes().width <= 768 && !document.body.classList.contains('is-menu-closed')) {
      document.body.classList.add('is-menu-closed')
      fetch(this.toggleMenuTarget.getAttribute('data-url') + `?value=0`, { method: 'POST' }).then(_response => {})
    }
  }

  /**
   * @function toggleProfile
   */
  toggleProfile() {
    this.profileMenuTarget.classList.toggle('is-active')
  }

  /**
   * @function toggleLang
   */
  toggleLang() {
    this.langMenuTarget.classList.toggle('is-active')
  }

  /**
   * @function toggleMenu
   */
  toggleMenu() {
    if (getSreenSizes().width > 768) {
      const preference = document.body.classList.contains('is-menu-closed') ? 1 : 0
      fetch(this.toggleMenuTarget.getAttribute('data-url') + `?value=${preference}`, { method: 'POST' }).then(_response => {})
    }

    if (document.body.classList.contains('is-menu-closed')) {
      document.body.classList.remove('is-menu-closed')

      if (getSreenSizes().width <= 768) { disableScroll() }
    } else {
      document.body.classList.add('is-menu-closed')

      if (getSreenSizes().width <= 768) { enableScroll() }
    }
  }
}

export default HeaderController
