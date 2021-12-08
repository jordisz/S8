<template>
  <div id="app">
    <div class="header">
      <div class="logo">Star Wars</div>
      <Navigation />
    </div>
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

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Libre Franklin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #0a0b0b;
  color: #999;
  font-size: 1em;
}

.header {
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  height: 134px;
  padding: 20px 0;
}

a {
  text-decoration: none;
}

a:visited {
  color: #999;
}
</style>
