import { Controller } from 'stimulus'
import { enableScroll, disableScroll } from '../utils'

class ModalController extends Controller {
  connect () {
    const activators = document.querySelectorAll(
      `.jss-modal-activator[href="#${this.element.id}"]`
    )

    // listen activators to open the modal
    activators.forEach((activator) => {
      activator.addEventListener('click', (e) => {
        e.preventDefault()
        this.open()
      })
    })
  }

  /**
   * @function open
   */
  open () {
    this.element.classList.add('is-active')
    disableScroll()
  } 

  /**
   * @function close
   */
  close () {
    this.element.classList.remove('is-active')
    enableScroll()
  }

}

export default ModalController
