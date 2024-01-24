<template>
  <div>
    <h2>Incomplete Tasks</h2>
    <ul>
      <li v-for="task in incompleteTasks" :key="task.id">
        <input
          type="checkbox"
          v-model="task.completed"
          @click="toggleTask(task.id)"
        />
        {{ task.text }}
      </li>
    </ul>
    <h2>Completed Tasks</h2>
    <ul>
      <li v-for="task in completedTasks" :key="task.id">
        <input
          type="checkbox"
          v-model="task.completed"
          @click="toggleTask(task.id)"
        />
        <del>{{ task.text }}</del>
        <button @click="removeTask(task.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    incompleteTasks() {
      return this.$store.getters.incompleteTasks;
    },
    completedTasks() {
      return this.$store.getters.completedTasks;
    },
  },
  methods: {
    toggleTask(taskId) {
      console.log("toggleTask", taskId);
      this.$store.dispatch("toggleTask", taskId);
    },
    removeTask(taskId) {
      this.$store.dispatch("removeTask", taskId);
    },
  },
};
</script>
