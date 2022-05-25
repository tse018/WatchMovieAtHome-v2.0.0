export default {
   state() {
      return {
         movies: [],
      };
   },

   mutations: {
      setMovies(state, movies) {
         state.movies = movies;
      },
   },

   actions: {
      addMovies({ commit }, movies) {
         commit('setMovies', movies);
      }
   },
   
   getters: {
      getMovies(state) {
         return state.movies;
      }
   }
}