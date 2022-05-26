export default {
   state() {
      return {
         cart: [],
         totalAmount: 0,
         localStorageName: 'Cart-Storage' 
      }
   },

   mutations: {
      addMovieToCart(state, movie) {
         let checkIfMovieExist = state.cart.findIndex(product => product.title === movie.title);

         if(checkIfMovieExist !== -1) {
            state.cart[checkIfMovieExist].quantity += 1;
         } else {
            const movieWithQuantity = {
               ...movie,
                  quantity: 1
            }
            state.cart.push(movieWithQuantity);
         }
      },

      removeMovieFromCart(state, movie) {
         state.cart.findIndex
      },

      increaseQuantity(state, index) {
         if(state.cart[index]) {
            state.cart[index].quantity += 1;
         }
      },

      decreaseQuantity(state, index)  {
         if (state.cart[index] && state.cart[index].quantity > 0) {
            state.cart[index].quantity -= 1;
         }
      },

      setMovies(state, movies) {
         state.cart = movies;
      },
   },

   actions: {
      addToCart({commit, dispatch}, movie) {
         commit('addMovieToCart', movie);
         dispatch('setToLocalStorage');
      },

      removeFromCart({commit, dispatch }, itemInCart) {
         commit('removeMovieFromCart', itemInCart);
         dispatch('setToLocalStorage');
      },

      setToLocalStorage({state}) {
         window.localStorage.setItem(state.localStorageName, JSON.stringify(state.cart));
      },
   }
}