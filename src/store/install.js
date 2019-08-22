export default function (Vue) {
  Vue.mixin({ beforeCreate: storeInit })
  /**
   * store init hook, injected into each instances init hooks list.
   */

  function storeInit () {
    const options = this.$options
    // store injection
    if (options.store) {
      this.$store = options.store
      if (!this.hasOwnProperty('$state')) {
        Object.defineProperty(this, '$state', {
          get () {
            return this.$store.state
          },
          enumerable: true
        })
      }
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
      if (!this.hasOwnProperty('$state')) {
        Object.defineProperty(this, '$state', {
          get () {
            return this.$store.state
          },
          enumerable: true
        })
      }
    }
  }
}
