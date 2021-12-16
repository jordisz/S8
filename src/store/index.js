import { createStore } from 'vuex'

export default createStore({
  state: {
    starships: [],
    selectedStarship: [],
    selectedPilots: [],
    pilotsData: [],
    nextPage: null,
    user: '',
    password: '',
    isLoggedIn: false,
    selectedStarshipPilots: null,
    isFetching: null
  },
  getters :{
    starshipList: (state) => {
      return state.starships;
    },
    selectedStarshipInfo: (state) => {
      return state.selectedStarship;
    },
    currentStarshipPilots: (state) => {
      return state.pilotsData;
    },
    showPilots: (state) => {
      if (state.selectedStarship.pilots != undefined)
        return (state.selectedStarship.pilots.length > 0);
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
    },
    setSelectedStarshipPilots(state, pilots) {
      let pilotNumbers = pilots.map(pilot => pilot.slice(-4).replace(/[^0-9]/g,''));
      state.selectedPilots = pilotNumbers;
    },
    setSelectedPilotsData(state, data) {
      state.pilotsData = [...state.pilotsData, data];
    },
    clearPilotsData(state) {
      state.pilotsData = [];
    },
    fetchingData(state, bool) {
      state.isFetching = bool;
    }
  },
  actions: {
    getStarships({ commit }) {
      fetch('https://swapi.py4e.com/api/starships/')
      .then(response => response.json())  
      .then((data) => {
        commit('setStarships', data.results);
        commit('setStarshipsNextPage', data.next);
      })
      .catch(error => {
        console.log(error);
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
    getSelectedStarship({ commit, dispatch }, id) {
      commit('fetchingData', true);
      fetch(`https://swapi.py4e.com/api/starships/${id}`)
      .then(response => response.json())  
      .then((data) => {
        commit('setSelectedStarship', data);
        commit('setSelectedStarshipPilots', data.pilots);
        dispatch('getSelectedPilots');
      });
    },
    getSelectedPilots({ commit }) {
      if (this.state.selectedPilots.length > 0) {
        commit('clearPilotsData');
        this.state.selectedPilots.forEach(pilot => {
          fetch(`https://swapi.py4e.com/api/people/${pilot}`)
          .then(response => response.json())
          .then((data) => {
            data.id = pilot;
            commit('setSelectedPilotsData', data);
          });
        });
      }
      commit('fetchingData', false);
    }
  }
})
