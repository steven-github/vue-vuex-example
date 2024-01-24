<template>
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - ${{ item.price }} - Quantity: {{ item.quantity }}
        <button @click="increaseQuantity(item.id)">+</button>
        <button @click="decreaseQuantity(item.id)">-</button>
        <button @click="removeFromCart(item.id)">Remove</button>
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
