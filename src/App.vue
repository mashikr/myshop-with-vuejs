<template>
  <div class="container-fluid pt-2">
    <app-navbar></app-navbar>

    <div class="mt-5">
      <div class="row">
        <div class="col-md-8 pt-3">
          <router-view></router-view>
        </div>
        <div class="col col-md-4 pt-3 border-left">
          <app-carts :key="componentKey"></app-carts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Carts from './components/Carts.vue';
import { eventBus } from './main.js';
export default {
  name: 'app',
  data () {
    return {
      componentKey: 0
    }
  },
  components: {
    appNavbar: Navbar,
    appCarts: Carts
  },
  created () {
      this.$store.commit('setCartItemFromLocalstorage');

      eventBus.$on('addItem', () => {
            this.componentKey++;
      });
      eventBus.$on('deleteItem', () => {
            this.componentKey--;
      });
  }
}
</script>

<style>
</style>
