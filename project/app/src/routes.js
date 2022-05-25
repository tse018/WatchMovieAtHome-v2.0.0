import Home from './views/Home.vue';
import ProductPage from './views/ProductPage.vue';
import CartPage from './views/CartPage.vue';

export default [
      { name: 'productPage',  path: '/product/:movie_slug', component: ProductPage },
      { name: 'cart',         path: '/cart',                component: CartPage }, 
      { name: 'home',         path: '/',                    component:  Home},
]