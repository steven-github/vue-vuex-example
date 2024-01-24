<template>
  <div
    class="max-w-md w-full mx-auto mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      Products
    </h5>
    <ul class="max-w-md space-y-1 text-gray-500">
      <li
        v-for="product in products"
        :key="product.id"
        class="flex flex-row gap-2 items-center"
      >
        {{ product.name }} - ${{ product.price }}
        <button
          @click="addToCart(product.id)"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addToCart(productId) {
      this.$store.dispatch("addToCart", productId);
    },
  },
};
</script>
