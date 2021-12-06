import { createStore } from 'vuex'

export default createStore({
  state: {
    starships: [],
    selectedStarship: []
  },
  getters :{
    starshipList: (state) => {
      return state.starships;
    },
    selectedStarshipInfo: (state) => {
      return state.selectedStarship;
    }
  },
  mutations: {
    setStarships(state, starships) {
      state.starships = starships;
    },
    setSelectedStarship(state, starship) {
      state.selectedStarship = starship;
    }
  },
  actions: {
    getStarships({ commit }) {
      fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())  
      .then((data) => {
        commit('setStarships', data.results);
      });
    },
    getSelectedStarship({ commit }, id) {
      fetch(`https://swapi.dev/api/starships/${id}`)
      .then(response => response.json())  
      .then((data) => {
        commit('setSelectedStarship', data);
      });
    }
  }
})
