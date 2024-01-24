<template>
  <div>
    <h2>Add Task</h2>
    <form @submit.prevent="addTask">
      <input v-model="newTaskText" placeholder="Enter task text" required>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const newTaskText = ref('');

    const addTask = () => {
      if (newTaskText.value.trim() !== '') {
        store.dispatch('addTask', newTask
