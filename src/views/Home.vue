<template>
  <div class="home">
    <Navigation />
    Home
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
