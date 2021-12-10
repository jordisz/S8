<template>
  <div id="app">
    <div class="header">
      <div class="header-top">
        <div class="logo"><img src="./assets/logo.png" alt=""></div>
        <div class="login-links" v-if="!isLoggedIn">
          <router-link class="login-link" to="/Login">Log In</router-link>
          <router-link class="login-link" to="/Register">Sign Up</router-link>
        </div>
        <div class="login-links" v-if="isLoggedIn">
          <router-link class="login-link" to="/" @click="logOut">Log Out</router-link>
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
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
  methods: {
    logOut() {
      this.$store.commit('setLoggedIn', false);
    }
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

.login-link {
  text-transform: uppercase;
}

.login-link:hover {
  color: #ccc;
}

.container {
    min-height: calc(100vh - 180px);
    background-color: #151515;
    background-image: url(https://www.starwars.com/wp-content/themes/starwars-theme/library/images/bg-stars-left.jpg),
                      url(https://www.starwars.com/wp-content/themes/starwars-theme/library/images/bg-stars-right.jpg);
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

form {
  max-width: 520px;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: column;
}

.input-wrapper {
    width: 460px;
    margin: 0 auto;
}

.form-input {
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 38px;
  padding: 0 15px;
  line-height: 40px;
  outline: none;
  border: 1px solid #d8dee8;
  border-radius: 3px;
  margin-bottom: 20px;
  font-size: .85rem;
  letter-spacing: 0.8px;
  color: #333;
}

.form-input::placeholder {
  color: #bbb;
}

.form-input:active,
.form-input:focus {
  background-color: #484848;
  color: #edd700;
  border: 1px solid #edd700;
  transition: border-color .2s;
}

.form-button {
  display: block;
  width: 100%;
  padding: 0 15px;
  height: 38px;
  border: 1px solid #484848;
  border-radius: 3px;
  background-color: #484848;
  color: #f4f5f5;
  font-size: 1rem;
  letter-spacing: 0.8px;
}
</style>
