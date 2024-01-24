<template>
  <div class="container mx-auto">
    <div class="flex flex-col gap-4 justify-content-center align-items-center">
      <div class="flex flex-grow flex-col">
        <h1
          class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900"
        >
          TODO LIST USING
          <span class="text-blue-600 dark:text-blue-500">VUEX</span>
        </h1>
        <TaskForm />
        <TaskList />
      </div>

      <div class="flex flex-grow flex-col">
        <h1
          class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900"
        >
          SHOPPING CART USING
          <span class="text-blue-600 dark:text-blue-500">VUEX</span>
        </h1>
        <ProductList />
        <ShoppingCart />
      </div>
    </div>
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "App",
  components: {
    TaskForm,
    TaskList,
    ProductList,
    ShoppingCart,
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
