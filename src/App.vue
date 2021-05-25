<template>
  <div id="app">
    <Header />
    <Students />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Students from "./components/Students.vue";
export default {
  name: 'App',
  components: {
    Header,
    Students
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
  margin-top: 60px;
}
</style>
