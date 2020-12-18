<template>
    <div>
        <h4 class="text-center mb-3">Cart Item</h4>
        <div v-if="items.length">
            <div class="table-responsive-lg">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <app-cart v-for="(item, i) in items" :index="i" :key="i" :item="item"></app-cart>
                    </tbody>
                </table>
            </div>
            <hr>
            <div class="d-flex justify-content-between mt-2">
                <div class="rounded py-2 px-3 bg-warning h5 mb-0">Total</div>
                <div class="rounded py-2 px-3 bg-info text-light h5 mb-0">${{ totalPrice }}</div>
            </div>
            <div v-if="this.$route.name != 'checkout'">
                <hr>
                <div class="d-flex justify-content-between mt-2 mb-4">
                    <button class="btn btn-sm btn-outline-danger" @click="clearAll">Clear All</button>
                    <button @click="show = !show" class="btn btn-sm btn-outline-success">{{ checkOutFlip }}</button>
                </div>
                <app-checkout v-if="show"></app-checkout>
            </div>
        </div>
        <div class="lead text-center" v-else>Cart empty</div>
    </div>
</template>

<script>
import Cart from './Cart.vue';
import { eventBus } from '../main.js';
import Checkout from './Checkout.vue';

export default {
    data () {
        return {
            show: false
        }
    },
    components: {
        appCart: Cart,
        appCheckout: Checkout
    },
    computed: {
        items () {
            return this.$store.getters.getCartItem;
        },
        totalPrice () {
            let price = 0;
            this.items.forEach(element => {
                price += element.amount * element.price;
            });

            return price;
        },
        checkOutFlip () {
            if (this.show) {
                return 'Hide';
            }
            return 'Checkout'
           
        }
    },
    methods: {
        clearAll () {
            if (confirm('Are you sure to delete all ?')) {
                this.$store.commit('deleteAllCartItem');
            }
        }
    }
}
</script>