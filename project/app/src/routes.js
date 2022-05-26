import Home from './views/Home.vue';
import ProductPage from './views/ProductPage.vue';
import CartPage from './views/CartPage.vue';
import PageNotFound from './views/PageNotFound.vue';

export default [
      {                             path: '/product',                   redirect: to => { return { path: '/',  }}},
      { name: 'productPage',        path: '/product/:movie_slug',       component: ProductPage },
      { name: 'cart',               path: '/cart',                      component: CartPage }, 
      { name: 'home',               path: '/',                          component:  Home},
      { name: 'pagenotfound',       path: '/:pathMatch(.*)*',           component: PageNotFound },
]