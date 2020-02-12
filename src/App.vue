<template>
  <div id="app">
    <servicos msg="O QUE FAZEMOS?"/>
  </div>
</template>

<script>
import servicos from './components/servicos.vue'

export default {
  name: 'App',
  components: {
    servicos
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
</style>
