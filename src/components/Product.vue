<template>
    <transition  tag="div" name="slide" mode="out-in" appear>
        <div v-if="value.id" class="row justify-content-center mb-4 mt-md-3 mt-lg-0">
            <div class="col-8 col-sm-6 col-lg-4 mb-4">
                <img class="img-fluid d-block mx-auto" :src="value.image_url" :alt="value.title">
            </div>
            <div class="col-8 col-sm-6 col-lg-8">
                <h5>{{ value.title }}</h5>
                Provider: <span class="text-muted">{{ value.brand }}</span>
                <hr>
                <p>{{ value.description }}</p>
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <span>Price: <b>${{ value.price }}</b></span>
                    <button @click="addCart" class="btn btn-sm btn-primary">Add Cart</button>
                </div>
            </div>
        </div>
        <div v-else><h1>Not found</h1></div>
    </transition>
</template>

<script>
import { eventBus } from '../main.js';
export default {
    data () {
        return {
            value: {}
        }
    },
    created() {
        this.$store.commit('setCurrentProduct', this.$route.params.id);
        this.value = this.$store.getters.getCurrentProduct;
    },
    methods: {
        addCart () {
            this.$store.commit('setCartItem', this.value.id);
            eventBus.$emit('addItem');
        }
    }
}
</script>

<style scoped>
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(30px);
            opacity: 0;
        }
    }
</style>