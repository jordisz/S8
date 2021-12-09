<template>
  <div class="container">
    <h1>Star Wars Starship Directory</h1>
    <img src="../assets/home.jpg" alt="">
    <div class="info-text">
      <p>Welcome to the Star Wars Starship Directory. <br/> Once you're logged in, here you will find information about the characteristics
        of the starships, including its pilots and the films of the saga where they appear.
      </p>
    </div>
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

</style>
