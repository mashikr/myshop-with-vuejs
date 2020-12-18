<template>
    <transition tag="div" name="slide" appear>
         <div class="col-8 col-sm-5 col-md-6 col-lg-4 mb-2">
             <div class="card h-100">
                <img class="card-img-top" :src="value.image_url" alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-title">{{ value.title }}</h6>
                    <p class="card-text"><u>Brand:</u> {{ value.brand }}</p>
                    <router-link :to="{ name:'product',params:{ id: value.id } }" class="btn btn-sm btn-primary btn-block">Details</router-link>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-between align-items-center">
                        <span>Price: ${{ value.price }}</span>
                        <button @click="addCart" class="btn btn-sm btn-primary">Add Cart</button>
                    </div>
                </div>
            </div>
         </div>
    </transition> 
</template>

<script>
import { eventBus } from '../main.js';
export default {
    props: ['value'],
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
            transform: translateY(-30px);
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
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>