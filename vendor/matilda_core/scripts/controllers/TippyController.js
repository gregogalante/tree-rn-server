import { Controller } from 'stimulus'
import tippy from 'tippy.js'

class TippyController extends Controller {

  connect() {
    tippy(this.element, {
      arrow: true,
      arrowType: 'round',
      animation: 'fade'
    })
  }

}

export default TippyController
