<template>
    <div class="container">
        <h2 class="name">{{starshipName}}</h2>
        <img :src="`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`" @error="handleMissingImage" alt="">
        <div class="lists">
            <ul>
                <li><span>Model:</span> &thinsp; {{starshipModel}}</li>
                <li><span>Starship Class:</span> &thinsp; {{starshipClass}}</li>
                <li><span>Manufacturer:</span> &thinsp; {{manufacturer}}</li>
                <li><span>Cost:</span> &thinsp; {{cost}} credits</li>
            </ul>
            <ul>
                <li><span>Crew:</span> &thinsp; {{crew}}</li>
                <li><span>Passenger Capacity:</span> &thinsp; {{passengers}}</li>
                <li><span>Cargo Capacity:</span> &thinsp; {{cargoCapacity}} tons</li>
                <li><span>Consumables:</span> &thinsp; {{consumables}}</li>
            </ul>
            <ul>
                <li><span>Length:</span> &thinsp; {{starshipLength}} meters</li>
                <li><span>Maximum Atmosphering Speed:</span> &thinsp; {{maxSpeed}} km/h</li>
                <li><span>Hyperdrive Rating:</span> &thinsp; {{hyper}}</li>
                <li><span>Maximum Speed In Realspace:</span> &thinsp; {{mglt}} MGLT</li>
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
            routeID: null
        }
    },
    computed: {
        starshipName() {
            return this.$store.getters.selectedStarshipInfo.name;
        },
        starshipModel() {
            return this.$store.getters.selectedStarshipInfo.model;
        },
        starshipClass() {
            console.table(this.$store.getters.selectedStarshipInfo);
            return this.$store.getters.selectedStarshipInfo.starship_class;
        },
        manufacturer() {
            return this.$store.getters.selectedStarshipInfo.manufacturer;
        },
        crew() {
            return this.$store.getters.selectedStarshipInfo.crew;
        },
        passengers() {
            return this.$store.getters.selectedStarshipInfo.passengers;
        },
        cargoCapacity() {
            return this.$store.getters.selectedStarshipInfo.cargo_capacity;
        },
        consumables() {
            return this.$store.getters.selectedStarshipInfo.consumables;
        },
        starshipLength() {
            return this.$store.getters.selectedStarshipInfo.length;
        },
        maxSpeed() {
            return this.$store.getters.selectedStarshipInfo.max_atmosphering_speed;
        },
        hyper() {
            return this.$store.getters.selectedStarshipInfo.hyperdrive_rating;
        },
        mglt() {
            return this.$store.getters.selectedStarshipInfo.MGLT;
        },
        cost() {
            return this.$store.getters.selectedStarshipInfo.cost_in_credits;
        },
        id() {
            return this.$store.getters.selectedStarshipInfo.url.replace(/[^0-9]/g,'');
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
    text-transform: uppercase;
    color: #ddd;
}

img {
    border-bottom: 0.125rem solid #3273c5;
}

.lists {
    width: 70vw;
    margin: auto;
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