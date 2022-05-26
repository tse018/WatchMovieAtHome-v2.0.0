<template>
   <section class="cart">
      <h1 class="cart__title">
         Cart
      </h1>

      <div class="cart__cart-container" v-for="(item, index) in cart">
         <img class="cart__cart-image" :src="item.image.asset.url" :alt="item.title" />

         <button class="cart__cart-decrease" @click="decrease(item, index)">
            -
         </button>

         <button class="cart__cart-increase" @click="increase(index)">
            +
         </button>

         <button @click="removeFromCart(movie)">
            Remove
         </button>
      </div>
   </section>
</template>

<script>

export default {
   mounted() {
      this.$store.dispatch('getFromLocalStorage');
   },


   computed: {
      cart() {
         return this.$store.getters.getCart;
      },
   },

   methods: {
      decrease(movie, index) {
         this.$store.dispatch('decreaseQuantity', movie, index);
      },

      increase(index) {
         this.$store.dispatch('increaseQuantity', index);
      },

      removeFromCart(movie) {
         this.$store.dispatch('removeFromCart', movie);
      },

      emptyCart() {
         this.$store.dispatch('removeFromLocalStorage');

      }
   },
}
</script>

<style>
.cart__cart-image {
   width: 250px;
   height: 364px;
}
</style>