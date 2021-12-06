<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;500;800&display=swap');

#app {
  font-family: 'Libre Franklin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
