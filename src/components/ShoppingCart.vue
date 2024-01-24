<template>
  <div
    class="max-w-md w-full mx-auto mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      Shopping Cart
    </h5>

    <ul class="max-w-md space-y-1 text-gray-500">
      <li
        v-for="item in cart"
        :key="item.id"
        class="flex flex-row gap-2 items-center"
      >
        <span>
          <b>{{ item.name }}</b> - ${{ item.price }} - Quantity:
          {{ item.quantity }}</span
        >
        <button
          @click="increaseQuantity(item.id)"
          class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          +
        </button>
        <button
          @click="decreaseQuantity(item.id)"
          class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          -
        </button>
        <button
          @click="removeFromCart(item.id)"
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Remove
        </button>
      </li>
    </ul>
    <p>Total: ${{ cartTotal }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    removeFromCart(cartItemId) {
      this.$store.dispatch("removeFromCart", cartItemId);
    },
    increaseQuantity(cartItemId) {
      this.$store.dispatch("increaseQuantity", cartItemId);
    },
    decreaseQuantity(cartItemId) {
      this.$store.dispatch("decreaseQuantity", cartItemId);
    },
  },
};
</script>
