import { createStore } from "vuex"; // Importa la función createStore de vuex

export default createStore({
  state: {
    counter: 0, // Estado inicial del contador
  },
  mutations: {
    increment(state) {
      state.counter++; // Incrementa el valor del contador en el estado
    },
    decrement(state) {
      state.counter--; // Decrementa el valor del contador en el estado
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment"); // Ejecuta la mutación increment
    },
    decrement({ commit }) {
      commit("decrement"); // Ejecuta la mutación decrement
    },
  },
  getters: {
    counter(state) {
      return state.counter; // Retorna el valor del contador desde el estado
    },
  },
});
