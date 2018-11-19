export const getParamByName = (name, url) => {
  let _url = url
  if (!_url) {
    _url = window.location.href
  }
  let _name = name.replace(/[\[\]]/g, '\\$&')

  let regex = new RegExp(`[?&]${_name}(=([^&#]*)|&|#|$)`)
  let results = regex.exec(_url)
  if (!results) {
    return null
  }
  if (!results[2]) {
    return ''
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
