<template>
   <div v-if="loading">Loading...</div>

   <div v-else>
      <section class="products-container">
         <figure class="products-container__product" v-for="product in products">
            <RouterLink class="products-container__product-link" :to="{name: 'productPage', params: { movie_slug: product.slug.current } }">
               <img class="products-container__product-image" :src="product.image.asset.url" :alt="product.title" />

               <figcaption class="products-container__product-title">
                  {{ product.title }}
               </figcaption>

               <h2 class="products-container__product-price">
                  {{ product.price }} kr
               </h2>
            </RouterLink>

            <button class="product-container__product-button">
               Add to cart
            </button>
         </figure>
      </section>
   </div>
</template>

<script>
import query from '../groq/movies.groq?raw';
import sanityMixin from '../mixins/sanityMixin.js';

export default {
   mixins: [sanityMixin],

   async created() {
      await this.sanityFetchMovies(query);
   },

   computed: {
      products() {
         return this.$store.getters.getMovies
      }
   }
}
</script>

<style scoped>
</style>