<template>
  <div id="app">
    <div class="header">
      <div class="header-top">
        <div class="logo"><img src="./assets/logo.png" alt=""></div>
        <div class="login-links" v-if="!this.$store.state.isLoggedIn">
          <router-link to="/Login">Log In</router-link>
          <router-link to="/Register">Sign Up</router-link>
        </div>
        <div class="login-links" v-if="this.$store.state.isLoggedIn">
          <!--(do it with computed) -->
          <router-link to="#" @click="this.$store.commit('setLoggedIn', false)">Log Out</router-link>
        </div>
      </div>
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

.header-top {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.logo {
  grid-column-start: 2;
  height: 134px;
}

.login-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.container {
    min-height: calc(100vh - 180px);
    background-color: #151515;
    background-image: url(https://www.starwars.com/wp-content/themes/starwars-theme/library/images/bg-stars-left.jpg),url(https://www.starwars.com/wp-content/themes/starwars-theme/library/images/bg-stars-right.jpg);
    background-repeat: repeat-y;
    background-position: left top,right top;
    background-attachment: fixed;
    background-size: auto,auto;
}

a {
  text-decoration: none;
}

a:visited {
  color: #999;
}
</style>
