// src/store/index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, text: "Learn Vue 3", completed: false },
      { id: 2, text: "Build a Vuex app", completed: false },
      { id: 3, text: "Implement filters", completed: false },
    ],
    products: [
      { id: 1, name: "Product A", price: 20 },
      { id: 2, name: "Product B", price: 30 },
      { id: 3, name: "Product C", price: 25 },
      // ... add more products as needed
    ],
    cart: [],
  },
  mutations: {
    addTask(state, text) {
      const newTask = {
        id: state.tasks.length + 1,
        text,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    addToCart(state, productId) {
      const productToAdd = state.products.find(
        (product) => product.id === productId
      );

      if (productToAdd) {
        state.cart.push({ ...productToAdd, quantity: 1 });
      }
    },
    removeFromCart(state, cartItemId) {
      state.cart = state.cart.filter((item) => item.id !== cartItemId);
    },
    increaseQuantity(state, cartItemId) {
      const cartItem = state.cart.find((item) => item.id === cartItemId);
      if (cartItem) {
        cartItem.quantity++;
      }
    },
    decreaseQuantity(state, cartItemId) {
      const cartItem = state.cart.find((item) => item.id === cartItemId);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
      }
    },
  },
  actions: {
    addTask({ commit }, text) {
      commit("addTask", text);
    },
    toggleTask({ commit }, taskId) {
      commit("toggleTask", taskId);
    },
    addToCart({ commit }, productId) {
      commit("addToCart", productId);
    },
    removeFromCart({ commit }, cartItemId) {
      commit("removeFromCart", cartItemId);
    },
    increaseQuantity({ commit }, cartItemId) {
      commit("increaseQuantity", cartItemId);
    },
    decreaseQuantity({ commit }, cartItemId) {
      commit("decreaseQuantity", cartItemId);
    },
  },
  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    incompleteTasks: (state) => state.tasks.filter((task) => !task.completed),
    cartTotal: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },
});
