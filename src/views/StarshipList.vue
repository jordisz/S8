<template>
  <h2>Starship List</h2>
    <li
        v-for="(starship, index) in starshipList"
        :key="index"
        class = "list-item">
        <router-link
            :to="{name: 'StarshipCard', params: {id: (starship.url).replace(/[^0-9]/g,'')}}">
                <h6>{{starship.name}}</h6>
                <p>{{starship.model}}</p>
        </router-link>
    </li>
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
    mounted() {
        this.$store.dispatch('getStarships');
    }
}
</script>

<style scoped>
.list-item {
    width: 70vw;
    margin: 1.6em auto;
    display: flex;
    justify-content: center;
    list-style: none;
    border: 1px solid black;
}

.list-item a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
}

h6 {
    font-size: 1.2rem;
    margin: 1rem;
}
</style>