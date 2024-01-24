<template>
  <div id="app">
    <TaskForm />
    <TaskList />
    <!-- <hr />
    <ProductList />
    <ShoppingCart /> -->
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
// import ProductList from "./components/ProductList.vue";
// import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "App",
  components: {
    TaskForm,
    TaskList,
    // ProductList,
    // ShoppingCart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
