// src/store/index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, text: "Learn Vue", completed: false },
      { id: 2, text: "Build a Vuex app", completed: false },
      { id: 3, text: "Implement filters", completed: false },
    ],
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
  },
  actions: {
    addTask({ commit }, text) {
      commit("addTask", text);
    },
    toggleTask({ commit }, taskId) {
      commit("toggleTask", taskId);
    },
  },
  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    incompleteTasks: (state) => state.tasks.filter((task) => !task.completed),
  },
});
