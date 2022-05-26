<template>
   <section class="cart">
      <template v-if="cart.length <= 0"> 
         <h1>
            Your cart is empty 
         </h1>
      </template>

      <template v-else>
         <div class="cart__cart-container" v-for="(movie, index) in cart">
         <img class="cart__cart-image" :src="movie.product.image.asset.url" :alt="movie.product.title" />

         <button class="cart__cart-decrease" @click="decrease(index, movie)">
            -
         </button>

         <span class="cart__cart-quantity"> {{ movie.quantity }} </span>

         <button class="cart__cart-increase" @click="increase(index, movie)">
            +
         </button>

         <button class="cart__cart-remove" @click="remove(movie)">
            Remove
         </button>
         </div>
         <div>
            {{ totalSum }} and {{ cartCount }}
         </div>
      </template>
   </section>
</template>

<script>
import seoMixin from '../mixins/seoMixin.js';

export default {
   mixins: [seoMixin],

   mounted() {
      this.$store.dispatch('getFromLocalStorage');
   },

   created() {
      this.metaTags({
         title: 'Cart',
		});
   },

   computed: {
      cart() {
         return this.$store.getters.getCart;
      },

      cartCount() {
         return this.$store.getters.getCartItems;
      },

      totalSum() {
         return this.$store.getters.getTotalPrice;
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
.cart {
   display: grid;
   justify-content: center;
   gap: 20px;
   width: 50vw;
}

.cart__cart-container {
   padding: 20px;
   display: flex;
}

.cart__cart-image {
   width: 250px;
   height: 364px;
}

.cart__cart-decrease {
   width: 100px;
   font-size: 100px;
   padding: 20px;
}

.cart__cart-quantity {
   margin: auto;
   font-size: 50px;
   padding: 20px;
}

.cart__cart-increase {
   width: 100px;
   font-size: 60px;
   padding: 20px;
}

.cart__cart-remove {
   font-size: 50px;
}

</style>