export default {
   state() {
      return {
         cart: [],
         localStoreName: 'Cart-Storage' 
      }
   },
   
   mutations: {
      add(state, movie) {
         const checkIfMovieExist = state.cart.findIndex(item => { 
            return item.product.title === movie.title;
         });
         if(checkIfMovieExist >= 0) {
            
            state.cart[checkIfMovieExist].quantity += 1;
         } else {
            state.cart.push({quantity: 1, product: movie });
         }
      },

      remove(state, movie) {
         state.cart.splice(movie, 1)
      },

      increase(state, movie) {
         if(state.cart[movie]) {
            state.cart[movie].quantity += 1;
         }
      },
      
      decrease(state, movie)  {
         if (state.cart[movie] && state.cart[movie].quantity > 1) {
            state.cart[movie].quantity -= 1;
         }
      },

      setProducts(state, cart) {
         state.cart = cart;
      },

      emptyCart(state) {
         state.cart = [];
      }
   },

   actions: {
      /* Cart */
      addToCart({commit, dispatch}, movie) {
         commit('add', movie);
         dispatch('setToLocalStorage');
      },

      removeFromCart({commit, dispatch }, movie) {
         commit('remove', movie);
         dispatch('setToLocalStorage');
      },

      decreaseQuantity({ commit, dispatch }, index) {
         commit('decrease', index);
         dispatch('setToLocalStorage');
      },

      increaseQuantity({ commit, dispatch }, index) {
         commit('increase', index);
         dispatch('setToLocalStorage');
      },

      /* Local Storage */
      setToLocalStorage({state}) {
         window.localStorage.setItem(state.localStoreName, JSON.stringify(state.cart));
      },

      getFromLocalStorage({ state, commit }) {
         const localCartState = window.localStorage.getItem(state.localStoreName);
         const localCartStateObject = JSON.parse(localCartState);

         commit('setProducts', localCartStateObject);
      },

      removeFromLocalStorage({state}) {
         window.localStorage.removeItem(state.localStorageName);
      },

      clearLocalStorage() {
         window.localStorage.clear();
      }
   },

   getters: {
      getCart(state) {
         return state.cart;
      },

      getCartItems(state) {
         return state.cart.reduce(function(count, item) {
            return count + (item.quantity)
         }, 0);
      },

      getTotalItems(state) {
         return state.cart.reduce(function(total, item) {
            return total + (item.product.price * item.quantity)
         }, 0);
      }
      
   }
}