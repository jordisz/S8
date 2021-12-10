import { createStore } from 'vuex'

export default createStore({
  state: {
    starships: [],
    selectedStarship: [],
    nextPage: null,
    user: '', // ??
    password: '', // ??
    isLoggedIn: false
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
    setStarshipsNextPage(state, page) {
      state.nextPage = page;
    },
    setSelectedStarship(state, starship) {
      state.selectedStarship = starship;
    },
    addStarships(state, starships) {
      state.starships = [...state.starships, ...starships]
    },
    setUser(state, user) {
      state.user = user;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setLoggedIn(state, bool) {
      state.isLoggedIn = bool;
    }
  },
  actions: {
    getStarships({ commit }) {
      fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())  
      .then((data) => {
        commit('setStarships', data.results);
        commit('setStarshipsNextPage', data.next);
      });
    },
    getMoreStarships({ commit }) {
      if (this.state.nextPage) {
        fetch(this.state.nextPage)
        .then(response => response.json())
        .then((data) => {
          commit('addStarships', data.results);
          commit('setStarshipsNextPage', data.next);
        });
      }
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
