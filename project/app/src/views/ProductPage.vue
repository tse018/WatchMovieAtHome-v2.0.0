<template>
   <div v-if="loading">Loading...</div>
   <section v-else>
      <div class="product-container">
         <figure class="product-container__product">
            <img class="product-container__product-image" :src="product.image.asset.url" :alt="product.title" />
         </figure>

         <section class="product-container__product-information">
            <p class="product-container__product-title">
               {{ product.title }}
            </p>

            <ul class="product-container__product-details">
               <li class="product-container__product-element">
                  {{ product.rating }}
               </li>

               <li class="product-container__product-element">
                  {{ product.length }}
               </li>

               <li class="product-container__product-element">
                  PG-{{ product.ageLimit }}
               </li>

               <li class="product-container__product--genres" v-for="(category, index) in product.genres" key="category.index">
                  {{ category.genre }}
               </li>
            </ul>

            <p class="product-container__product-description">
               {{ product.description }}
            </p>

            <p class="product-container__product-price">
               {{ product.price }}.-
            </p>

            <button class="product-container__product-button" @click="add(product)">
               Add {{ product.title }} to cart
            </button>
         </section>
      </div>
   </section>
</template>

<script>
import query from "../groq/movieSlugParameter.groq?raw";

import sanityMixin from "../mixins/sanityMixin.js";
import seoMixin from "../mixins/seoMixin.js";

export default {
   mixins: [sanityMixin, seoMixin],

   async created() {
      await this.sanityFecthParamsSlug(query, {
         slug: this.$route.params.movie_slug,
      });

      this.metaTags({
         title: this.$route.params.movie_slug,
      });
   },

   computed: {
      product() {
         return this.$store.getters.getMovies;
      },
   },

   watch: {
      $route() {
         this.metaTags({
            title: this.$route.params.movie_slug,
         });
      },
   },

   methods: {
      add(movie) {
         this.$store.dispatch("addToCart", movie);
      },
   },
};
</script>

<style>
@media screen and (max-width: 1200px) {
   .product-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100vw;
      min-height: 100vh;
   }

   .product-container__product {
      width: 100%;
      display: flex;
      justify-content: center;
   }

   .product-container__product-image {
      width: 250px;
      height: 364px;
   }

   .product-container__product-information {
      width: max-content;
   }

   .product-container__product-title {
      text-align: start;
      font-size: 30px;
      display: flex;
      justify-content: center;
      padding: 20px;
   }

   .product-container__product-details {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
   }

   .product-container__product-element {
      padding: 0 10px;
      border-left: 2px solid red;
      margin: 20px;
   }

   .product-container__product--genres {
      margin: 0 5px;
      padding: 0 5px;
      border-left: 2px solid red;
      margin: 20px;
   }

   .product-container__product-description {
      width: 40ch;
      padding: 20px;
      margin: auto;
   }

   .product-container__product-price {
      padding: 20px;
      display: flex;
      margin: 0 50px;
      font-size: 20px;
      font-style: italic;
      justify-content: start;
   }

   .product-container__product-button {
      width: 90%;
      padding: 20px;
      margin: 20px;
      font-size: 20px;
      background-color: greenyellow;
   }
}













@media screen and (min-width: 901px) {
   .product-container {
      padding-top: 10%;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      overflow: auto;
   }

   .product-container__product {
      width: 500px;
      display: flex;
      justify-content: end;
   }

   .product-container__product-image {
      width: 250px;
      height: 364px;
   }

   .product-container__product-information {
      width: max-content;
      margin: -5% 0 0 10%;
   }

   .product-container__product-title {
      text-align: center;
      font-size: 40px;
   }

   .product-container__product-details {
      display: flex;
      padding: 20px;
      margin: 0 20px;
   }

   .product-container__product-element {
      padding: 0 10px;
      border-left: 2px solid red;
      margin: 20px;
   }

   .product-container__product--genres {
      margin: 0 5px;
      padding: 0 5px;
      border-left: 2px solid red;
      margin: 20px;
   }

   .product-container__product-description {
      width: 60ch;
      padding: 20px;
      margin: 0 10%;
   }

   .product-container__product-price {
      padding: 20px;
      display: flex;
      margin: 0 10%;
      justify-content: start;
   }

   .product-container__product-button {
      width: 100%;
      padding: 20px;
      margin: 20px;
      font-size: 20px;
      background-color: greenyellow;
   }
}
</style>
