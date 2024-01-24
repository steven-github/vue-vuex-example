<template>
  <div
    class="max-w-md w-full mx-auto mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      Incomplete Tasks
    </h5>

    <p
      v-if="incompleteTasks.length > 0"
      class="mb-3 font-normal text-gray-700 dark:text-gray-400"
    >
      Checkmark to mark as complete
    </p>

    <p
      v-if="incompleteTasks.length == 0"
      class="mb-3 font-normal text-gray-700 dark:text-gray-400"
    >
      No pending tasks
    </p>

    <ul class="max-w-md space-y-1 text-gray-500">
      <li
        v-for="task in incompleteTasks"
        :key="task.id"
        class="flex flex-row gap-2 items-center"
      >
        <input
          type="checkbox"
          v-model="task.completed"
          @click="toggleTask(task.id)"
        />
        {{ task.text }}
      </li>
    </ul>
  </div>

  <div
    class="max-w-md w-full mx-auto mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      Completed Tasks
    </h5>

    <p
      v-if="completedTasks.length > 0"
      class="mb-3 font-normal text-gray-700 dark:text-gray-400"
    >
      Uncheckmark to mark back as incomplete
    </p>

    <p
      v-if="completedTasks.length == 0"
      class="mb-3 font-normal text-gray-700 dark:text-gray-400"
    >
      No tasks
    </p>

    <ul class="max-w-md space-y-1 text-gray-500">
      <li
        v-for="task in completedTasks"
        :key="task.id"
        class="flex flex-row gap-2 items-center"
      >
        <div class="flex flex-grow gap-2">
          <input
            type="checkbox"
            v-model="task.completed"
            @click="toggleTask(task.id)"
          />
          <del>{{ task.text }}</del>
        </div>
        <button
          @click="removeTask(task.id)"
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Remove
        </button>
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
