<template>
    <div v-if="values.length">
        <div class="row justify-content-center mt-md-3 mt-lg-0 mb-4">
            <app-item v-for="(value, i) in values" :key="i" :value="value"></app-item>
        </div>
    </div>
    <div v-else><h1 class="text-center">Not found</h1></div>
</template>

<script>
import Item from './Item.vue';
export default {
    data () {
        return {
            values: []
        }
    },
    created () {
        this.$store.commit('searchItems', this.$route.query.key.toLowerCase());
        this.values = this.$store.getters.getSearchItems;
    },
    components: {
        appItem: Item
    }
}
</script>