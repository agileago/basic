<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/about">关于</router-link>
      <button @click="getUser">mock用户</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import * as service from '@/service'
export default {
  methods: {
    async getUser() {
      const user = await service.getUser()
      console.log(user)
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
