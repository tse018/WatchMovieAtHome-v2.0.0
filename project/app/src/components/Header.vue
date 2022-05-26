<template>
   <header class="header-container">
      <RouterLink class="header-container__home-button" :to="{ name: 'home'}">
         Cinema At Home
      </RouterLink>

      <RouterLink class="header-container__cart-button" :to="{ name: 'cart' }">
         Cart: {{ itemCount }}
      </RouterLink>
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
   position: sticky;
   width: 100%;
   height: 50px;
   margin-bottom: 20px;
   background-color: white;
   z-index: 100;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}

.header-container__home-button {
   padding: 20px;
}

.header-container__cart-button {
   padding: 20px;
}

</style>