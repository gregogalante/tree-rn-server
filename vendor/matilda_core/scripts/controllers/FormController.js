import { Controller } from 'stimulus'
import { each } from '../utils'

class FormController extends Controller {
  static targets = ['field', 'submit']

  connect () {
    this.fields = {}

    // map fields and add listeners in case of errors classes
    each(this.fieldTargets, (field) => {
      this.fields[field.getAttribute('name')] = field
      field.addEventListener('keyup', () => field.classList.remove('is-error'))
    })

    // add submit listener to disable submit button
    this.element.addEventListener('submit', (e) => {
      this.submitTarget.setAttribute('disabled', '')
      this.submitTarget.classList.add('is-loading')
    })

    // manage required inputs
    this.manageRequiredInputs()
  }

  manageRequiredInputs () {
    this.fieldTargets.forEach((target) => {
      if (!target.hasAttribute('required')) return

      const label = this.element.querySelector(`label[for="${target.id}"]`)
      if (label && label.innerText.charAt(label.innerText.length - 1) !== '*') label.innerHTML =  `${label.innerHTML} *`
    })
  }

  /**
   * @function validateResponse
   * @param {*} event 
   */
  validateResponse (event) {
    let [data, _status, _xhr] = event.detail

    if (data.result) {
      const redirect = this.data.get('redirect')
      const reload = this.data.get('reload')

      // manage redirect
      if (redirect) {
        window.location.replace(redirect)
        return
      }

      // manage reload
      if (reload) {
        location.reload()
        return
      }
    } else {
      const Flash = this.application.getControllerForElementAndIdentifier(
        document.getElementById('flash'), 'flash'
      )
      Flash.openMessage(data.errors[0].message, 'orange')

      each(data.errors, (error) => {
        if (!this.fields[error.code]) return
        this.fields[error.code].classList.add('is-error')
      })
    }

    this.submitTarget.removeAttribute('disabled')
    this.submitTarget.classList.remove('is-loading')
  }

}

export default FormController
