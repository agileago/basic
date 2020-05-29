export function parseQuery(string) {
  var parsed = {}
  string = string !== undefined ? string : window.location.search

  if (typeof string === 'string' && string.length > 0) {
    if (string[0] === '?') {
      string = string.substring(1)
    }
    string = string.split('&')

    for (var i = 0, length = string.length; i < length; i++) {
      var element = string[i]
      var eqPos = element.indexOf('=')
      var keyValue
      var elValue
      if (eqPos >= 0) {
        keyValue = element.substr(0, eqPos)
        elValue = element.substr(eqPos + 1)
      } else {
        keyValue = element
        elValue = ''
      }
      elValue = decodeURIComponent(elValue)

      if (parsed[keyValue] === undefined) {
        parsed[keyValue] = elValue
      } else {
        parsed[keyValue] = elValue
      }
    }
  }

  return parsed
}
export function stringfyQuery(obj) {
  var string = []
  if (typeof obj === 'object') {
    Object.keys(obj).forEach(function (key) {
      string.push([encodeURIComponent(key), encodeURIComponent(obj[key])].join('='))
    })
  }
  return string.join('&')
}
