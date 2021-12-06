<template>
  <div class="navigation">
    <router-link to="/">Home</router-link> |
    <router-link to="/starships">Starships</router-link>
  </div>
    
</template>

<script>
export default {
    name: 'Navigation',
    
}
</script>

<style scoped>
.navigation {
  height: 20vh;
}
</style>