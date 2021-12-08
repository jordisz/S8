<template>
    <div class="container">
        <h2 class="name">{{starshipInfo.name}}</h2>
        <img :src="`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`" @error="handleMissingImage" alt="">
        <div class="lists">
            <ul>
                <li><span>Model:</span> &thinsp; {{starshipInfo.model}}</li>
                <li><span>Starship Class:</span> &thinsp; {{starshipInfo.starship_class}}</li>
                <li><span>Manufacturer:</span> &thinsp; {{starshipInfo.manufacturer}}</li>
                <li><span>Cost:</span> &thinsp; {{starshipInfo.cost_in_credits}} credits</li>
            </ul>
            <ul>
                <li><span>Crew:</span> &thinsp; {{starshipInfo.crew}}</li>
                <li><span>Passenger Capacity:</span> &thinsp; {{starshipInfo.passengers}}</li>
                <li><span>Cargo Capacity:</span> &thinsp; {{starshipInfo.cargo_capacity}} tons</li>
                <li><span>Consumables:</span> &thinsp; {{starshipInfo.consumables}}</li>
            </ul>
            <ul>
                <li><span>Length:</span> &thinsp; {{starshipInfo.length}} meters</li>
                <li><span>Maximum Atmosphering Speed:</span> &thinsp; {{starshipInfo.max_atmosphering_speed}} km/h</li>
                <li><span>Hyperdrive Rating:</span> &thinsp; {{starshipInfo.hyperdrive_rating}}</li>
                <li><span>Maximum Speed In Realspace:</span> &thinsp; {{starshipInfo.MGLT}} MGLT</li>
            </ul>
        </div>
    </div>
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
            routeID: null,
            id: this.$route.params.id
        }
    },
    computed: {
        starshipInfo() {
            return this.$store.getters.selectedStarshipInfo
        }
    },
    methods: {
        handleMissingImage(e) {
            e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
        }
    },
    mounted() {
        this.routeID = this.$route.params.id;
        this.$store.dispatch('getSelectedStarship', this.routeID );
    }
}
</script>

<style scoped>
.name {
    margin: 0;
    padding: 20px;
    text-transform: uppercase;
    color: #ddd;
}

img {
    border-bottom: 0.125rem solid #3273c5;
}

.lists {
    max-width: 900px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2em;
}

ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    text-transform: uppercase;
    text-align: left;
    font-size: .9rem;
}

ul:first-of-type {
    grid-column: 1 / 3;
    text-align: center;
    font-size: 1rem;
}

li span {
    color: #ddd;
}

</style>