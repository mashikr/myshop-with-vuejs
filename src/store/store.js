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
        currentProduct: ''
    },
    getters: {
        getData: state => {
            return { values: state.currentData, pageNum: state.pageNum };
        },
        getCurrentProduct: state => {
            return state.currentProduct;
        }
    },
    mutations: {
        setCurrentData (state, pageNo) {
            state.currentData = state.data.slice((pageNo-1)*state.maxShow, pageNo*state.maxShow);
            state.pageNum = Math.ceil(state.data.length / state.maxShow);
        },
        setCurrentProduct (state, productId) {
            state.currentProduct = state.data.find(({ id }) => id == productId);
        }
    }
});