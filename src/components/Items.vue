<template>
    <div>
        <div class="row justify-content-center">
            <app-item v-for="(value, i) in values" :key="i" :value="value"></app-item>
        </div>
        <nav aria-label="Page navigation example" class="d-flex justify-content-center">
            <ul class="pagination my-4">
                <li class="page-item" v-for="i in pageNum" :key="i">
                    <a class="page-link" :href="'/?page='+ i"> {{ i }}</a>
                </li>
            </ul>
        </nav>
    </div>
    
</template>

<script>
import Item from './Item.vue';
export default {
    data() {
        return {
            values: [],
            pageNum: 0
        }
    },
    components: {
        appItem: Item
    },
    created () {
        let pageNo = 1
        if (this.$route.query.page) {
            pageNo = this.$route.query.page;
        }
        this.$store.commit('setCurrentData', pageNo);
        var data = this.$store.getters.getData;
        this.values = data.values;
        this.pageNum = data.pageNum;
    }
}
</script>

<style>
</style>