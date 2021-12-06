<template>
  <div>Starship List</div>
  <div v-for="(starship, index) in starshipList" :key="index">
      {{starship.name}} | {{starship.model}}
  </div>
</template>

<script>
export default {
    name: 'StarshipList',
    components: {
    },
    computed: {
        starshipList() {
            return this.$store.getters.starshipList;
        }
    },
    created() {
        this.$store.dispatch('getStarships');
    }
}
</script>

<style>

</style>