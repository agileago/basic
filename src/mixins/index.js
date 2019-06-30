import Vue from 'vue'

const requireContext = require.context('./', true, /\.js$/)

let allFiles = requireContext.keys().filter(checkFile)

allFiles.forEach(path => {
  const lib = requireContext(path)
  Object.keys(lib).forEach(k => {
    let item = lib[k]
    Vue.mixin(item)
  })
})

function checkFile (path) {
  let level = path.split('/')
  if (
    level.length === 3 &&
    level[1] !== 'module' &&
    level[2] === 'index.js'
  ) {
    return true
  }
  return false
}
