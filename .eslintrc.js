module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-return-assign': 'off',
    'eqeqeq': 'off',
    'comma-dangle': 'off',
    'vue/no-unused-components': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 全局变量在这里设置
  globals: {
    Vue: true,
    Vuex: true,
    VueRouter: true,
    urlParam: true
  }
}
