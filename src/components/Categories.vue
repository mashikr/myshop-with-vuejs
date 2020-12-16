<template>
    <div>
        <div class="row justify-content-between px-2">
            <app-category v-for="(category, i) in categories" :key="i" :category="category" @currentCategory="getCategoryItems($event)"></app-category>
        </div>

         <div class="row justify-content-center px-2 my-4 border-top pt-4" v-if="values.length">
             <app-item v-for="(value, i) in values" :key="i" :value="value"></app-item>
         </div>
    </div>
</template>

<script>
import data from '../data.js';
import Category from './Category.vue';
import Item from './Item.vue';
export default {
    data () {
        return {
            categories: [],
            values: []
        }
    },
    created () {
       data.forEach(item => {
           var index = -1;
           this.categories.forEach((el, i) => {
               if (el.category == item.brand) {
                   index = i;
               }
           })

           if (index > -1) {
               this.categories[index].amount++;
           } else {
               this.categories.push({ category: item.brand, amount: 1})
           }
       });
    },
    components: {
        appCategory: Category,
        appItem: Item
    },
    methods: {
        getCategoryItems (category) {
            this.values = [];
            data.forEach(item => {
                if (item.brand == category) {
                    this.values.push(item);
                }
            });
        }
    }
}
</script>