<template>
   <section class="cart">
      <template v-if="cart.length === 0"> 
         Your cart is empty 
      </template>

      <template v-else>
         {{ totalSum }} and {{ cartCount }}
         <div class="cart__cart-container" v-for="(movie, index) in cart">
         <img class="cart__cart-image" :src="movie.product.image.asset.url" :alt="movie.product.title" />
         <span> {{ movie.quantity }} </span>

         <button class="cart__cart-decrease" @click="decrease(index, movie)">
            -
         </button>

         <button class="cart__cart-increase" @click="increase(index, movie)">
            +
         </button>

         <button @click="remove(movie)">
            Remove
         </button>
         </div>
      </template>
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

      cartCount() {
         return this.$store.getters.getCartItems;
      },

      totalSum() {
         return this.$store.getters.getTotalItems;
      }
   },

   methods: {
      decrease(movie, index) {
         this.$store.dispatch('decreaseQuantity', movie, index);
      },

      increase(movie, index) {
         this.$store.dispatch('increaseQuantity', movie, index);
      },

      remove(movie) {
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