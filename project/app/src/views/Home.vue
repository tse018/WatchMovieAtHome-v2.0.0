<template>
   <main>
      <LandingSection />

      <div v-if="loading"> Loading... </div>

      <div v-else>
         <section class="products-container">
            <figure class="products-container__product" v-for="product in products">
               <RouterLink class="products-container__product-link" :to="{ name: 'productPage', params: { movie_slug: product.slug.current },}">
                  <img class="products-container__product-image" :src="product.image.asset.url" :alt="product.title" />

                  <figcaption class="products-container__product-title">
                     {{ product.title }}
                  </figcaption>

                  <h2 class="products-container__product-price">
                     {{ product.price }} kr
                  </h2>
               </RouterLink>

               <button class="products-container__product-button">
                  Add to cart
               </button>
            </figure>
         </section>
      </div>
   </main>
</template>

<script>
import LandingSection from '../components/LandingSection.vue';

import query from "../groq/movies.groq?raw";
import sanityMixin from "../mixins/sanityMixin.js";

export default {
   mixins: [sanityMixin],

   components: {
      LandingSection,
   },

   async created() {
      await this.sanityFetchMovies(query);
   },

   computed: {
      products() {
         return this.$store.getters.getMovies;
      },
   },
}
</script>

<style>
@media screen and (max-width: 600px) {
   .products-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      min-height: 100%;
      margin-top: 30px;
   }

   .products-container__product {
      padding: 20px;
      min-height: 100px;
      text-align: center;
      border: 2px solid red;
   }

   .products-container__product-image {
      width: 250px;
      height: 364px;
   }

   .products-container__product-title {
      text-align: left;
      margin: 10px 0 0 10px;
      font-size: 20px;
   }

   .products-container__product-price {
      text-align: right;
      font-size: 20px;
   }

   .products-container__product-button {
      border: 2px solid greenyellow;
      width: 100%;
      padding: 10px;
      background-color: greenyellow;
      color: black;
   }
}

@media screen and (min-width: 1201px) {
   .products-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      min-height: 100%;
      margin-top: 30px;
   }

   .products-container__product {
      padding: 20px;
      min-height: 100px;
      text-align: center;
      border: 2px solid red;
   }

   .products-container__product-image {
      width: 250px;
      height: 364px;
   }

   .products-container__product-title {
      text-align: left;
      margin: 10px 0 0 10px;
      font-size: 20px;
   }

   .products-container__product-price {
      text-align: right;
      font-size: 20px;
   }

   .products-container__product-button {
      border: 2px solid greenyellow;
      width: 100%;
      padding: 10px;
      background-color: greenyellow;
      color: black;
   }
}
</style>
