import Items from './components/Items.vue';
import Categories from './components/Categories.vue';
import Checkout from './components/Checkout.vue';
import Product from './components/Product.vue';

export const routes = [
    { path: '/', component: Items, name: 'home' },
    { path: '/categories', component: Categories },
    { path: '/checkout', component: Checkout },
    { path: '/product/:id', component: Product, name: 'product' },
    { path: '*', component: Items }
];