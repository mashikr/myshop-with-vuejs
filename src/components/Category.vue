<template>
    <transition tag='div' name="slide" appear>
            <button class="btn btn-info m-1" @click="getItems">{{ category.category }} <span class="badge badge-warning">{{ category.amount }}</span> </button>
    </transition>
</template>

<script>
export default {
    props: ['category'],
    methods: {
        getItems() {
            this.$emit('currentCategory', this.category.category); 
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