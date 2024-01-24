<template>
  <div>
    <h2>Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input
          type="checkbox"
          v-model="task.completed"
          @change="toggleTask(task.id)"
        />
        {{ task.text }}
      </li>
    </ul>
    <h3>Completed Tasks</h3>
    <ul>
      <li v-for="task in completedTasks" :key="task.id">{{ task.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    completedTasks() {
      return this.$store.getters.completedTasks;
    },
  },
  methods: {
    toggleTask(taskId) {
      this.$store.dispatch("toggleTask", taskId);
    },
  },
};
</script>
