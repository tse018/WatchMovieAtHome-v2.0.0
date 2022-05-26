<template>
   <section class="cart-container">
      <h1 class="cart-container__title">
         Cart
      </h1>
   </section>
</template>

<script>
import sanityMixin from '../mixins/sanityMixin.js';

export default {
   mixins: [sanityMixin],

   computed: {
      cart() {
         return this.$store.getters.getCart;
      },

      
   }

}
</script>

<style>

</style>