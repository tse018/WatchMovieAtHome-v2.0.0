export default {
   state() {
      return {
         cart: [],
         localStoreName: 'Movie-store' 
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

      increase(state, index) {
         if(state.cart[index]) {
            state.cart[index].quantity += 1;
         }
      },
      
      decrease(state, index)  {
         if (state.cart[index] && state.cart[index].quantity > 1) {
            state.cart[index].quantity -= 1;
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
         if(localStorage.getItem(state.localStoreName) && localStorage.getItem(state.localStoreName).length > 0) {
            const localCartState = window.localStorage.getItem(state.localStoreName);
            const localCartStateObject = JSON.parse(localCartState);

            commit('setProducts', localCartStateObject);
         }
      },

      removeFromLocalStorage({state}) {
         window.localStorage.remove(state.localStoreName);
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
         return state.cart.reduce((count, item) => {
            return count + (item.quantity)
         }, 0);
      },

      getTotalItems(state) {
         return state.cart.reduce((total, item) => {
            return total + (item.product.price * item.quantity)
         }, 0);
      }
      
   }
}