import { createStore } from 'vuex'

export default createStore({
  state: {
    starships: [],
  },
  getters :{
    starshipList: (state) => {
      return state.starships;
    },
    starshipByName: (state) => (name) => {
      return state.starships.find(starship => starship.name === name);
    }
  },
  mutations: {
    setStarships(state, starships) {
      state.starships = starships;
    }
  },
  actions: {
    getStarships({ commit }) {
      fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())  
      .then((data) => {
        commit('setStarships', data.results)
      })
    }
  }
})
