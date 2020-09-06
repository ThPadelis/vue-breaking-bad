import Vue from "vue";
import Vuex from "vuex";
import { Axios } from "../services/api.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    isLoading: true,
  },
  mutations: {
    setCharacters: (state, payload) => {
      state.characters = payload;
    },
    setIsLoading: (state, payload) => {
      state.isLoading = payload;
    },
  },
  actions: {
    setCharacters: async (state) => {
      state.commit("setIsLoading", true);
      const { data } = await Axios.get("characters");
      state.commit("setCharacters", data);
      state.commit("setIsLoading", false);
    },
    setIsLoading: async (state, payload) => {
      state.commit("setIsLoading", payload);
    },
  },
  getters: {
    characters: (state) => state.characters,
    isLoading: (state) => state.isLoading,
  },
  modules: {},
});
