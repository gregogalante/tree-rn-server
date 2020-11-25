import { Controller } from 'stimulus'

/**
 * @calss InputSelectController
 * Gestisce gli input select e le loro eventuali varianti.
 * - Variante add-options: aggiungete attributo data-input-select-add-options inserendo come valore la cta di aggiunta valore.
 */
class InputSelectController extends Controller {

  connect() {
    // gestisco possibilità di aggiungere opzioni custom al select
    if (this.data.get('add-options')) {
      this.element.innerHTML = this.element.innerHTML + `<option value="###add-options###">${this.data.get('add-options')}</option>`

      this.element.addEventListener('change', (e) => {
        if (e.target.value === '###add-options###') {
          this.addOptions()
        }
      })
    }
  }

  /**
   * Esegue l'aggiunta di una nuova opzione al select chiedendo all'utente il valore da inserire.
   */
  addOptions () {
    const newOption = prompt(this.data.get('add-options') || "Insert the new option", '')
    if (newOption) {
      this.element.innerHTML = `<option value="${newOption}">${newOption}</option>` + this.element.innerHTML
      this.element.value = newOption
    } else {
      this.element.value = ''
    }
  }

}

export default InputSelectController
