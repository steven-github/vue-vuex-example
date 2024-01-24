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
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const tasks = computed(() => store.state.tasks);
    const completedTasks = computed(() => store.getters.completedTasks);

    const toggleTask = (taskId) => {
      store.dispatch("toggleTask", taskId);
    };

    return {
      tasks,
      completedTasks,
      toggleTask,
    };
  },
};
</script>
