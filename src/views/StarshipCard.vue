<template>
    <ul>
        <li v-for="(value, property, index) in starshipInfo" 
        :key="index">
            {{property}} : {{value}}
        </li>
    </ul>
</template>

<script>
import Navigation from '@/components/Navigation';
import PilotCard from '@/components/PilotCard';

export default {
    name: 'StarshipCard',
    components: {
        Navigation,
        PilotCard
    },
    data() {
        return {
            routeID: null
        }
    },
    computed: {
    starshipInfo() {
        return this.$store.getters.selectedStarshipInfo;
    }
    },
    mounted() {
        this.routeID = this.$route.params.id;
        this.$store.dispatch('getSelectedStarship', this.routeID );
    }
}
</script>

<style>

</style>