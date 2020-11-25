import Rails from '@rails/ujs'
Rails.start()

import app from './app'
import * as utils from './utils'
window.$matildaCore = { app, utils }

import FormController from './controllers/FormController'
import FlashController from './controllers/FlashController'
import HeaderController from './controllers/HeaderController'
import LinkController from './controllers/LinkController'
import ModalController from './controllers/ModalController'
import TippyController from './controllers/TippyController'
import InputSelectController from './controllers/InputSelectController'

app.register('form', FormController)
app.register('flash', FlashController)
app.register('header', HeaderController)
app.register('link', LinkController)
app.register('modal', ModalController)
app.register('tippy', TippyController)
app.register('input-select', InputSelectController)
