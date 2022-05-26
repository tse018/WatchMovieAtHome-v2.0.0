export default {
   state() {
      return {
         cart: [],
         totalAmount: 0,
         localStoreName: 'Cart-Storage' 
      }
   },

   mutations: {
      addMovieToCart(state, movie) {
         state.cart.push(movie)
      },

      removeMovieFromCart(state, itemInCart) {
         state.cart.splice(itemInCart, 1)
      },

      increase(state, index) {
         if(state.cart[index]) {
            state.cart[index].quantity += 1;
         }
      },
      
      decrease(state, index)  {
         if (state.cart[index] && state.cart[index].quantity > 0) {
            state.cart[index].quantity -= 1;
         }

         if(state.cart[index] && state.cart[index].quantity === 0) {
            state.cart[index].splice(index, 1)
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
      addToCart({commit, dispatch}, movie) {
         commit('addMovieToCart', movie);
         dispatch('setToLocalStorage');
      },

      removeFromCart({commit, dispatch }, itemInCart) {
         commit('removeMovieFromCart', itemInCart);
         dispatch('setToLocalStorage');
      },

      decreaseQuantity({ commit }, index) {
         commit('decrease', index)
      },

      increaseQuantity({ commit}, index) {
         commit('increase', index);
      },

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
      }
      
   }
}