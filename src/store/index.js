// src/store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [
      { id: 1, text: "Learn Vue", completed: false },
      { id: 2, text: "Build a Vuex app", completed: false },
      { id: 3, text: "Implement filters", completed: true },
      // ... add more tasks as needed
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
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    toggleTask(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
        state.completedTasks = task;
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
    removeTask({ commit }, taskId) {
      commit("removeTask", taskId);
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
