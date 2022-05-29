<template>
   <header class="header-container">
      <nav class="header-container__navigation">
         <RouterLink class="header-container__home-button" :to="{ name: 'home'}">
            Cinema At Home
         </RouterLink>

         <RouterLink class="header-container__cart-button" :to="{ name: 'cart' }">
            <span class="header-container__count">
               Cart: {{ itemCount }}
            </span>
         </RouterLink>
      </nav>
   </header>
</template>

<script>
export default {
   mounted() {
      this.$store.dispatch('getFromLocalStorage');
   },

   computed: {
      itemCount() {
         return this.$store.getters.getCartItems
      }
   }
}
</script>

<style>
.header-container {
   width: 100%;
   height: 80px;
   z-index: 100;
}

.header-container__navigation {
   display: flex;
   width: 100%;
   flex-direction: row;
   padding: 20px;
   justify-content: space-between;
}

.header-container__home-button {
   font-size: 30px;
   padding: 0 20px;
   text-decoration: none;
   color: black;
}

.header-container__cart-button {
   padding: 0 20px;
   text-decoration: none;
   color: black;
   font-size: 24px;
   font-style: italic;

}
</style>