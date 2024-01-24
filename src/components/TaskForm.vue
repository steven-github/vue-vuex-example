<template>
  <div
    class="max-w-md w-full mx-auto mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      Add task
    </h5>

    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Please use the input below to add a new task.
    </p>
    <form
      class="max-w-sm mx-auto text-left flex flex-row gap-4"
      @submit.prevent="addTask"
    >
      <input
        type="text"
        id="task"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="newTaskText"
        placeholder="Enter task text"
        required
      />

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskText: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTaskText.trim() !== "") {
        this.$store.dispatch("addTask", this.newTaskText);
        this.newTaskText = "";
      }
    },
  },
};
</script>
