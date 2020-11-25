/**
 * @function addAuthTokenParamToFetchBody
 * @param {*} body 
 */
export function addAuthTokenParamToFetchBody (body) {
  body[$authtokenname] = $authtoken
  return body
}

/**
 * @function each
 * @param {*} array 
 * @param {*} callback 
 * @param {*} scope 
 */
export function each(array, callback, scope) {
  for (let i = 0; i < array.length; i += 1) {
    callback.call(scope, array[i], i)
  }
}

/**
 * @function disableScroll
 */
export function disableScroll() {
  const x = window.scrollX
  const y = window.scrollY
  window.onscroll = () => window.scrollTo(x, y)
}

/**
 * @function enableScroll
 */
export function enableScroll() {
  window.onscroll = () => {}
}

/**
 * @function debounce
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 */
export function debounce(func, wait, immediate) {
  let timeout
  return function() {
    let context = this
    let args = arguments
    let later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

/**
 * @function getSreenSizes
 */
export function getSreenSizes() {
  const w = window
  const d = document
  const e = d.documentElement
  const g = d.getElementsByTagName('body')[0]
  return {
    width: w.innerWidth||e.clientWidth||g.clientWidth,
    height: w.innerHeight||e.clientHeight||g.clientHeight
  }
}

/**
 * @function createElement
 * @param {*} type 
 * @param {*} classes 
 * @param {*} content 
 */
export function createElement(type, classes = null, content = null) {
  const element = document.createElement(type)

  if (classes) {
    classes.split(' ').forEach((className) => {
      element.classList.add(className)
    })
  }

  if (content) {
    element.innerHTML = content
  }

  return element
}

/**
 * @function stringToColour
 * @param {*} str 
 */
export function stringToColour(str) {
  var hash = 0
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 2) - hash)
  }
  var colour = '#'
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF
    colour += ('00' + value.toString(16)).substr(-2)
  }
  return colour
}

/**
 * @function getSelectOptions
 * @param {*} select 
 */
export function getSelectOptions(select) {
  const options = select.querySelectorAll('option')
  const result = []

  options.forEach((option) => {
    const singleResult = {}

    singleResult.value = option.getAttribute('value')
    singleResult.label = option.innerText
    singleResult.customProperties = Object.assign({}, option.dataset)

    result.push(singleResult)
  })

  return result
}

/**
 * @function createEelementFromString
 * @param {*} string
 */
export function createEelementFromString(string) {
  const div = createElement('div')
  div.innerHTML = string

  return div.firstChild
}