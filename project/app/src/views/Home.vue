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

               <button class="products-container__product-button" @click="add(product)">
                  Add to cart
               </button>
            </figure>
         </section>
      </div>
   </main>
</template>

<script>
import LandingSection from '../components/LandingSection.vue';

import query from '../groq/movies.groq?raw';

import sanityMixin from '../mixins/sanityMixin.js';
import seoMixin from '../mixins/seoMixin.js';

export default {
   mixins: [sanityMixin, seoMixin],

   components: {
      LandingSection,
   },

   async created() {
      await this.sanityFetchMovies(query);

      this.metaTags({
         title: 'Cinema At Home',
		});
   },

   computed: {
      products() {
         return this.$store.getters.getMovies;
      },
   },

   methods: {
      add(movie) {
         this.$store.dispatch("addToCart", movie)
      }
   }
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
      padding-bottom: 50px;
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

@media screen and (min-width: 601px) and (max-width: 1200px) {
   .products-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      min-height: 100%;
      margin-top: 30px;
      padding-bottom: 50px;
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
      padding-bottom: 50px;
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
