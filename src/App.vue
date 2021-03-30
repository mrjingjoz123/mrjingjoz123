<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    message () {
      return this.$store.state.message
    }
  },
  watch: {
    message (v) {
      this.makeToast()
    }
  },
  methods: {
    makeToast (append = false) {
      this.toastCount++
      this.$bvToast.toast(this.message.message, {
        title: 'BootstrapVue Toast',
        autoHideDelay: 5000,
        appendToast: append,
        variant: this.message.type
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
