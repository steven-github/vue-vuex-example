<template>
  <div>
    <h2>Add Task</h2>
    <form @submit.prevent="addTask">
      <input
        type="text"
        v-model="newTaskText"
        placeholder="Enter task text"
        required
      />
      <button type="submit">Add Task</button>
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
