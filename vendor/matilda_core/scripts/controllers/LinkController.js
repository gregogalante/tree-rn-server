import { Controller } from 'stimulus'

class LinkController extends Controller {

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
      
    }
  }

}

export default LinkController
