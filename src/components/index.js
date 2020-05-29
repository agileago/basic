import Vue from 'vue'

const requireContext = require.context('./', true, /\.js$/)

const allFiles = requireContext.keys().filter(checkFile)

allFiles.forEach((path) => {
  const lib = requireContext(path)
  Object.keys(lib).forEach((k) => {
    const item = lib[k]
    Vue.component(item.name, item)
  })
})

function checkFile(path) {
  const level = path.split('/')
  if (level.length === 3 && level[1] !== 'module' && level[2] === 'index.js') {
    return true
  }
  return false
}
