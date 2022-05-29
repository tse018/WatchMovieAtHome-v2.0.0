<template>
   <section class="cart">
      <template v-if="cart.length <= 0">
         <h1 class="cart__counter">
            Your cart is empty
         </h1>
      </template>

      <template v-else>
         <div class="cart__summary">
            <p class="cart__total-sum">
               Total Sum: 
               <span class="cart__sum">
                  {{ totalSum }}
               </span>
            </p>

            <p class="cart__total-items">
               Total Items: 
               <span class="cart__total">
                  {{ cartCount }}
               </span>
            </p>
         </div>

         <div class="cart__container" v-for="(movie, index) in cart">
            <img class="cart__image" :src="movie.product.image.asset.url" :alt="movie.product.title" />

            <div class="cart__buttons-container">
               <button class="cart__increase-button" @click="increase(index, movie)" aria-label="increase product quantity">
                  +
               </button>

               <span class="cart__quantity">
                  {{ movie.quantity }}
               </span>

               <button class="cart__decrease-button" @click="decrease(index, movie)" aria-label="decrease product quantity">
                  -
               </button>

               <button class="cart__remove-button" @click="remove(movie)">
                  Remove
               </button>
            </div>
         </div>
      </template>
   </section>
</template>

<script>
import seoMixin from "../mixins/seoMixin.js";

export default {
   mixins: [seoMixin],

   mounted() {
      this.$store.dispatch("getFromLocalStorage");
   },

   created() {
      this.metaTags({
         title: "Cart",
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
         return this.$store.getters.getTotalItems;
      },
   },

   methods: {
      decrease(movie, index) {
         this.$store.dispatch("decreaseQuantity", movie, index);
      },

      increase(movie, index) {
         this.$store.dispatch("increaseQuantity", movie, index);
      },

      remove(movie) {
         this.$store.dispatch("removeFromCart", movie);
      },

      emptyCart() {
         this.$store.dispatch("removeFromLocalStorage");
      },
   },
};
</script>

<style>
.cart {
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 95vw;
   min-height: 50vh;
}

.cart__counter {
   display: flex;
   width: 100%;
   justify-content: center;
   font-size: 40px;
}

.cart__summary {
   width: 100vw;
   display: flex;
   flex-direction: column;
}

.cart__total-sum {
   display: flex;
   justify-content: center;
   font-size: 30px;
}

.cart__sum {
   font-style: italic;
   padding: 0 20px;
}

.cart__total-items {
   display: flex;
   justify-content: center;
   font-size: 30px;
}

.cart__total {
   font-style: italic;
   padding: 0 20px;
}


.cart__container {
   width: 100vw;
   padding: 20px;
   display: flex;
   flex-direction: row;
   justify-content: center;
}

.cart__image {
   width: 250px;
   height: 364px;
}

.cart__buttons-container {
   border: 2px solid yellowgreen;
   display: flex;
   flex-direction: column;
}

.cart__increase-button {
   font-size: 40px;
   padding: 20px;
}

.cart__quantity {
   margin: auto;
   font-size: 50px;
   padding: 20px;
}

.cart__decrease-button {
   padding: 20px;
   font-size: 50px;
}

.cart__remove-button {
   color: red;
   font-size: 40px;
   padding: 0 20px;
}
</style>
