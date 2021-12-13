<template>
  <div class="container">
    <h1>Star Wars Starship Directory</h1>
    <img src="../assets/home.jpg" alt="">
    <div class="info-text" v-if="!this.$store.state.isLoggedIn">
      <p>Welcome to the Star Wars Starship Directory. <br/> Once you're logged in, you will find information about the characteristics
        of the starships of Star Wars, including its pilots and the films of the saga where they appear.
      </p>
    </div>
    <div class="info-text" v-else><router-link to="/starships">View the Starship List</router-link></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>

<style scoped>
h1 {
  margin: 0;
  padding: 22px 0;
}
.info-text {
  width: 70vw;
  margin: 20px auto;
}
a {
  text-transform: uppercase;
}
a:hover {
  color: #ccc;
}
</style>
