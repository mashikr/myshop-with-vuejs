<template>
     <tr>
      <td>{{ item.title }}</td>
      <td>{{ item.amount }}</td>
      <td>${{ item.amount * item.price }}</td>
      <td><button @click="deleteItem" class="btn btn-sm btn-outline-danger">x</button></td>
    </tr>
</template>

<script>
import { eventBus } from '../main.js';
export default {
    props: ['item', 'index'],
    methods: {
        deleteItem () {
            this.$store.commit('deleteCartItem', this.index);
             eventBus.$emit('deleteItem');
        }
    }
}
</script>