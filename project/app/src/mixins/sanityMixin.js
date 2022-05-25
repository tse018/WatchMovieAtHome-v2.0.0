import sanity from '../sanity.js';

export default {
   data() {
      return {
         loading: true,
         result: null,
      };
   },

   methods: {
      async sanityFetchYoutubeVideoes(query) {
         this.result = await sanity.fetch(query);
         this.$store.dispatch('addYouTubeVideos', this.result);

         this.loading = false;
      },

      async sanityFetchMovies(query) {
         this.result = await sanity.fetch(query);
         this.$store.dispatch('addMovies', this.result);

         this.loading = false;
      }
   }
}