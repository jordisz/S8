<template>
  <div class="container">
      <h2>Select a Starship to open its description</h2>
        <ul>
            <li
                v-for="(starship, index) in starshipList"
                :key="index"
                :ref="index === starshipList.length -1 ? 'last' : undefined"
                class = "list-item">
                <router-link
                    :to="{name: 'StarshipCard', params: {id: (starship.url).replace(/[^0-9]/g,'')}}">
                        <h6>{{starship.name}}</h6>
                        <p>{{starship.model}}</p>
                </router-link>
            </li>
        </ul>
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
    methods: {
        async addObserver() {
            await this.$nextTick();
            const options = {
                root: document,
                rootMargin: '5px',
                threshold: 0
            }
            const callback = (entries) => {
                if (entries[0].isIntersecting) {
                    this.$store.dispatch('getMoreStarships');
                }
            };
            this.observer = new IntersectionObserver(callback, options);
            this.observer.observe(this.$refs.last);
        }
    },
    mounted() {
        this.$store.dispatch('getStarships');
        this.addObserver;
    },
    watch: {
        starshipList: {
            deep: true,
            handler() {
                this.addObserver();
            }
        }
    }
}
</script>

<style scoped>
ul {
    margin: 0;
    padding: 0;
}

.list-item {
    width: 70vw;
    margin: 1.6em auto;
    display: flex;
    justify-content: center;
    list-style: none;
    color: #b9b9b9;
    border-radius: 7px;
    font-weight: 300;
    text-transform: uppercase;
}

.list-item:hover {
    background-color: #434343;
}

.list-item a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: #b9b9b9;
}

h2 {
    display: inline-block;
    width: 100vw;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    line-height: 1rem;
    background-color: #0a0b0b;
    margin: 2px 0 0 0;
    padding: 12px 0;
}

h6 {
    font-size: 1.2rem;
    margin: 1rem;
    color: #ddd;
    font-weight: 300;
}
</style>