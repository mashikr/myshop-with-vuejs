<template>
   <transition tag="div" name="slide" appear>
        <div class="d-flex justify-content-between mt-md-3 mt-lg-0">
            <input v-model="email" @input="activeBtn" type="email" class="form-control mr-4" placeholder="Enter email">
            <button :disabled="active" @click="checkOut" class="btn btn-outline-success">Checkout</button>
        </div>
   </transition>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            active: true
        }
    },
    methods: {
        activeBtn () {
            if (this.email.trim()) {
                this.active = false;
            } else {
                 this.active = true;
            }
        },
        checkOut () {
            this.email = '';
            this.active = true;
            this.$store.commit('deleteAllCartItem');
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