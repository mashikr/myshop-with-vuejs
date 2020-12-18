import Vue from 'vue';
import Vuex from 'vuex';
import data from '../data.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        data: data,
        currentData: [],
        pageNum: 0,
        maxShow: 21,
        currentProduct: {},
        searchItems: [],
        cartItems: []
    },
    getters: {
        getData: state => {
            return { values: state.currentData, pageNum: state.pageNum };
        },
        getCurrentProduct: state => {
            return state.currentProduct;
        },
        getSearchItems: state => {
            return state.searchItems;
        },
        getCartItem: state => {
            return state.cartItems;
        }
    },
    mutations: {
        setCurrentData (state, pageNo) {
            state.currentData = state.data.slice((pageNo-1)*state.maxShow, pageNo*state.maxShow);
            state.pageNum = Math.ceil(state.data.length / state.maxShow);
        },
        setCurrentProduct (state, productId) {
            state.currentProduct = state.data.find(({ id }) => id == productId);
        },
        searchItems (state, key) {
            state.searchItems = [];
            state.data.forEach(item => {
                if (item.title.toLowerCase().match(key)) {
                    state.searchItems.push(item);
                }
            });
        },
        setCartItem (state, productId) {
            var cartItem = state.data.find(({ id }) => id == productId);
            let i = -1;
            if (state.cartItems) {
                state.cartItems.forEach((item, index) => {
                    if (item.id == productId) {
                        i = index;
                    }
                });
            }

            if (i > -1) {
                state.cartItems[i].amount++;
            } else {
                cartItem.amount = 1;

                if (state.cartItems) {
                    state.cartItems.push(cartItem);
                } else {
                    state.cartItems = cartItem;
                }
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        setCartItemFromLocalstorage (state) {
            if (localStorage.getItem('cartItems')) {
                state.cartItems = JSON.parse(localStorage.getItem('cartItems'));
            }
        },
        deleteCartItem (state, i) {
            if (state.cartItems[i].amount > 1) {
                state.cartItems[i].amount--;
            } else {
                state.cartItems.splice(i, 1);
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        deleteAllCartItem (state) {
            state.cartItems = [];
            localStorage.removeItem('cartItems');
        }
    }
});