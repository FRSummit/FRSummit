<template>
  <div id="app">
    <CommonLayout />
    <router-view/>
  </div>
</template>

<script>
import CommonLayout from './components/Navbar/Common_layout.vue'
export default {
  components: {
    CommonLayout
  },
  data() {
    return {
      viewsForCommonLayout: this.$store.state.commonLayoutIsPresent
    }
  },
  created() {
    console.log(this.viewsForCommonLayout);
  }
}
</script>

<style>
body {
  margin:
Common_layout 0;
}
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