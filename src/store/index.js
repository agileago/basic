import Vue from 'vue'
import installStore from './install'

Vue.use(installStore)

// 不使用vuex的原因
// 有时在项目使用vuex导致控制全局状态过于繁琐
// 我们只需要的是全局状态而已加全局事件触发

// 全局状态总线以及全局事件总线
const store = new Vue({
  data () {
    return {
      state: {}
    }
  },
  methods: {

  }
})

export default store
