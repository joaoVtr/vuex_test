import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      first_name: "João",
      second_name: "vitor",
      email: "joao@joao.com",
    },
    products: [
      {
        id: 1,
        name: "Bola",
        price: 100,
      },
      {
        id: 2,
        name: "Chuteira",
        price: 200,
      },
      {
        id: 3,
        name: "Meião",
        price: 300,
      },
    ],
    cart: [],
  },
  //Mutation é Sincrona
  mutations: {
    storeUser(state, data) {
      console.log("mutations: ", data, state);
      state.user = data;
    },

    addProduct(state, data) {
      state.cart.push(data);
    },

    removeProduct(state, id) {
      const idx = state.cart.findIndex((o) => o.id === id);
      state.cart.splice(idx, 1);
    },
  },
  getters: {
    total(state) {
      return state.cart.reduce((total, item) => (total += item.price), 0);
    },
  },
  //Assincrona
  actions: {
    storeUser({ commit }, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          commit("storeUser", data);
        }, 1000);
      });
    },
  },
});
