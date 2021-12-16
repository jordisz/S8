<template>
    <div class="thumbnail"
        @mouseover="hover = true"
        @mouseleave="hover = false">
            <img class="thumb-photo" :src="`https://starwars-visualguide.com/assets/img/characters/${pilot.id}.jpg`">
            <div class="card" v-if="hover">
                <div class="wrapper">
                    <img class="card-photo" :src="`https://starwars-visualguide.com/assets/img/characters/${pilot.id}.jpg`">
                    <div>
                        <h3>{{pilot.name}}</h3>
                        <ul>
                            <li><span>Height:</span> &thinsp; {{pilot.height}} cm</li>
                            <li><span>Mass:</span> &thinsp; {{pilot.mass}} kg</li>
                            <li><span>Hair color:</span> &thinsp; {{pilot.hair_color}}</li>
                            <li><span>Eye color:</span> &thinsp; {{pilot.eye_color}}</li>
                            <li><span>Birth year:</span> &thinsp; {{pilot.birth_year}}</li>
                            <li><span>Gender:</span> &thinsp; {{pilot.gender}}</li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'PilotCard',
    data() {
        return {
            hover: false
        }
    },
    props: ['pilot']      
}
</script>

<style scoped>
.thumbnail {
    display: block;
    position: relative;
    margin: 0 3px;
}
.thumb-photo {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 3px;
}
.thumb-photo:hover {
    transform: scale(1.2);
    border-bottom: solid 1px rgb(233, 233, 116);
    transition: all .1s ease-in;
}
.card {
    position: absolute;
    top: -240px;
    height: 200px;
    width: 380px;
    border: 1px solid #484848;
    border-bottom: .125rem solid tomato;
    border-radius: 3px;
    background-color: #151515;
}
h3 {
    text-transform: uppercase;
}
.wrapper {
    display: flex;
    margin: 0 20px;
}
.card-photo {
    max-width: 110px;
    object-fit: contain;
    margin: 20px 20px 0 10px;
    border-radius: 3px;
    padding-bottom: 0;
;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    text-align: left;
    font-size: .9rem;
}
li span {
    color: #ddd;
}
</style>