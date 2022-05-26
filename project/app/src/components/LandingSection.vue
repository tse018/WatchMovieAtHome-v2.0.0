<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="hero-container">
         <article class="hero-container__video-container" v-for="movie in movies" :key="movie.title">
            <h1 class="hero-container__header">
               {{ movie.title }}
            </h1>
            <iframe class="hero-container__video-player" type="text/html" :src="`https://www.youtube.com/embed/${movie.trailerUrl.substring(32)}?playlist=${movie.trailerUrl.substring(32)}&loop=1&autoplay=1&mute=1&controls=0&disablekb=1&rel=0`" :title="movie.title" />
         </article>
      </section>
   </div>
</template>

<script>
import query from "../groq/trailers.groq?raw";
import sanityMixin from "../mixins/sanityMixin.js";

export default {
   mixins: [sanityMixin],

   async created() {
      await this.sanityFetchYoutubeVideoes(query);
   },

   computed: {
      movies() {
         return this.$store.getters.getYouTubeVidoes;
      },
   },
};
</script>

<style scoped>
@media screen and (max-width: 1200px) {
   .hero-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
   }
}

@media screen and (min-width: 1201px) {
   .hero-container {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(12, 1fr);
      overflow: hidden;
   }

   .hero-container__video-container {
      grid-column: span 12;
      grid-row: span 6;
      height: 100vh;
      width: 100vw;
   }

   .hero-container__video-container:nth-child(2) {
      grid-column: span 6;
      width: 50vw;
      height: 100vh;
      padding: 20px;
   }

   .hero-container__video-container:nth-child(3) {
      grid-column: span 6;
      grid-row: span 2;
      width: 50vw;
      height: 50vh;
      padding: 20px;
      margin-top: -2px;
   }

   .hero-container__video-container:nth-child(4) {
      width: 50vw;
      height: 50vh;
      grid-column: span 5;
      grid-row: span 3;
      padding: 20px;
      margin-top: -20px;
   }

   .hero-container__video-player {
      pointer-events: none;
      width: 100%;
      height: 100%;
   }

   .hero-container__header {
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      color: white;
   }
}
</style>
